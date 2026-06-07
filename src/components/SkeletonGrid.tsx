export default function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="col-span-1 h-44 bg-zinc-900/40 rounded-2xl border border-zinc-800/30 skeleton-pulse"
        />
      ))}
    </>
  )
}
