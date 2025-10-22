'use server'

import { supabase } from '@/lib/supabase'
import { WalkRecord } from '@/types'

export async function createWalkRecord(record: Omit<WalkRecord, 'id' | 'created_at' | 'updated_at'>) {
  try {
    console.log('Creating walk record with data:', record)
    
    // 現在のテーブル構造に合わせてデータを変換
    const dbRecord = {
      user_id: '00000000-0000-0000-0000-000000000000', // ダミーのuser_id
      start_time: new Date().toISOString(),
      route_data: {
        dog_name: record.dog_name,
        duration: record.duration,
        distance: record.distance,
        notes: record.notes || null,
        weather: record.weather || null
      }
    }

    console.log('Database record to insert:', dbRecord)

    const { data, error } = await supabase
      .from('walk_records')
      .insert([dbRecord])
      .select()
      .single()

    console.log('Supabase response:', { data, error })

    if (error) {
      console.error('Supabase error details:', error)
      throw new Error(`Failed to create walk record: ${error.message}`)
    }

    // アプリケーション型に変換
    const appRecord: WalkRecord = {
      id: data.id,
      dog_name: data.route_data?.dog_name || '',
      duration: data.route_data?.duration || 0,
      distance: data.route_data?.distance || 0,
      notes: data.route_data?.notes || undefined,
      weather: data.route_data?.weather || undefined,
      created_at: data.created_at,
      updated_at: data.created_at // updated_atは存在しないのでcreated_atを使用
    }

    console.log('Created app record:', appRecord)
    return { success: true, data: appRecord }
  } catch (error) {
    console.error('Error creating walk record:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getWalkRecords(): Promise<WalkRecord[]> {
  try {
    const { data, error } = await supabase
      .from('walk_records')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to fetch walk records: ${error.message}`)
    }

    console.log('Fetched records from database:', data)
    
    // データベースのデータをアプリケーション型に変換
    const appRecords: WalkRecord[] = (data || []).map(record => ({
      id: record.id,
      dog_name: record.route_data?.dog_name || '',
      duration: record.route_data?.duration || 0,
      distance: record.route_data?.distance || 0,
      notes: record.route_data?.notes || undefined,
      weather: record.route_data?.weather || undefined,
      created_at: record.created_at,
      updated_at: record.created_at // updated_atは存在しないのでcreated_atを使用
    }))

    return appRecords
  } catch (error) {
    console.error('Error fetching walk records:', error)
    throw error
  }
}

export async function updateWalkRecord(id: string, updates: Partial<WalkRecord>) {
  try {
    const { data, error } = await supabase
      .from('walk_records')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to update walk record: ${error.message}`)
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error updating walk record:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function deleteWalkRecord(id: string) {
  try {
    const { error } = await supabase
      .from('walk_records')
      .delete()
      .eq('id', id)

    if (error) {
      throw new Error(`Failed to delete walk record: ${error.message}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Error deleting walk record:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
