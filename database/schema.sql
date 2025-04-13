-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null,
  full_name text,
  role text check (role in ('student', 'tutor', 'admin')) not null,
  avatar_url text
);

-- Create courses table
create table courses (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text not null,
  level text check (level in ('beginner', 'intermediate', 'advanced')) not null,
  age_group text check (age_group in ('kids', 'adults', 'all')) not null,
  duration_weeks integer not null,
  price numeric not null
);

-- Create enrollments table
create table enrollments (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  student_id uuid references profiles(id) on delete cascade not null,
  course_id uuid references courses(id) on delete cascade not null,
  status text check (status in ('active', 'completed', 'cancelled')) not null,
  start_date timestamp with time zone not null,
  end_date timestamp with time zone,
  unique(student_id, course_id)
);

-- Create sessions table
create table sessions (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  tutor_id uuid references profiles(id) on delete cascade not null,
  student_id uuid references profiles(id) on delete cascade not null,
  course_id uuid references courses(id) on delete cascade not null,
  scheduled_at timestamp with time zone not null,
  duration_minutes integer not null,
  status text check (status in ('scheduled', 'completed', 'cancelled')) not null,
  notes text
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;
alter table courses enable row level security;
alter table enrollments enable row level security;
alter table sessions enable row level security;

-- Create policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile"
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile"
  on profiles for update
  using ( auth.uid() = id );

create policy "Courses are viewable by everyone"
  on courses for select
  using ( true );

create policy "Only admins can insert courses"
  on courses for insert
  using ( exists (
    select 1 from profiles
    where id = auth.uid()
    and role = 'admin'
  ));

create policy "Only admins can update courses"
  on courses for update
  using ( exists (
    select 1 from profiles
    where id = auth.uid()
    and role = 'admin'
  ));

create policy "Enrollments are viewable by involved users"
  on enrollments for select
  using (
    auth.uid() = student_id or
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role = 'admin'
    )
  );

create policy "Students can create their own enrollments"
  on enrollments for insert
  with check ( auth.uid() = student_id );

create policy "Students can update their own enrollments"
  on enrollments for update
  using ( auth.uid() = student_id );

create policy "Sessions are viewable by involved users"
  on sessions for select
  using (
    auth.uid() = student_id or
    auth.uid() = tutor_id or
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role = 'admin'
    )
  );

create policy "Tutors can create sessions"
  on sessions for insert
  with check (
    auth.uid() = tutor_id or
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role = 'admin'
    )
  );

create policy "Involved users can update sessions"
  on sessions for update
  using (
    auth.uid() = student_id or
    auth.uid() = tutor_id or
    exists (
      select 1 from profiles
      where id = auth.uid()
      and role = 'admin'
    )
  ); 