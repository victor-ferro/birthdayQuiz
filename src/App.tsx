import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useQuiz } from '@/hooks/useQuiz'
import { QUESTIONS } from '@/data/questions'
import { NameScreen } from '@/components/NameScreen'
import { QuizScreen } from '@/components/QuizScreen'
import { LeaderboardScreen } from '@/components/LeaderboardScreen'
import { AlreadyPlayedScreen } from '@/components/AlreadyPlayedScreen'
import { AnswersScreen } from '@/components/AnswersScreen'

const PLAYED_KEY = 'mqv_quiz_played'

function Quiz() {
  // TODO: re-enable before production
  const [alreadyPlayed] = useState(() => false && !!localStorage.getItem(PLAYED_KEY))
  const { state, startQuiz, submitAnswer, restart } = useQuiz(QUESTIONS)

  function handleStart(name: string) {
    localStorage.setItem(PLAYED_KEY, '1')
    startQuiz(name)
  }

  if (alreadyPlayed) return <AlreadyPlayedScreen />

  return (
    <>
      {state.screen === 'name' && (
        <NameScreen onStart={handleStart} totalQuestions={QUESTIONS.length} />
      )}
      {state.screen === 'quiz' && (
        <QuizScreen
          question={QUESTIONS[state.currentIndex]}
          questionNumber={state.currentIndex + 1}
          totalQuestions={QUESTIONS.length}
          onAnswer={submitAnswer}
        />
      )}
      {state.screen === 'results' && (
        <LeaderboardScreen
          playerName={state.playerName}
          playerScore={state.score}
          playerTotalScorable={state.totalScorable}
          onPlayAgain={restart}
        />
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/ranking" element={<LeaderboardScreen />} />
        <Route path="/answers" element={<AnswersScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
