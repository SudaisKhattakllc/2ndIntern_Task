'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
} from 'lucide-react'

const navItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: BookOpen, label: 'Courses', id: 'courses' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('dashboard')
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ width: isCollapsed ? 80 : 260 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden md:flex sticky top-0 h-screen bg-zinc-950/80 backdrop-blur-xl border-r border-zinc-800/50 z-50 flex-col flex-shrink-0"
      >
        <header className="flex items-center justify-between p-5 border-b border-zinc-800/50">
          <motion.div
            animate={{
              opacity: isCollapsed ? 0 : 1,
              width: isCollapsed ? 0 : 'auto',
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden whitespace-nowrap"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={24} className="text-zinc-100" />
              <span className="text-xl font-extrabold text-zinc-100">
                LearnHub
              </span>
            </div>
          </motion.div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-zinc-800/60 transition-colors text-zinc-400 hover:text-zinc-200"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </header>

        <div className="flex-1 py-8 px-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className="relative w-full flex items-center gap-4 p-4 rounded-xl transition-colors duration-200 group"
            >
              {activeItem === item.id && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-zinc-800 rounded-xl"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon
                size={20}
                className={`relative z-10 flex-shrink-0 ${
                  activeItem === item.id
                    ? 'text-zinc-100'
                    : 'text-zinc-500 group-hover:text-zinc-300'
                }`}
              />
              <motion.span
                animate={{
                  opacity: isCollapsed ? 0 : 1,
                  width: isCollapsed ? 0 : 'auto',
                }}
                transition={{ duration: 0.15 }}
                className={`relative z-10 text-sm font-medium whitespace-nowrap overflow-hidden ${
                  activeItem === item.id
                    ? 'text-zinc-100'
                    : 'text-zinc-500 group-hover:text-zinc-300'
                }`}
              >
                {item.label}
              </motion.span>
            </button>
          ))}
        </div>

        <footer className="p-4 border-t border-zinc-800/50">
          <motion.div
            animate={{
              opacity: isCollapsed ? 0 : 1,
              height: isCollapsed ? 0 : 'auto',
            }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900">
              <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                SK
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-zinc-200 truncate">Sudais Khan</p>
                <p className="text-xs text-zinc-500">Student</p>
              </div>
            </div>
          </motion.div>
          {isCollapsed && (
            <div className="flex justify-center">
              <div className="w-9 h-9 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold text-white">
                RS
              </div>
            </div>
          )}
        </footer>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.nav
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed left-0 top-0 h-full w-[280px] bg-zinc-950 border-r border-zinc-800/50 z-50 flex flex-col"
            >
              <header className="flex items-center justify-between p-5 border-b border-zinc-800/50">
                <div className="flex items-center gap-2">
                  <GraduationCap size={22} className="text-white" />
                  <span className="text-lg font-bold text-white">
                    LearnHub
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-zinc-800/60 transition-colors text-zinc-400"
                >
                  <X size={18} />
                </button>
              </header>

              <div className="flex-1 py-6 px-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id)
                      setIsMobileOpen(false)
                    }}
                    className="relative w-full flex items-center gap-3 p-3 rounded-xl transition-colors duration-200 group"
                  >
                    {activeItem === item.id && (
                      <motion.div
                        layoutId="mobile-sidebar-active"
                        className="absolute inset-0 bg-zinc-800 rounded-xl"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <item.icon
                      size={20}
                      className={`relative z-10 ${
                        activeItem === item.id ? 'text-zinc-100' : 'text-zinc-500'
                      }`}
                    />
                    <span
                      className={`relative z-10 text-sm font-medium ${
                        activeItem === item.id ? 'text-zinc-100' : 'text-zinc-500 group-hover:text-zinc-300'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              <footer className="p-4 border-t border-zinc-800/50">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/20">
                  <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-100">
                    SK
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-200 truncate">Sudais Khan</p>
                    <p className="text-xs text-zinc-500">Student</p>
                  </div>
                </div>
              </footer>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-3.5 bg-zinc-100 rounded-2xl shadow-lg text-zinc-900"
        aria-label="Toggle navigation menu"
      >
        <Menu size={22} />
      </button>
    </>
  )
}
