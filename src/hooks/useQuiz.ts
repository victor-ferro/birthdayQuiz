import { useState } from 'react'
import type { Question, QuizState, Answer } from '@/types/quiz'
import { normalizeAnswer } from '@/lib/utils'
import { saveEntry } from '@/lib/leaderboard'
import { saveResponses } from '@/lib/supabase'
import type { ResponseRow } from '@/lib/supabase'

function isCorrect(q: Question, answer: Answer): boolean | null {
  if (q.type === 'single-choice') {
    return answer.value === q.correctAnswer
  }
  if (q.type === 'open' && q.correctAnswer !== undefined) {
    const userAnswer = normalizeAnswer(typeof answer.value === 'string' ? answer.value : '')
    const valid = Array.isArray(q.correctAnswer)
      ? q.correctAnswer.map(normalizeAnswer)
      : [normalizeAnswer(q.correctAnswer)]
    return valid.includes(userAnswer)
  }
  return null
}

function computeScore(questions: Question[], answers: Answer[]): number {
  return answers.reduce((acc, answer) => {
    const q = questions.find((q) => q.id === answer.questionId)
    if (!q) return acc
    return isCorrect(q, answer) === true ? acc + 1 : acc
  }, 0)
}

const initialState: QuizState = {
  screen: 'name',
  playerName: '',
  currentIndex: 0,
  answers: [],
  score: 0,
  totalScorable: 0,
}

export function useQuiz(questions: Question[]) {
  const [state, setState] = useState<QuizState>(initialState)

  function startQuiz(name: string) {
    setState({ ...initialState, screen: 'quiz', playerName: name.trim() })
  }

  function submitAnswer(value: string | number | null) {
    setState((prev) => {
      const answer: Answer = {
        questionId: questions[prev.currentIndex].id,
        value,
      }
      const answers = [...prev.answers, answer]
      const isLast = prev.currentIndex >= questions.length - 1

      if (isLast) {
        const finalScore = computeScore(questions, answers)
        const totalScorable = questions.filter(
          (q) => q.type === 'single-choice' || (q.type === 'open' && q.correctAnswer !== undefined)
        ).length
        saveEntry({ name: prev.playerName, score: finalScore, totalScorable })

        const rows: ResponseRow[] = answers.map((a) => {
          const q = questions.find((q) => q.id === a.questionId)!
          const answerText =
            q.type === 'single-choice'
              ? (q.options[a.value as number] ?? String(a.value))
              : String(a.value ?? '')
          return {
            player_name: prev.playerName,
            question_id: q.id,
            question_text: q.text,
            question_subject: q.subject,
            answer_value: answerText,
            is_correct: isCorrect(q, a),
          }
        })
        saveResponses(rows)

        return { ...prev, answers, score: finalScore, totalScorable, screen: 'results' }
      }

      return { ...prev, answers, currentIndex: prev.currentIndex + 1 }
    })
  }

  function restart() {
    setState(initialState)
  }

  return { state, startQuiz, submitAnswer, restart }
}
