import { useState } from 'react'
import { useQuiz } from '@/hooks/useQuiz'
import { QUESTIONS } from '@/data/questions'
import { NameScreen } from '@/components/NameScreen'
import { QuizScreen } from '@/components/QuizScreen'
import { LeaderboardScreen } from '@/components/LeaderboardScreen'
import { AlreadyPlayedScreen } from '@/components/AlreadyPlayedScreen'

const PLAYED_KEY = 'mqv_quiz_played'


export default function App() {
  // TODO: re-enable before production
  const [alreadyPlayed] = useState(() => false && !!localStorage.getItem(PLAYED_KEY))
  const { state, startQuiz, submitAnswer, restart } = useQuiz(QUESTIONS)

  function handleStart(name: string) {
    localStorage.setItem(PLAYED_KEY, '1')
    startQuiz(name)
  }

  if (alreadyPlayed) {
    return <AlreadyPlayedScreen />
  }

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
          onPlayAgain={restart}
        />
      )}
    </>
  )
}
