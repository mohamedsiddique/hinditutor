# Hindi Pathshala - Online Hindi Tutoring Platform

A modern web application for Hindi language tutoring, built with React, TypeScript, and Supabase.

## Features

- User authentication (students, tutors, and admins)
- Course management
- Session scheduling
- Real-time updates for tutoring sessions
- Profile management
- Responsive design with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Supabase (Backend and Authentication)
- Tailwind CSS
- Vite
- React Router DOM

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd hindi-pathshala
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Database Setup

1. Create a new Supabase project
2. Run the SQL commands provided in `database/schema.sql`
3. Set up Row Level Security (RLS) policies as defined in the schema

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/      # React contexts (Auth, etc.)
├── lib/           # Utility functions and API calls
├── pages/         # Page components
└── types/         # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 