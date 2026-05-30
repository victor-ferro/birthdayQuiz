export type QuestionType = 'open' | 'single-choice'
export type QuestionSubject = 'marcos' | 'victor' | 'conjunta'

export interface OpenQuestion {
  id: string
  type: 'open'
  subject: QuestionSubject
  text: string
  placeholder?: string
  correctAnswer?: string | string[]
}

export interface SingleChoiceQuestion {
  id: string
  type: 'single-choice'
  subject: QuestionSubject
  text: string
  options: string[]
  correctAnswer: number
}

export type Question = OpenQuestion | SingleChoiceQuestion

export interface Answer {
  questionId: string
  value: string | number | null
}

export type Screen = 'name' | 'quiz' | 'results'

export interface QuizState {
  screen: Screen
  playerName: string
  currentIndex: number
  answers: Answer[]
  score: number
  totalScorable: number
}
