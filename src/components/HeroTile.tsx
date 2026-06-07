'use client'

import { Flame, Calendar, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import BentoTile from './BentoTile'

export default function HeroTile() {
  const hours = new Date().getHours()
  let greeting = 'Good evening'
  if (hours < 12) greeting = 'Good morning'
  else if (hours < 18) greeting = 'Good afternoon'

  return (
    <BentoTile>
      <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between min-h-[220px]">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="text-sm font-medium text-zinc-400 mb-2">{greeting}</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-50 tracking-tight">
            Welcome back, Sudais Khan
          </h1>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base max-w-md leading-relaxed">
            Ready to continue your learning journey? You're doing great this week.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 flex flex-wrap items-center gap-8 sm:gap-12 mt-10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-zinc-800 border border-zinc-700">
              <Flame size={24} className="text-zinc-100" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-100">12</p>
              <p className="text-sm font-medium text-zinc-500">Day Streak</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-zinc-800 border border-zinc-700">
              <Calendar size={24} className="text-zinc-100" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-100">4</p>
              <p className="text-sm font-medium text-zinc-500">Active Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-zinc-800 border border-zinc-700">
              <TrendingUp size={24} className="text-zinc-100" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-100">68h</p>
              <p className="text-sm font-medium text-zinc-500">This Month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </BentoTile>
  )
}
