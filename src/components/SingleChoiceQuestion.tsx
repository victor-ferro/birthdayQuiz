import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { SingleChoiceQuestion as SingleChoiceQuestionType } from '@/types/quiz'

interface SingleChoiceQuestionProps {
  question: SingleChoiceQuestionType
  onSelect: (index: number) => void
}

const LABELS = ['A', 'B', 'C', 'D']

export function SingleChoiceQuestion({ question, onSelect }: SingleChoiceQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)

  function handleSelect(index: number) {
    if (selected !== null) return
    setSelected(index)
    setTimeout(() => onSelect(index), 320)
  }

  return (
    <div className="space-y-2.5 animate-slide-up">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(index)}
          disabled={selected !== null && selected !== index}
          aria-pressed={selected === index}
          className={cn(
            'w-full flex items-center gap-4 px-4 py-4 rounded-xl border text-left',
            'transition-all duration-200 cursor-pointer',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
            selected === null && 'hover:border-primary/50 hover:bg-primary/[0.04]',
            selected === null
              ? 'border-border bg-surface/80 text-foreground'
              : selected === index
                ? 'border-primary bg-accent/25 text-foreground shadow-[0_0_0_1px_#c9a96e]'
                : 'border-border bg-surface/40 text-muted/60 cursor-not-allowed opacity-40'
          )}
        >
          <span
            className={cn(
              'flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center',
              'text-xs font-semibold transition-all duration-200',
              selected === index
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border/80 text-muted'
            )}
          >
            {LABELS[index]}
          </span>
          <span className="text-sm leading-snug font-normal">{option}</span>
        </button>
      ))}
    </div>
  )
}
