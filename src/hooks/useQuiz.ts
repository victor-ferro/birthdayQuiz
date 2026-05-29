import { useState } from 'react'
import type { Question, QuizState, Answer } from '@/types/quiz'
import { normalizeAnswer } from '@/lib/utils'
import { saveEntry } from '@/lib/leaderboard'

function computeScore(questions: Question[], answers: Answer[]): number {
  return answers.reduce((acc, answer) => {
    const q = questions.find((q) => q.id === answer.questionId)
    if (!q) return acc

    if (q.type === 'single-choice') {
      return answer.value === q.correctAnswer ? acc + 1 : acc
    }

    if (q.type === 'open' && q.correctAnswer !== undefined) {
      const userAnswer = typeof answer.value === 'string' ? answer.value : ''
      return normalizeAnswer(userAnswer) === normalizeAnswer(q.correctAnswer) ? acc + 1 : acc
    }

    return acc
  }, 0)
}

const initialState: QuizState = {
  screen: 'name',
  playerName: '',
  currentIndex: 0,
  answers: [],
  score: 0,
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
        return { ...prev, answers, score: finalScore, screen: 'results' }
      }

      return { ...prev, answers, currentIndex: prev.currentIndex + 1 }
    })
  }

  function restart() {
    setState(initialState)
  }

  return { state, startQuiz, submitAnswer, restart }
}
