'use client'

import { motion } from 'framer-motion'
import type { Course } from '@/lib/supabase'
import CourseCard from './CourseCard'

interface CoursesGridProps {
  courses: Course[]
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 24,
    },
  },
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  if (courses.length === 0) {
    return (
      <div className="col-span-full">
        <div className="p-8 text-center rounded-2xl border border-zinc-800/30 bg-zinc-900/30">
          <p className="text-zinc-500 text-sm">
            No courses found. Add your Supabase credentials and run the SQL setup script.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
      {courses.map((course, idx) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: idx * 0.1 }}
        >
          <CourseCard course={course} index={idx} />
        </motion.div>
      ))}
    </div>
  )
}
