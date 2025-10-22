'use server'

import { supabase } from '@/lib/supabase'
import { WalkRecord } from '@/types'

export async function createWalkRecord(record: Omit<WalkRecord, 'id' | 'created_at' | 'updated_at'>) {
  try {
    // データベーススキーマに合わせてデータを変換
    const dbRecord = {
      dog_name: record.dog_name,
      start_time: new Date().toISOString(),
      end_time: new Date(Date.now() + record.duration * 60000).toISOString(),
      duration_minutes: record.duration,
      distance_km: record.distance,
      notes: record.notes || null,
      weather: record.weather || null
    }

    const { data, error } = await supabase
      .from('walk_records')
      .insert([dbRecord])
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to create walk record: ${error.message}`)
    }

    // アプリケーション型に合わせてデータを変換
    const appRecord: WalkRecord = {
      id: data.id,
      dog_name: data.dog_name,
      duration: data.duration_minutes,
      distance: data.distance_km || 0,
      notes: data.notes || undefined,
      weather: data.weather || undefined,
      created_at: data.created_at,
      updated_at: data.updated_at
    }

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

    // データベースのデータをアプリケーション型に変換
    const appRecords: WalkRecord[] = (data || []).map(record => ({
      id: record.id,
      dog_name: record.dog_name,
      duration: record.duration_minutes,
      distance: record.distance_km || 0,
      notes: record.notes || undefined,
      weather: record.weather || undefined,
      created_at: record.created_at,
      updated_at: record.updated_at
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
