import { Suspense } from 'react'
import { fetchCourses } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import DashboardGrid from '@/components/DashboardGrid'
import HeroTile from '@/components/HeroTile'
import ActivityTile from '@/components/ActivityTile'
import CoursesGrid from '@/components/CoursesGrid'
import SkeletonGrid from '@/components/SkeletonGrid'

async function CoursesLoader() {
  const courses = await fetchCourses()
  return <CoursesGrid courses={courses} />
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar />
      <main className="flex-1 min-w-0 transition-all duration-300">
        <div className="p-6 sm:p-8 lg:p-10 max-w-[1600px] mx-auto w-full">
          <DashboardGrid>
            <HeroTile />
            <ActivityTile />
            <Suspense fallback={<SkeletonGrid count={4} />}>
              <CoursesLoader />
            </Suspense>
          </DashboardGrid>
        </div>
      </main>
    </div>
  )
}
