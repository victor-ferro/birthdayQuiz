import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Confetti } from '@/components/Confetti'
import { BIRTHDAY_PERSON_NAME } from '@/data/questions'

interface NameScreenProps {
  onStart: (name: string) => void
  totalQuestions: number
}

export function NameScreen({ onStart, totalQuestions }: NameScreenProps) {
  const [name, setName] = useState('')

  function handleStart() {
    if (name.trim()) onStart(name)
  }

  return (
    <>
    <Confetti />
    <div className="w-full max-w-sm mx-auto animate-fade-in">

      {/* Avatares - tomados de "Consistent Banana Team" (Avatar Style Transfer) */}
      <div className="grid grid-cols-2 gap-8 mb-6 px-4">
        <div className="group flex flex-col items-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gray-100 rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div
              className="relative w-full h-full rounded-full overflow-visible bg-white p-2"
              style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.05)' }}
            >
              <img
                alt="Avatar 1"
                className="w-full h-full object-cover rounded-full transform group-hover:-translate-y-4 transition-transform duration-500 ease-out"
                src="https://lh3.googleusercontent.com/aida/ADBb0uiaz4sxmB69TzaMrsBxecAgrgXe3rQID_lW3zEyXSrKtFYbRPfMr42ia9mq9dtLEJ0u5RjUTrD-8jUqiZ5p-IZCq5Db3snY0-Myatl0Yeqguz3ynfvkGoF7HXEFaX6CvHlQYxJ1p4atukG_9o4uU_gOu4x3dvOrUUF93ATDLbi1JYZPkHIj-LEQf2zm7Lq9PnE7xTGdw6R5-j__of4CLnc7DM3YosAWKFMbFo27X0FmyRVMJgwoaHSLKYe-"
              />
            </div>
          </div>
        </div>
        <div className="group flex flex-col items-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-gray-100 rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div
              className="relative w-full h-full rounded-full overflow-visible bg-white p-2"
              style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 20px 25px -5px rgba(0,0,0,0.05)' }}
            >
              <img
                alt="Avatar 2"
                className="w-full h-full object-cover rounded-full transform group-hover:-translate-y-4 transition-transform duration-500 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWha9VYULB63JoN4fTs9r0TBvYkiL5QoMJTtcsUB0IcBaaJ5LbeMd_F383kc1rS1HUG5KPlNRBduC2U1wrbVyfPYT9N8lwGfg9Dr5D82n5wjL8J1avglq1RbYWH1p_Q5gWKFS3IHtNqVZ5mp4dXMIfuPpnNNLPVcRhfjMjkNtzeC4THQlUphfQ_SqX--c3rboRstBk3JMUds_2QScWbwnpEQmHChRWQVldgA8pWgLhfrqg0jCRC7BexWJXgL6beS_xamyCbQN-lcX"
              />
            </div>
          </div>
        </div>
      </div>

<div className="bg-surface border border-border rounded-2xl p-8 shadow-xl shadow-primary/8 space-y-8">
        <div className="text-center space-y-4">
          <span className="font-serif font-bold leading-none" style={{ fontSize: '5rem', color: '#e8274b' }}>
            30
          </span>

          <div className="space-y-2">
            <h1 className="font-serif text-3xl font-semibold text-foreground leading-tight tracking-tight">
              M & V
            </h1>
            <p className="text-secondary/80 text-sm leading-relaxed">
              ¿Cuánto conoces a{' '}
              <span className="text-primary font-medium">{BIRTHDAY_PERSON_NAME}</span>?
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-xs text-muted tracking-wider uppercase font-medium">
            Tu nombre
          </label>
          <Input
            type="text"
            placeholder="¿Cómo te llamas?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleStart()}
            autoFocus
          />
        </div>

        <Button
          size="lg"
          className="w-full"
          disabled={name.trim().length === 0}
          onClick={handleStart}
        >
          Comenzar el quiz
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted/70">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400" title="Marcos" />
          <span className="inline-block w-2 h-2 rounded-full bg-violet-400" title="Víctor" />
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400" title="Conjuntas" />
          <span>{totalQuestions} preguntas · Unos pocos minutos</span>
        </div>
      </div>
    </div>
    </>
  )
}
