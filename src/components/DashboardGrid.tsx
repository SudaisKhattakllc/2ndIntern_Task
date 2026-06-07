'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
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

interface DashboardGridProps {
  children: ReactNode
}

export default function DashboardGrid({ children }: DashboardGridProps) {
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-min"
    >
      {childArray.map((child, index) => {
        if (index === 0) {
          return (
            <motion.div key="hero" variants={itemVariants} className="col-span-1 md:col-span-2">
              {child}
            </motion.div>
          )
        }
        if (index === 1) {
          return (
            <motion.div key="activity" variants={itemVariants} className="col-span-1">
              {child}
            </motion.div>
          )
        }
        return (
          <motion.div key={`slot-${index}`} variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3">
            {child}
          </motion.div>
        )
      })}
    </motion.section>
  )
}
