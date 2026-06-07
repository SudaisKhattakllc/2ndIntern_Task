'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import BentoTile from './BentoTile'

function generateStableData() {
  const seed = [
    0.2, 0.8, 0.1, 0.6, 0.3, 0.9, 0.4,
    0.7, 0.1, 0.5, 0.8, 0.2, 0.6, 0.3,
    0.9, 0.4, 0.7, 0.1, 0.5, 0.8, 0.2,
    0.6, 0.3, 0.9, 0.4, 0.7, 0.5, 0.8,
    0.1, 0.6, 0.9, 0.3, 0.7, 0.2, 0.8,
  ]
  return seed
}

function getIntensityClass(value: number): string {
  if (value > 0.7) return 'bg-zinc-200'
  if (value > 0.5) return 'bg-zinc-400'
  if (value > 0.3) return 'bg-zinc-600'
  return 'bg-zinc-800'
}

const weekLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default function ActivityTile() {
  const activityData = useMemo(() => generateStableData(), [])
  const weeks = useMemo(() => {
    const result = []
    for (let i = 0; i < activityData.length; i += 7) {
      result.push(activityData.slice(i, i + 7))
    }
    return result
  }, [activityData])

  return (
    <BentoTile>
      <div className="relative h-full p-8 sm:p-10 min-h-[220px] flex flex-col">
        <h2 className="text-lg font-semibold text-zinc-100 mb-6">Learning Activity</h2>
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex gap-1.5">
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-1.5">
                {week.map((value, dayIdx) => (
                  <motion.div
                    key={`${weekIdx}-${dayIdx}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (weekIdx * 7 + dayIdx) * 0.015,
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    className={`w-4 h-4 rounded-[3px] ${getIntensityClass(value)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3 text-[10px] text-zinc-600">
            {weekLabels.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-600">Less</span>
            <div className="flex gap-0.5">
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-800" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-400" />
              <div className="w-2.5 h-2.5 rounded-sm bg-zinc-200" />
            </div>
            <span className="text-[10px] text-zinc-600">More</span>
          </div>
        </div>
      </div>
    </BentoTile>
  )
}
