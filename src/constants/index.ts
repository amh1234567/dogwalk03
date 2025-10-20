// 天気の選択肢
export const WEATHER_OPTIONS = [
  { value: 'sunny', label: '晴れ', emoji: '☀️' },
  { value: 'cloudy', label: '曇り', emoji: '☁️' },
  { value: 'rainy', label: '雨', emoji: '🌧️' },
  { value: 'snowy', label: '雪', emoji: '❄️' },
  { value: 'windy', label: '風が強い', emoji: '💨' }
] as const

// 散歩の難易度
export const DIFFICULTY_OPTIONS = [
  { value: 'easy', label: '簡単', color: 'green' },
  { value: 'medium', label: '普通', color: 'yellow' },
  { value: 'hard', label: '難しい', color: 'red' }
] as const

// 散歩の時間帯
export const TIME_PERIODS = [
  { value: 'morning', label: '朝', start: '06:00', end: '10:00' },
  { value: 'afternoon', label: '午後', start: '10:00', end: '16:00' },
  { value: 'evening', label: '夕方', start: '16:00', end: '20:00' },
  { value: 'night', label: '夜', start: '20:00', end: '22:00' }
] as const

// 散歩の推奨時間（分）
export const RECOMMENDED_DURATION = {
  small: 15, // 小型犬
  medium: 30, // 中型犬
  large: 45, // 大型犬
  senior: 20 // シニア犬
} as const

// 散歩の推奨距離（km）
export const RECOMMENDED_DISTANCE = {
  small: 1, // 小型犬
  medium: 2, // 中型犬
  large: 3, // 大型犬
  senior: 1 // シニア犬
} as const

// アプリの設定
export const APP_CONFIG = {
  name: '犬の散歩アプリ',
  version: '1.0.0',
  description: '愛犬との散歩を記録・管理するアプリ',
  maxWalkDuration: 180, // 最大散歩時間（分）
  maxDistance: 10, // 最大距離（km）
  defaultWalkDuration: 30, // デフォルト散歩時間（分）
  defaultDistance: 2 // デフォルト距離（km）
} as const

// データベーステーブル名
export const TABLE_NAMES = {
  WALK_RECORDS: 'walk_records',
  DOGS: 'dogs',
  WALK_ROUTES: 'walk_routes'
} as const

