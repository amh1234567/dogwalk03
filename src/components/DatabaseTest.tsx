'use client'

import { useState } from 'react'
import { testConnection } from '@/lib/supabase'

export default function DatabaseTest() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null)

  const handleTest = async () => {
    setIsLoading(true)
    setResult(null)
    
    try {
      const testResult = await testConnection()
      setResult(testResult)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
      <h3 className="text-sm font-medium text-gray-900 mb-4">データベース接続テスト</h3>
      
      <button
        onClick={handleTest}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-sm font-medium transition-colors"
      >
        {isLoading ? 'テスト中...' : '接続テスト'}
      </button>

      {result && (
        <div className={`mt-4 p-3 rounded-lg text-sm ${
          result.success 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}>
          {result.success ? (
            <p>データベース接続成功</p>
          ) : (
            <div>
              <p>データベース接続失敗</p>
              <p className="text-xs mt-1 opacity-75">エラー: {result.error}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

