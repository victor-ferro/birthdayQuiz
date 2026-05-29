import { ProgressBar } from './ProgressBar'
import { QuestionCard } from './QuestionCard'
import type { Question } from '@/types/quiz'

interface QuizScreenProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (value: string | number | null) => void
}

export function QuizScreen({ question, questionNumber, totalQuestions, onAnswer }: QuizScreenProps) {
  return (
    <div className="w-full max-w-sm mx-auto animate-fade-in">
      <div
        key={question.id}
        className="bg-surface border border-border rounded-2xl p-6 space-y-6 shadow-xl shadow-primary/8 animate-slide-up"
      >
        <ProgressBar current={questionNumber} total={totalQuestions} />
        <QuestionCard question={question} onAnswer={onAnswer} />
      </div>
    </div>
  )
}
