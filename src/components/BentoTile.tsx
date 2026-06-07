'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BentoTileProps {
  children: ReactNode
  className?: string
}

export default function BentoTile({ children, className = '' }: BentoTileProps) {
  return (
    <motion.article
      whileHover={{
        scale: 1.015,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      className={`
        relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800/50
        overflow-hidden group hover:border-zinc-700/60 transition-colors duration-300
        grain-texture ${className}
      `}
    >
      <div className="absolute inset-0 bg-zinc-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.article>
  )
}
