import { useMemo } from 'react'

const COLORS = ['#e8274b', '#0057ff', '#f59e0b', '#7c3aed', '#10b981', '#f472b6', '#fb923c']

interface Piece {
  id: number
  color: string
  x: number
  delay: number
  duration: number
  size: number
  skew: number
  side: 'left' | 'right'
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function Confetti() {
  const pieces = useMemo<Piece[]>(() => {
    const result: Piece[] = []
    for (let i = 0; i < 30; i++) {
      result.push({
        id: i,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        x: randomBetween(0, 12), // % from edge
        delay: randomBetween(0, 6),
        duration: randomBetween(4, 8),
        size: randomBetween(6, 12),
        skew: randomBetween(-40, 40),
        side: i % 2 === 0 ? 'left' : 'right',
      })
    }
    return result
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece absolute -top-4 rounded-sm opacity-80"
          style={{
            [p.side]: `${p.x}%`,
            width: p.size,
            height: p.size * (Math.random() > 0.5 ? 1 : 1.8),
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `skewX(${p.skew}deg)`,
          }}
        />
      ))}
    </div>
  )
}
