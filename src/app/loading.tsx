import SkeletonGrid from '@/components/SkeletonGrid'

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-zinc-950/80 border-r border-zinc-800/50" />
      <div className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="col-span-1 md:col-span-2">
            <div className="h-48 bg-zinc-900/50 rounded-2xl border border-zinc-800/30 skeleton-pulse" />
          </div>
          <div className="col-span-1">
            <div className="h-48 bg-zinc-900/50 rounded-2xl border border-zinc-800/30 skeleton-pulse" />
          </div>
          <SkeletonGrid count={4} />
        </div>
      </div>
    </div>
  )
}
