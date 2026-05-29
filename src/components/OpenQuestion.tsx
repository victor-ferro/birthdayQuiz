import { useState } from 'react'
import { Button } from '@/components/ui/button'
import type { OpenQuestion as OpenQuestionType } from '@/types/quiz'

interface OpenQuestionProps {
  question: OpenQuestionType
  onSubmit: (value: string) => void
}

export function OpenQuestion({ question, onSubmit }: OpenQuestionProps) {
  const [text, setText] = useState('')

  return (
    <div className="space-y-4 animate-slide-up">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={question.placeholder ?? 'Escribe tu respuesta...'}
        rows={4}
        className="w-full rounded-xl border border-border bg-surface/80 px-4 py-3.5 text-foreground placeholder:text-muted/60 resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-surface focus:border-primary transition-colors duration-200 text-sm leading-relaxed"
      />
      <Button
        size="md"
        onClick={() => onSubmit(text.trim())}
        className="w-full"
      >
        Siguiente
      </Button>
    </div>
  )
}
