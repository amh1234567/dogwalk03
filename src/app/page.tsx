'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import DatabaseTest from '@/components/DatabaseTest'
import { createWalkRecord, getWalkRecords } from '@/actions/walkRecords'
import { WalkRecord } from '@/types'

export default function Home() {
  const [records, setRecords] = useState<WalkRecord[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    duration_minutes: '',
    course_name: ''
  })

  // 散歩記録を取得
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await getWalkRecords()
        setRecords(data)
      } catch (error) {
        console.error('散歩記録の取得に失敗しました:', error)
        setRecords([])
      }
    }
    fetchRecords()
  }, [])

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log('Submitting form data:', formData)
      
      const result = await createWalkRecord({
        duration_minutes: parseInt(formData.duration_minutes),
        course_name: formData.course_name
      })
      
      console.log('Create walk record result:', result)
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to create walk record')
      }
      
      // 記録を再取得
      const data = await getWalkRecords()
      console.log('Fetched records after creation:', data)
      setRecords(data)
      
      // フォームをリセット
      setFormData({
        duration_minutes: '',
        course_name: ''
      })
      setShowForm(false)
      
      alert('散歩記録を保存しました！')
    } catch (error) {
      console.error('散歩記録の作成に失敗しました:', error)
      alert(`散歩記録の作成に失敗しました: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }


  // 今日の記録を取得
  const todayRecords = records.filter(record => {
    const today = new Date().toDateString()
    const recordDate = new Date(record.created_at).toDateString()
    return today === recordDate
  })

  // 統計を計算
  const totalRecords = records.length
  const totalDuration = records.reduce((sum, record) => sum + record.duration_minutes, 0)
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        {/* ウェルカムセクション */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            おかえりなさい
          </h1>
          <p className="text-lg text-gray-600">
            今日も愛犬との散歩を楽しみましょう
          </p>
        </div>

        {/* 統計カード */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">今日の散歩回数</h3>
            <p className="text-2xl font-bold text-gray-900">{todayRecords.length}回</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">総散歩回数</h3>
            <p className="text-2xl font-bold text-gray-900">{totalRecords}回</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">総散歩時間</h3>
            <p className="text-2xl font-bold text-gray-900">{totalDuration}分</p>
          </div>
        </div>

        {/* データベース接続テスト */}
        <div className="mb-8">
          <DatabaseTest />
        </div>

        {/* 散歩記録セクション */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">散歩記録</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {showForm ? 'キャンセル' : '新しい記録を追加'}
            </button>
          </div>

          {/* 記録フォーム */}
          {showForm && (
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">散歩記録を追加</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="duration_minutes" className="block text-sm font-medium text-gray-700 mb-1">
                      散歩時間（分） *
                    </label>
                    <input
                      type="number"
                      id="duration_minutes"
                      name="duration_minutes"
                      value={formData.duration_minutes}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="例: 30"
                    />
                  </div>
                  <div>
                    <label htmlFor="course_name" className="block text-sm font-medium text-gray-700 mb-1">
                      散歩コース *
                    </label>
                    <input
                      type="text"
                      id="course_name"
                      name="course_name"
                      value={formData.course_name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="例: 公園コース"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    {isLoading ? '保存中...' : '記録を保存'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    キャンセル
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* 記録一覧 */}
          {records.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                散歩記録がありません
              </h3>
              <p className="text-gray-500">
                最初の散歩記録を追加してみましょう
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {records.slice(0, 5).map((record) => (
                <div key={record.id} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">{record.course_name}</p>
                      <p className="text-sm text-gray-500">{formatDate(record.created_at)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{record.duration_minutes}分</p>
                  </div>
                </div>
              ))}
              {records.length > 5 && (
                <div className="text-center pt-4">
                  <p className="text-sm text-gray-500">
                    他に {records.length - 5} 件の記録があります
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
