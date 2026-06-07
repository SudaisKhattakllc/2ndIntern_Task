import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const isValidUrl = supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://')

export const supabase = isValidUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface Course {
  id: string
  title: string
  progress: number
  icon_name: string
  created_at: string
}

export async function fetchCourses(): Promise<Course[]> {
  if (!supabase) return []

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase fetch error:', error.message)
    return []
  }

  return data || []
}
