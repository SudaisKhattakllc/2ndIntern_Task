'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
          <AlertTriangle size={28} className="text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-100 mb-3">Something went wrong</h2>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          We could not load your dashboard data. This might be a temporary issue with the database connection.
        </p>
        <button
          onClick={unstable_retry}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Try again
        </button>
      </div>
    </section>
  )
}
