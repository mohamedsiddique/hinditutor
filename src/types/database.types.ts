export interface Profile {
  id: string;
  created_at: string;
  email: string;
  full_name: string | null;
  role: 'student' | 'tutor' | 'admin';
  avatar_url: string | null;
}

export interface Course {
  id: string;
  created_at: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  age_group: 'kids' | 'adults' | 'all';
  duration_weeks: number;
  price: number;
}

export interface Enrollment {
  id: string;
  created_at: string;
  student_id: string;
  course_id: string;
  status: 'active' | 'completed' | 'cancelled';
  start_date: string;
  end_date: string | null;
}

export interface Session {
  id: string;
  created_at: string;
  tutor_id: string;
  student_id: string;
  course_id: string;
  scheduled_at: string;
  duration_minutes: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes: string | null;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, 'id' | 'created_at'>;
        Update: Partial<Omit<Profile, 'id' | 'created_at'>>;
      };
      courses: {
        Row: Course;
        Insert: Omit<Course, 'id' | 'created_at'>;
        Update: Partial<Omit<Course, 'id' | 'created_at'>>;
      };
      enrollments: {
        Row: Enrollment;
        Insert: Omit<Enrollment, 'id' | 'created_at'>;
        Update: Partial<Omit<Enrollment, 'id' | 'created_at'>>;
      };
      sessions: {
        Row: Session;
        Insert: Omit<Session, 'id' | 'created_at'>;
        Update: Partial<Omit<Session, 'id' | 'created_at'>>;
      };
    };
  };
} 