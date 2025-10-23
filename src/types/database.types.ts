// このファイルは Supabase のテーブルエディターから自動生成されます
// 手動で編集しないでください

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      dogwalk03table: {
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
