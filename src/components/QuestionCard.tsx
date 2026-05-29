import { OpenQuestion } from './OpenQuestion'
import { SingleChoiceQuestion } from './SingleChoiceQuestion'
import type { Question, QuestionSubject } from '@/types/quiz'

const AVATAR_SRC = {
  marcos: 'https://lh3.googleusercontent.com/aida/ADBb0ui32_Z4-5MhePwwBV1uaANAaskQxJWcN-bD59qPCaX-OrPwePtcKtfSWyqaM-Zw0oEr9iC3PDTMaOYuPrMLNo4d40BRKHVWVVkzn57VeInokmnYs9zD1gW-eQYKNwuuzO34ne0fMZEL8eNemfgPjczeQLdXcOtMHqF4gQUGEO9iaQFRpXGQWdyxqaCZ4S0eLU5kNkLf5aFB20qgRVn-c3r3QlKMp01oaGft_gCxo9HpkYvTIYtT6pZ4w14',
  victor: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKcEIDKhXXb4v4ObiEK-wn7jsG5Ezc8hWnVEFIXKpRehHBH5TDPJvcc8kM3uqMtQ1xk_Y0V34BULCtFcf0JbenMgxA99azbJuWtk836UnO5It68DVKTD3FD8ds_gGOqKAOc2vOFgG6297jDDkHsoZeRC3GGy8ePwwFZix-GOetJyxSpC-BspFiXf_7s4dZkrBbiN7hVyFLHm9Fd54n4hcTxN4FzKgo3EdXZXg9PiT7b41yQPKYZAguC7-_GmpfFkNs25GPfBcOplpD',
}

interface QuestionCardProps {
  question: Question
  onAnswer: (value: string | number | null) => void
}

const SUBJECT_CONFIG: Record<QuestionSubject, { label: string; className: string }> = {
  marcos:  { label: 'Marcos', className: 'bg-blue-50 text-blue-700 border border-blue-200' },
  victor:  { label: 'Víctor', className: 'bg-violet-50 text-violet-700 border border-violet-200' },
  conjunta:{ label: 'Conjunta', className: 'bg-amber-50 text-amber-700 border border-amber-200' },
}

function QuestionAvatar({ subject }: { subject: QuestionSubject }) {
  const circle = (src: string, alt: string, ring: string, z = '') =>
    <div className={`w-14 h-14 rounded-full overflow-hidden border-2 ${ring} shadow-md ${z}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>

  if (subject === 'marcos')
    return circle(AVATAR_SRC.marcos, 'Marcos', 'border-blue-200')

  if (subject === 'victor')
    return circle(AVATAR_SRC.victor, 'Víctor', 'border-violet-200')

  return (
    <div className="flex items-center -space-x-4">
      {circle(AVATAR_SRC.marcos, 'Marcos', 'border-blue-200',   'relative z-10')}
      {circle(AVATAR_SRC.victor, 'Víctor', 'border-violet-200', 'relative z-0')}
    </div>
  )
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const subject = SUBJECT_CONFIG[question.subject]

  return (
    <div className="space-y-5">
      <div className="flex flex-col items-center gap-2">
        <QuestionAvatar subject={question.subject} />
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase ${subject.className}`}
        >
          {subject.label}
        </span>
      </div>
      <h2 className="font-serif text-xl text-foreground leading-snug">{question.text}</h2>
      {question.type === 'open' ? (
        <OpenQuestion question={question} onSubmit={onAnswer} />
      ) : (
        <SingleChoiceQuestion question={question} onSelect={onAnswer} />
      )}
    </div>
  )
}
