import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  className?: string
}

export function Progress({ value, className }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, value))
  return (
    <div className={cn('h-1 w-full rounded-full bg-border overflow-hidden', className)}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
