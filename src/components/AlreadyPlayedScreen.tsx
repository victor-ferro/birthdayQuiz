import { BIRTHDAY_PERSON_NAME } from '@/data/questions'

export function AlreadyPlayedScreen() {
  return (
    <div className="w-full max-w-sm mx-auto animate-fade-in">
      <div className="bg-surface border border-border rounded-2xl p-8 shadow-xl shadow-primary/8 text-center space-y-5">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 border border-amber-200 mx-auto">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6 text-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl font-semibold text-foreground leading-tight">
            Ya has jugado
          </h1>
          <p className="text-secondary/80 text-sm leading-relaxed">
            Solo se puede participar una vez.
            <br />
            ¡Gracias por celebrar con{' '}
            <span className="text-primary font-medium">{BIRTHDAY_PERSON_NAME}</span>!
          </p>
        </div>
      </div>
    </div>
  )
}
