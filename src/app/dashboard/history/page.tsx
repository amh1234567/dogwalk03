'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { getWalkRecords } from '@/actions/walkRecords'
import { WalkRecord } from '@/types'

export default function WalkHistory() {
  const router = useRouter()
  const [records, setRecords] = useState<WalkRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const data = await getWalkRecords()
        setRecords(data)
      } catch (error) {
        console.error('散歩記録の取得に失敗しました:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecords()
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case 'sunny': return '☀️'
      case 'cloudy': return '☁️'
      case 'rainy': return '🌧️'
      case 'snowy': return '❄️'
      default: return '☀️'
    }
  }

  const getWeatherText = (weather: string) => {
    switch (weather) {
      case 'sunny': return '晴れ'
      case 'cloudy': return '曇り'
      case 'rainy': return '雨'
      case 'snowy': return '雪'
      default: return '晴れ'
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">散歩記録履歴</h1>
            <p className="text-gray-600">これまでの散歩記録を確認できます</p>
          </div>

          {records.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <h3 className="text-lg font-medium text-gray-700 mb-2">
                散歩記録がありません
              </h3>
              <p className="text-gray-500 mb-6">
                最初の散歩記録を追加してみましょう
              </p>
              <button
                onClick={() => router.push('/dashboard/new')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                新しい散歩記録を追加
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {records.map((record) => (
                <div key={record.id} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {record.dog_name}との散歩
                        </h3>
                        <span className="text-lg">
                          {getWeatherIcon(record.weather)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {getWeatherText(record.weather)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        {formatDate(record.created_at)}
                      </p>
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-gray-500">時間: </span>
                          <span className="font-medium text-gray-900">{record.duration}分</span>
                        </div>
                        <div>
                          <span className="text-gray-500">距離: </span>
                          <span className="font-medium text-gray-900">{record.distance}km</span>
                        </div>
                      </div>
                      {record.notes && (
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                            {record.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => router.push('/dashboard')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              ダッシュボードに戻る
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
