'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import {
  Code2,
  FileCode,
  Zap,
  Palette,
  BookOpen,
  GraduationCap,
  Target,
  Trophy,
  Braces,
  Database,
  Globe,
  Layers,
  type LucideIcon,
} from 'lucide-react'
import type { Course } from '@/lib/supabase'
import BentoTile from './BentoTile'

const iconMap: Record<string, LucideIcon> = {
  Code2,
  FileCode,
  Zap,
  Palette,
  BookOpen,
  GraduationCap,
  Target,
  Trophy,
  Braces,
  Database,
  Globe,
  Layers,
}

interface CourseCardProps {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const progressControl = useAnimation()
  const IconComponent = iconMap[course.icon_name] || BookOpen

  useEffect(() => {
    progressControl.start({
      width: `${course.progress}%`,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    })
  }, [course.progress, progressControl])

  return (
    <BentoTile>
      <div className="relative h-full p-8 sm:p-9 flex flex-col min-h-[180px]">
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2.5 rounded-xl bg-zinc-800 border border-zinc-700">
              <IconComponent size={20} className="text-zinc-100" />
            </div>
            <span className="text-xs font-semibold text-zinc-300 bg-zinc-800/60 px-2.5 py-1 rounded-lg tabular-nums">
              {course.progress}%
            </span>
          </div>
          <h3 className="text-lg font-bold text-zinc-100 mb-2 line-clamp-2 leading-tight">
            {course.title}
          </h3>
          <div className="mt-auto pt-6">
            <div className="h-1.5 bg-zinc-800/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={progressControl}
                className="h-full bg-zinc-100 rounded-full"
              />
            </div>
            <p className="text-[11px] text-zinc-600 mt-2">Progress</p>
          </div>
        </div>
      </div>
    </BentoTile>
  )
}
