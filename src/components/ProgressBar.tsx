import { Progress } from '@/components/ui/progress'

interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = (current / total) * 100
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-muted/80 font-medium tracking-widest uppercase">
          Pregunta {current} de {total}
        </span>
        <span className="text-[10px] text-primary/80 font-medium tabular-nums">
          {Math.round(pct)}%
        </span>
      </div>
      <Progress value={pct} />
    </div>
  )
}
