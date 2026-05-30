import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Confetti } from '@/components/Confetti'
import { BIRTHDAY_PERSON_NAME } from '@/data/questions'

const AVATAR_VICTOR = 'https://lh3.googleusercontent.com/aida/ADBb0uiaz4sxmB69TzaMrsBxecAgrgXe3rQID_lW3zEyXSrKtFYbRPfMr42ia9mq9dtLEJ0u5RjUTrD-8jUqiZ5p-IZCq5Db3snY0-Myatl0Yeqguz3ynfvkGoF7HXEFaX6CvHlQYxJ1p4atukG_9o4uU_gOu4x3dvOrUUF93ATDLbi1JYZPkHIj-LEQf2zm7Lq9PnE7xTGdw6R5-j__of4CLnc7DM3YosAWKFMbFo27X0FmyRVMJgwoaHSLKYe-'
const AVATAR_MARCOS = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzWha9VYULB63JoN4fTs9r0TBvYkiL5QoMJTtcsUB0IcBaaJ5LbeMd_F383kc1rS1HUG5KPlNRBduC2U1wrbVyfPYT9N8lwGfg9Dr5D82n5wjL8J1avglq1RbYWH1p_Q5gWKFS3IHtNqVZ5mp4dXMIfuPpnNNLPVcRhfjMjkNtzeC4THQlUphfQ_SqX--c3rboRstBk3JMUds_2QScWbwnpEQmHChRWQVldgA8pWgLhfrqg0jCRC7BexWJXgL6beS_xamyCbQN-lcX'

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

        {/* Hero — avatares centrados con aura */}
        <div className="flex justify-center items-end gap-0 mb-6">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{ background: 'radial-gradient(circle, #818cf8 0%, transparent 70%)' }}
            />
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <img src={AVATAR_VICTOR} alt="Víctor" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="relative -ml-8 z-20">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{ background: 'radial-gradient(circle, #f9a8d4 0%, transparent 70%)' }}
            />
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src={AVATAR_MARCOS} alt="Marcos" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Título */}
        <div className="text-center mb-5 px-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span
              className="font-serif font-extrabold leading-none"
              style={{ fontSize: '3.5rem', color: '#e8274b' }}
            >
              30
            </span>
          </div>
          <h1
            className="font-serif text-2xl font-bold leading-tight"
            style={{ color: '#1e1b4b' }}
          >
            ¡Quiz!
          </h1>
          <p className="text-sm mt-1" style={{ color: '#6b7280' }}>
            ¿Cuánto conoces a{' '}
            <span className="font-semibold" style={{ color: '#4f46e5' }}>
              {BIRTHDAY_PERSON_NAME}
            </span>?
          </p>
        </div>

        {/* Card principal */}
        <div
          className="rounded-3xl p-6 space-y-5"
          style={{
            background: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.07), 0 20px 40px -8px rgba(79,70,229,0.12)',
            border: '1px solid rgba(199,210,254,0.6)',
          }}
        >
          {/* Info categorías */}
          <div
            className="rounded-2xl p-4 space-y-2.5"
            style={{ background: '#f5f3ff', border: '1px solid #ede9fe' }}
          >
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#7c3aed' }}>
              ✦ Categorías
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 flex-shrink-0" />
              Preguntas sobre Marcos
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 flex-shrink-0" />
              Preguntas sobre Víctor
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#374151' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
              Preguntas conjuntas
            </div>
            <p className="text-xs pt-1" style={{ color: '#9ca3af' }}>
              {totalQuestions} preguntas · Unos pocos minutos
            </p>
          </div>

          {/* Input nombre */}
          <div className="space-y-1.5">
            <label
              className="block text-xs font-bold uppercase tracking-widest"
              style={{ color: '#4f46e5' }}
            >
              Tu nombre
            </label>
            <input
              type="text"
              placeholder="¿Cómo te llamas?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              autoFocus
              className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
              style={{
                background: '#f9fafb',
                border: '1.5px solid #e0e7ff',
                color: '#111827',
              }}
              onFocus={(e) => (e.currentTarget.style.border = '1.5px solid #6366f1')}
              onBlur={(e) => (e.currentTarget.style.border = '1.5px solid #e0e7ff')}
            />
          </div>

          {/* Botón empezar */}
          <button
            disabled={name.trim().length === 0}
            onClick={handleStart}
            className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: name.trim().length > 0
                ? 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
                : '#a5b4fc',
              boxShadow: name.trim().length > 0
                ? '0 8px 20px -4px rgba(99,102,241,0.5)'
                : 'none',
            }}
          >
            🎉 ¡Empezar Quiz!
          </button>

          {/* Botón ranking */}
          <Link
            to="/ranking"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-bold transition-all duration-200"
            style={{
              border: '1.5px solid #c7d2fe',
              color: '#4f46e5',
              background: 'transparent',
            }}
          >
            🏆 Ver Ranking
          </Link>
        </div>
      </div>
    </>
  )
}
