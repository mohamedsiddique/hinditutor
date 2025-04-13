import { supabase } from './supabase';
import type { Database, Profile, Course, Enrollment, Session } from '../types/database.types';

// Profile operations
export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data;
};

export const updateProfile = async (userId: string, updates: Partial<Profile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

// Course operations
export const getCourses = async (filters?: {
  level?: Course['level'];
  age_group?: Course['age_group'];
}) => {
  let query = supabase.from('courses').select('*');
  
  if (filters?.level) {
    query = query.eq('level', filters.level);
  }
  if (filters?.age_group) {
    query = query.eq('age_group', filters.age_group);
  }
  
  const { data, error } = await query;
  if (error) throw error;
  return data;
};

export const getCourseById = async (courseId: string) => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', courseId)
    .single();
  
  if (error) throw error;
  return data;
};

// Enrollment operations
export const createEnrollment = async (enrollment: Database['public']['Tables']['enrollments']['Insert']) => {
  const { data, error } = await supabase
    .from('enrollments')
    .insert(enrollment)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getStudentEnrollments = async (studentId: string) => {
  const { data, error } = await supabase
    .from('enrollments')
    .select(`
      *,
      courses (*)
    `)
    .eq('student_id', studentId);
  
  if (error) throw error;
  return data;
};

// Session operations
export const createSession = async (session: Database['public']['Tables']['sessions']['Insert']) => {
  const { data, error } = await supabase
    .from('sessions')
    .insert(session)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const getUpcomingSessions = async (userId: string, role: 'student' | 'tutor') => {
  const { data, error } = await supabase
    .from('sessions')
    .select(`
      *,
      courses (*),
      profiles!sessions_student_id_fkey (full_name, email),
      profiles!sessions_tutor_id_fkey (full_name, email)
    `)
    .eq(role === 'student' ? 'student_id' : 'tutor_id', userId)
    .gte('scheduled_at', new Date().toISOString())
    .order('scheduled_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

// Real-time subscriptions
export const subscribeToSessions = (
  userId: string,
  role: 'student' | 'tutor',
  callback: (payload: any) => void
) => {
  return supabase
    .channel('sessions')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'sessions',
        filter: `${role === 'student' ? 'student_id' : 'tutor_id'}=eq.${userId}`
      },
      callback
    )
    .subscribe();
}; 