import { BIRTHDAY_PERSON_NAME } from '@/data/questions'
import { normalizeAnswer } from '@/lib/utils'
import type { Answer, Question } from '@/types/quiz'

interface ResultsScreenProps {
  playerName: string
  score: number
  totalScorable: number
  answers: Answer[]
  questions: Question[]
}

function getResultMessage(score: number, total: number, name: string): string {
  const ratio = total === 0 ? 1 : score / total
  if (ratio >= 0.75) return `¡Increíble, ${name}! Los conoces de verdad.`
  if (ratio >= 0.5) return `Bien hecho, ${name}. Buen conocedor/a.`
  return `Aún hay secretos por descubrir, ${name}.`
}

export function ResultsScreen({
  playerName,
  score,
  totalScorable,
  answers,
  questions,
}: ResultsScreenProps) {
  const message = getResultMessage(score, totalScorable, playerName)
  const pct = totalScorable === 0 ? 100 : Math.round((score / totalScorable) * 100)

  const openAnswers = answers.filter((a) => {
    const q = questions.find((q) => q.id === a.questionId)
    return q?.type === 'open' && typeof a.value === 'string' && a.value.trim().length > 0
  })

  return (
    <div className="w-full max-w-sm mx-auto animate-fade-in space-y-4">
      {/* Score card */}
      <div className="bg-surface border border-border rounded-2xl p-8 text-center space-y-6 shadow-xl shadow-primary/8">
        <div className="space-y-1">
          <div
            className="font-serif leading-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 4.5rem)' }}
          >
            <span className="text-primary font-semibold">{score}</span>
            <span className="text-muted text-2xl font-normal">/{totalScorable}</span>
          </div>
          <p className="text-xs text-muted/70 uppercase tracking-widest">
            Respuestas correctas · {pct}%
          </p>
        </div>

        <div className="w-full bg-border rounded-full h-0.5 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-lg text-foreground leading-snug">{message}</h2>
          <p className="text-xs text-muted leading-relaxed">
            Gracias por jugar en el cumpleaños de{' '}
            <span className="text-primary/90">{BIRTHDAY_PERSON_NAME}</span>
          </p>
        </div>
      </div>

      {/* Open answers */}
      {openAnswers.length > 0 && (
        <div className="bg-surface border border-border rounded-2xl p-6 space-y-5 shadow-lg shadow-primary/6">
          <h3 className="text-xs text-muted uppercase tracking-widest font-medium">
            Tus respuestas
          </h3>
          <ul className="space-y-5">
            {openAnswers.map((answer) => {
              const q = questions.find((q) => q.id === answer.questionId)
              if (!q || q.type !== 'open') return null

              const userValue = typeof answer.value === 'string' ? answer.value : ''
              const hasCorrect = q.correctAnswer !== undefined
              const validAnswers = Array.isArray(q.correctAnswer)
                ? q.correctAnswer.map(normalizeAnswer)
                : q.correctAnswer !== undefined ? [normalizeAnswer(q.correctAnswer)] : []
              const isCorrect = hasCorrect && validAnswers.includes(normalizeAnswer(userValue))

              return (
                <li key={answer.questionId} className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs text-muted leading-snug flex-1">{q.text}</p>
                    {hasCorrect && (
                      <span
                        className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                            : 'bg-red-50 text-red-500 border border-red-200'
                        }`}
                      >
                        {isCorrect ? 'Correcto' : 'Incorrecto'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary italic leading-relaxed font-serif border-l-2 border-primary/25 pl-3">
                    &ldquo;{answer.value}&rdquo;
                  </p>
                  {hasCorrect && !isCorrect && (
                    <p className="text-xs text-muted pl-3">
                      Respuesta correcta:{' '}
                      <span className="text-primary font-medium">{q.correctAnswer}</span>
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}

    </div>
  )
}
