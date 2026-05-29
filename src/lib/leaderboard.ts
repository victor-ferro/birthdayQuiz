const KEY = 'mqv_leaderboard'

export interface LeaderboardEntry {
  name: string
  score: number
  totalScorable: number
  timestamp: number
}

export function saveEntry(entry: Omit<LeaderboardEntry, 'timestamp'>): void {
  const entries = loadAllEntries()
  entries.push({ ...entry, timestamp: Date.now() })
  localStorage.setItem(KEY, JSON.stringify(entries))
}

function loadAllEntries(): LeaderboardEntry[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]')
  } catch {
    return []
  }
}

export function getLeaderboard(): LeaderboardEntry[] {
  const entries = loadAllEntries()
  const best = new Map<string, LeaderboardEntry>()
  for (const entry of entries) {
    const existing = best.get(entry.name.toLowerCase())
    if (!existing || pts(entry) > pts(existing)) {
      best.set(entry.name.toLowerCase(), entry)
    }
  }
  return Array.from(best.values()).sort((a, b) => pts(b) - pts(a))
}

export function pts(entry: LeaderboardEntry): number {
  return entry.totalScorable === 0 ? 0 : Math.round((entry.score / entry.totalScorable) * 1000)
}
