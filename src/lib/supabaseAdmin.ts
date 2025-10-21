import { createClient } from '@supabase/supabase-js'

// このファイルは必ずサーバー側のみで使用してください。
// service_roleキーは機密情報のため、クライアント側に露出しないように注意。

if (typeof window !== 'undefined') {
  throw new Error('src/lib/supabaseAdmin.ts must not be imported on the client side')
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!serviceRoleKey) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable')
}

// サーバー側専用のSupabaseクライアント（service_role使用）
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

// ヘルパー関数：管理者権限での接続テスト
export async function testAdminConnection() {
  try {
    const { data, error } = await supabaseAdmin
      .from('walk_records')
      .select('count')
      .limit(1)
    
    if (error) {
      console.error('Supabase admin connection error:', error)
      return { success: false, error: error.message }
    }
    
    console.log('Supabase admin connection successful')
    return { success: true }
  } catch (error) {
    console.error('Supabase admin connection test failed:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }
  }
}
