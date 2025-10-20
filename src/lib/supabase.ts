import { createClient } from '@supabase/supabase-js'

// 環境変数の取得
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 環境変数の検証
if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseAnonKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
}

// Supabaseクライアントの作成
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // 認証を使用しないため、セッションの永続化を無効化
    persistSession: false,
    autoRefreshToken: false
  }
})

// データベースのテーブル型定義
export type Database = {
  public: {
    Tables: {
      walk_records: {
        Row: {
          id: string
          dog_name: string
          start_time: string
          end_time: string
          duration_minutes: number
          distance_km: number | null
          route: string | null
          notes: string | null
          weather: string | null
          temperature: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          dog_name: string
          start_time: string
          end_time: string
          duration_minutes: number
          distance_km?: number | null
          route?: string | null
          notes?: string | null
          weather?: string | null
          temperature?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          dog_name?: string
          start_time?: string
          end_time?: string
          duration_minutes?: number
          distance_km?: number | null
          route?: string | null
          notes?: string | null
          weather?: string | null
          temperature?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      dogs: {
        Row: {
          id: string
          name: string
          breed: string | null
          age: number | null
          weight: number | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          breed?: string | null
          age?: number | null
          weight?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          breed?: string | null
          age?: number | null
          weight?: number | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      walk_routes: {
        Row: {
          id: string
          name: string
          description: string | null
          distance_km: number
          estimated_duration_minutes: number
          difficulty: 'easy' | 'medium' | 'hard'
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          distance_km: number
          estimated_duration_minutes: number
          difficulty: 'easy' | 'medium' | 'hard'
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          distance_km?: number
          estimated_duration_minutes?: number
          difficulty?: 'easy' | 'medium' | 'hard'
          created_at?: string
        }
      }
    }
  }
}

// 型付きクライアントの作成
export const typedSupabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
})

// ヘルパー関数：接続テスト
export async function testConnection() {
  try {
    const { data, error } = await supabase
      .from('walk_records')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Supabase connection error:', error)
      return { success: false, error: error.message }
    }
    
    console.log('Supabase connection successful')
    return { success: true }
  } catch (error) {
    console.error('Supabase connection test failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}
