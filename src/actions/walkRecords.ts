'use server'

import { supabase } from '@/lib/supabase'
import { WalkRecord } from '@/types'

export async function createWalkRecord(record: Omit<WalkRecord, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('walk_records')
      .insert([record])
      .select()
      .single()

    if (error) {
      throw new Error(`Failed to create walk record: ${error.message}`)
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error creating walk record:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

export async function getWalkRecords() {
  try {
    const { data, error } = await supabase
      .from('walk_records')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to fetch walk records: ${error.message}`)
    }

    return { success: true, data: data || [] }
  } catch (error) {
    console.error('Error fetching walk records:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
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
    const { error } = await supabaseAdmin
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
