# Student Dashboard Prototype

Hey! This is my submission for the Student Dashboard intern task. I built it using Next.js (App Router), Tailwind CSS v4, and Supabase.

I split the app strictly into Server and Client components. The main `page.tsx` is a Server Component that handles fetching the active courses directly from Supabase. I wrapped the data fetching in a React `<Suspense>` boundary to show a skeleton loader while the data loads. For the UI, I built a Bento Grid layout and kept the interactive parts (like the Sidebar and Course Cards) as Client Components so I could use Framer Motion for the animations.

### Problems I faced:
I ran into a weird issue when deploying to Vercel where my `.env` variables weren't being picked up properly, so I had to double-check that they were properly added in the Vercel dashboard. I also struggled a bit with getting the Framer Motion hover animations to feel smooth without breaking the layout, but using strict CSS transforms solved it.

### Setup
1. Clone the repo
2. Run `npm install`
3. Copy `.env.example` to `.env.local` and add the Supabase keys
4. Run `npm run dev`
