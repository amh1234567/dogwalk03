// 散歩記録の型定義
export interface WalkRecord {
  id: string
  dog_name: string
  duration: number
  distance: number
  notes?: string
  weather?: string
  created_at: string
  updated_at: string
}

// 散歩記録の作成用型（IDとタイムスタンプを除く）
export type CreateWalkRecord = Omit<WalkRecord, 'id' | 'created_at' | 'updated_at'>

// 散歩記録の更新用型（部分更新可能）
export type UpdateWalkRecord = Partial<Omit<WalkRecord, 'id' | 'created_at' | 'updated_at'>>

// API レスポンスの型定義
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// 統計データの型定義
export interface WalkStats {
  total_walks: number
  total_duration_minutes: number
  total_distance_km: number
  average_duration_minutes: number
  average_distance_km: number
  walks_this_week: number
  walks_this_month: number
}

// 天気の型定義
export type Weather = 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'windy'

// 散歩ルートの型定義
export interface WalkRoute {
  id: string
  name: string
  description?: string
  distance_km: number
  estimated_duration_minutes: number
  difficulty: 'easy' | 'medium' | 'hard'
  created_at: string
}

// 犬の情報の型定義
export interface Dog {
  id: string
  name: string
  breed?: string
  age?: number
  weight?: number
  notes?: string
  created_at: string
  updated_at: string
}

