import { saveLeaderboardEntry, fetchLeaderboard } from './supabase'
import type { LeaderboardRow } from './supabase'

const LOCAL_KEY = 'mqv_leaderboard'

export interface LeaderboardEntry {
  name: string
  score: number
  totalScorable: number
  timestamp: number
}

export function pts(entry: { score: number; totalScorable: number }): number {
  return entry.totalScorable === 0 ? 0 : Math.round((entry.score / entry.totalScorable) * 1000)
}

function deduplicateBest(entries: LeaderboardEntry[]): LeaderboardEntry[] {
  const best = new Map<string, LeaderboardEntry>()
  for (const entry of entries) {
    const key = entry.name.toLowerCase()
    const existing = best.get(key)
    if (!existing || pts(entry) > pts(existing)) {
      best.set(key, entry)
    }
  }
  return Array.from(best.values()).sort((a, b) => pts(b) - pts(a))
}

export function saveEntry(entry: Omit<LeaderboardEntry, 'timestamp'>): void {
  // Local fallback
  const all = loadLocal()
  all.push({ ...entry, timestamp: Date.now() })
  localStorage.setItem(LOCAL_KEY, JSON.stringify(all))

  // Supabase (fire and forget)
  saveLeaderboardEntry({ name: entry.name, score: entry.score, total_scorable: entry.totalScorable })
}

function loadLocal(): LeaderboardEntry[] {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '[]')
  } catch {
    return []
  }
}

function rowToEntry(row: LeaderboardRow): LeaderboardEntry {
  return {
    name: row.name,
    score: row.score,
    totalScorable: row.total_scorable,
    timestamp: row.created_at ? new Date(row.created_at).getTime() : 0,
  }
}

export async function getLeaderboardRemote(): Promise<LeaderboardEntry[]> {
  const rows = await fetchLeaderboard()
  return deduplicateBest(rows.map(rowToEntry))
}

// Síncrono para compatibilidad (solo local)
export function getLeaderboard(): LeaderboardEntry[] {
  return deduplicateBest(loadLocal())
}
