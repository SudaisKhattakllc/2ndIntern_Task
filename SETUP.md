Student Dashboard Setup

1. Create a free Supabase project at https://supabase.com

2. Run the SQL setup script in your Supabase SQL editor:
   - Open supabase-setup.sql
   - Copy and paste the contents into your Supabase SQL editor
   - Execute the script to create the courses table with seed data

3. Add your Supabase credentials to environment variables:
   - Create a .env.local file in the project root
   - Add these variables:
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run the development server:
   npm run dev

5. Open http://localhost:3000 to view your dashboard

Features
- Dark mode Bento Grid layout
- Real-time course data from Supabase
- Animated progress bars
- Responsive design (desktop, tablet, mobile)
- Smooth hover animations
- Loading states with skeleton loaders
- Error handling
