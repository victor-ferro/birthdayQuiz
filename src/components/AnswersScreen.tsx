import { useEffect, useState } from 'react'
import { fetchAllResponses } from '@/lib/supabase'
import type { ResponseRow } from '@/lib/supabase'

const SUBJECT_LABEL: Record<string, string> = {
  marcos: 'Marcos',
  victor: 'Víctor',
  conjunta: 'Conjunta',
}

const SUBJECT_COLOR: Record<string, string> = {
  marcos: 'bg-blue-100 text-blue-700',
  victor: 'bg-violet-100 text-violet-700',
  conjunta: 'bg-amber-100 text-amber-700',
}

function groupByPlayer(rows: ResponseRow[]): Map<string, ResponseRow[]> {
  const map = new Map<string, ResponseRow[]>()
  for (const row of rows) {
    const key = row.player_name
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(row)
  }
  return map
}

export function AnswersScreen() {
  const [rows, setRows] = useState<ResponseRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllResponses().then((data) => {
      setRows(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted text-sm">
        Cargando respuestas…
      </div>
    )
  }

  if (rows.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-muted text-sm">
        Todavía no hay respuestas.
      </div>
    )
  }

  const grouped = groupByPlayer(rows)
  const players = Array.from(grouped.keys())

  return (
    <div className="min-h-screen bg-surface px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground">Respuestas</h1>
          <p className="text-muted text-sm mt-1">{players.length} participante{players.length !== 1 ? 's' : ''}</p>
        </div>

        {players.map((player) => {
          const playerRows = grouped.get(player)!
          const scorable = playerRows.filter((r) => r.is_correct !== null)
          const correct = scorable.filter((r) => r.is_correct).length

          return (
            <div key={player} className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground">{player}</h2>
                {scorable.length > 0 && (
                  <span className="text-sm font-bold text-primary">
                    {correct}/{scorable.length} correctas
                  </span>
                )}
              </div>

              <ul className="divide-y divide-border">
                {playerRows.map((row) => (
                  <li key={row.id ?? row.question_id} className="px-5 py-3 space-y-1">
                    <div className="flex items-start gap-2">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${SUBJECT_COLOR[row.question_subject] ?? 'bg-gray-100 text-gray-600'}`}>
                        {SUBJECT_LABEL[row.question_subject] ?? row.question_subject}
                      </span>
                      <p className="text-xs text-muted leading-snug">{row.question_text}</p>
                    </div>
                    <div className="flex items-center gap-2 pl-1">
                      {row.is_correct === true && <span className="text-green-500 text-sm">✓</span>}
                      {row.is_correct === false && <span className="text-red-400 text-sm">✗</span>}
                      <p className="text-sm font-medium text-foreground">
                        {row.answer_value || <span className="text-muted italic">sin respuesta</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
