import { useEffect, useState } from 'react'
import { Crown, RefreshCw, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getLeaderboardRemote, pts } from '@/lib/leaderboard'
import type { LeaderboardEntry } from '@/lib/leaderboard'
import { Confetti } from '@/components/Confetti'

interface Props {
  playerName?: string
  playerScore?: number
  playerTotalScorable?: number
  onPlayAgain?: () => void
}

const AVATAR_COLORS = ['#0040e0', '#b40067', '#c9a900', '#22c55e', '#8b5cf6', '#f97316', '#06b6d4']

function avatarBg(name: string): string {
  let h = 0
  for (const ch of name) h = ch.charCodeAt(0) + ((h << 5) - h)
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length]
}

function AvatarCircle({ name, className = '' }: { name: string; className?: string }) {
  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 ${className}`}
      style={{ backgroundColor: avatarBg(name) }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  )
}

function PodiumSlot({ entry, rank, isMe }: { entry: LeaderboardEntry | undefined; rank: 1 | 2 | 3; isMe: boolean }) {
  if (!entry) return <div className={rank === 1 ? 'flex-[1.2]' : 'flex-1'} />

  const colHeight = { 1: 'h-28', 2: 'h-20', 3: 'h-16' }[rank]
  const colBg = { 1: 'rgba(0,64,224,0.12)', 2: 'rgba(180,0,103,0.1)', 3: 'rgba(201,169,0,0.1)' }[rank]
  const ptsColor = { 1: '#0040e0', 2: '#b40067', 3: '#705d00' }[rank]
  const avatarSize = { 1: 'w-24 h-24 text-2xl', 2: 'w-18 h-18 text-lg', 3: 'w-16 h-16 text-base' }[rank]

  return (
    <div className={`flex flex-col items-center ${rank === 1 ? 'flex-[1.2] -translate-y-5' : 'flex-1'}`}>
      {rank === 1 && <Crown className="w-6 h-6 mb-1 animate-bounce" style={{ color: '#c9a900' }} />}
      <AvatarCircle name={entry.name} className={`${avatarSize} mb-1 ${isMe ? 'ring-2 ring-offset-1 ring-primary' : ''}`} />
      <p className="text-xs font-bold text-center w-full truncate px-1 text-foreground">{entry.name}</p>
      <p className="text-xs font-semibold mb-1" style={{ color: ptsColor }}>{pts(entry)} pts</p>
      <div className={`w-full ${colHeight} rounded-t-lg flex items-end justify-center pb-1`} style={{ background: colBg }}>
        <span className="text-sm font-extrabold text-foreground/25">{rank}</span>
      </div>
    </div>
  )
}

export function LeaderboardScreen({ playerName, playerScore, playerTotalScorable, onPlayAgain }: Props) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLeaderboardRemote().then((data) => {
      // If the current player hasn't been persisted yet (race condition between
      // save and fetch), inject their entry optimistically so they see their rank.
      if (playerName && playerScore !== undefined && playerTotalScorable !== undefined) {
        const alreadyPresent = data.some(
          (e) => e.name.toLowerCase() === playerName.toLowerCase()
        )
        if (!alreadyPresent) {
          const optimistic: LeaderboardEntry = {
            name: playerName,
            score: playerScore,
            totalScorable: playerTotalScorable,
            timestamp: Date.now(),
          }
          const merged = [...data, optimistic].sort((a, b) => pts(b) - pts(a))
          setEntries(merged)
          setLoading(false)
          return
        }
      }
      setEntries(data)
      setLoading(false)
    })
  }, [])

  const [first, second, third] = entries
  const rest = entries.slice(3)

  function isMe(e: LeaderboardEntry) {
    return !!playerName && e.name.toLowerCase() === playerName.toLowerCase()
  }

  return (
    <div className="w-full max-w-sm mx-auto animate-fade-in pb-6">
      <Confetti />

      {/* Título */}
      <div className="text-center mb-6 pt-2">
        <div className="flex justify-center items-end gap-4 mb-3">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-300 shadow-md transform -rotate-6">
            <img src="https://lh3.googleusercontent.com/aida/ADBb0uiaz4sxmB69TzaMrsBxecAgrgXe3rQID_lW3zEyXSrKtFYbRPfMr42ia9mq9dtLEJ0u5RjUTrD-8jUqiZ5p-IZCq5Db3snY0-Myatl0Yeqguz3ynfvkGoF7HXEFaX6CvHlQYxJ1p4atukG_9o4uU_gOu4x3dvOrUUF93ATDLbi1JYZPkHIj-LEQf2zm7Lq9PnE7xTGdw6R5-j__of4CLnc7DM3YosAWKFMbFo27X0FmyRVMJgwoaHSLKYe-" alt="Víctor" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-300 shadow-md transform rotate-6">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzWha9VYULB63JoN4fTs9r0TBvYkiL5QoMJTtcsUB0IcBaaJ5LbeMd_F383kc1rS1HUG5KPlNRBduC2U1wrbVyfPYT9N8lwGfg9Dr5D82n5wjL8J1avglq1RbYWH1p_Q5gWKFS3IHtNqVZ5mp4dXMIfuPpnNNLPVcRhfjMjkNtzeC4THQlUphfQ_SqX--c3rboRstBk3JMUds_2QScWbwnpEQmHChRWQVldgA8pWgLhfrqg0jCRC7BexWJXgL6beS_xamyCbQN-lcX" alt="Marcos" className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ color: '#0040e0' }}>Ranking</h2>
        <p className="text-sm text-muted mt-1">¡Increíble energía hoy!</p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-sm">Cargando ranking...</span>
        </div>
      )}

      {/* Sin datos */}
      {!loading && entries.length === 0 && (
        <p className="text-center text-sm text-muted py-12">Todavía nadie ha jugado 🎉</p>
      )}

      {/* Pódium */}
      {!loading && entries.length > 0 && (
        <>
          <div className="flex justify-center items-end gap-3 mb-8 px-2 min-h-[220px]">
            <PodiumSlot entry={second} rank={2} isMe={!!second && isMe(second)} />
            <PodiumSlot entry={first}  rank={1} isMe={!!first  && isMe(first)}  />
            <PodiumSlot entry={third}  rank={3} isMe={!!third  && isMe(third)}  />
          </div>

          {rest.length > 0 && (
            <div className="space-y-2 mb-6">
              {rest.map((entry, i) => (
                <div
                  key={`${entry.name}-${entry.timestamp}`}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
                    isMe(entry) ? 'border-primary/40 bg-accent' : 'border-white/50 bg-white/60 backdrop-blur-sm'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5 text-sm font-bold text-muted text-center">{i + 4}</span>
                    <AvatarCircle name={entry.name} className="w-12 h-12 text-sm" />
                    <span className="font-medium text-foreground text-sm">{entry.name}</span>
                    {isMe(entry) && <span className="text-xs font-semibold text-primary">(tú)</span>}
                  </div>
                  <span className="text-sm font-bold" style={{ color: '#0040e0' }}>{pts(entry)} pts</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Botones */}
      <div className="flex flex-col items-center gap-3 mt-4">
        {onPlayAgain && (
          <button
            onClick={onPlayAgain}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:-translate-y-1 active:translate-y-0 duration-200"
            style={{ backgroundColor: '#b40067', boxShadow: '0 10px 20px rgba(180,0,103,0.3)' }}
          >
            <RefreshCw className="w-4 h-4" />
            Participar de nuevo
          </button>
        )}
        {!onPlayAgain && (
          <Link
            to="/"
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:-translate-y-1 active:translate-y-0 duration-200"
            style={{ backgroundColor: '#4f46e5', boxShadow: '0 10px 20px rgba(79,70,229,0.3)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        )}
      </div>
    </div>
  )
}
