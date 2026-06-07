# Student Dashboard Prototype

This is my submission for the Student Dashboard intern task. It's built with Next.js (App Router), Tailwind CSS v4, Framer Motion, and Supabase.

## Architecture & Logic
I split the app strictly into Server and Client components. The main `page.tsx` is a Server Component that handles fetching the active courses directly from Supabase. I wrapped the data fetching in a React `<Suspense>` boundary to show a custom skeleton loader while the data loads.

For the UI, I built a responsive Bento Grid layout. To keep the codebase modular, all interactive parts like the `Sidebar`, `CourseCard`, and `ActivityTile` are separate Client Components. This was necessary because they rely heavily on Framer Motion hooks (`useAnimation`, `whileHover`) for hover states and staggered entrance animations.

## Challenges Faced
- **Hydration Mismatches:** I ran into some annoying hydration errors early on because of browser extensions modifying HTML before React loaded. I also had to make sure my mock data for the activity graph was perfectly deterministic so the server and client HTML matched exactly.
- **Animation Layout Shifts:** Getting the hover animations right without triggering layout reflows was a bit tricky. I solved this by strictly using hardware-accelerated CSS transforms (`scale` and `y` properties) instead of animating heights or margins on the cards.

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase credentials
4. Run the SQL script from `supabase-setup.sql` in your Supabase SQL editor
5. Run `npm run dev`
