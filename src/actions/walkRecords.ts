'use server'

import { supabase } from '@/lib/supabase'
import { WalkRecord } from '@/types'

export async function createWalkRecord(record: Omit<WalkRecord, 'id' | 'created_at' | 'updated_at'>) {
  try {
    console.log('Creating walk record with data:', record)
    
    // dogwalk03tableの構造に合わせてデータを変換
    const dbRecord = {
      duration_minutes: record.duration_minutes,
      course_name: record.course_name
    }

    console.log('Database record to insert:', dbRecord)

    const { data, error } = await supabase
      .from('dogwalk03table')
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
      duration_minutes: data.duration_minutes,
      course_name: data.course_name,
      created_at: data.created_at,
      updated_at: data.updated_at
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
      .from('dogwalk03table')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to fetch walk records: ${error.message}`)
    }

    console.log('Fetched records from database:', data)
    
    // データベースのデータをアプリケーション型に変換
    const appRecords: WalkRecord[] = (data || []).map(record => ({
      id: record.id,
      duration_minutes: record.duration_minutes,
      course_name: record.course_name,
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
    // アプリケーション型をデータベース型に変換
    const dbUpdates: Partial<{
      duration_minutes: number
      course_name: string
    }> = {}
    if (updates.duration_minutes !== undefined) dbUpdates.duration_minutes = updates.duration_minutes
    if (updates.course_name !== undefined) dbUpdates.course_name = updates.course_name

    const { data, error } = await supabase
      .from('dogwalk03table')
      .update(dbUpdates)
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
      .from('dogwalk03table')
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
