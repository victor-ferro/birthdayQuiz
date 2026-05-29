import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, key)

export interface ResponseRow {
  id?: string
  player_name: string
  question_id: string
  question_text: string
  question_subject: string
  answer_value: string
  is_correct: boolean | null
  created_at?: string
}

export async function saveResponses(rows: ResponseRow[]) {
  const { error } = await supabase.from('responses').insert(rows)
  if (error) console.error('Supabase insert error:', error)
}

export async function fetchAllResponses(): Promise<ResponseRow[]> {
  const { data, error } = await supabase
    .from('responses')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error('Supabase fetch error:', error)
    return []
  }
  return data ?? []
}
