'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import { createWalkRecord } from '@/actions/walkRecords'

export default function NewWalkRecord() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    dog_name: '',
    duration: '',
    distance: '',
    notes: '',
    weather: 'sunny'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await createWalkRecord({
        dog_name: formData.dog_name,
        duration: parseInt(formData.duration),
        distance: parseFloat(formData.distance),
        notes: formData.notes,
        weather: formData.weather as 'sunny' | 'cloudy' | 'rainy' | 'snowy'
      })
      
      router.push('/dashboard')
    } catch (error) {
      console.error('散歩記録の作成に失敗しました:', error)
      alert('散歩記録の作成に失敗しました。もう一度お試しください。')
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">新しい散歩記録</h1>
            <p className="text-gray-600">愛犬との散歩の詳細を記録しましょう</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="space-y-6">
              {/* 犬の名前 */}
              <div>
                <label htmlFor="dog_name" className="block text-sm font-medium text-gray-700 mb-2">
                  犬の名前 *
                </label>
                <input
                  type="text"
                  id="dog_name"
                  name="dog_name"
                  value={formData.dog_name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例: ポチ"
                />
              </div>

              {/* 散歩時間 */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                  散歩時間（分） *
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例: 30"
                />
              </div>

              {/* 距離 */}
              <div>
                <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-2">
                  距離（km） *
                </label>
                <input
                  type="number"
                  id="distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="例: 2.5"
                />
              </div>

              {/* 天気 */}
              <div>
                <label htmlFor="weather" className="block text-sm font-medium text-gray-700 mb-2">
                  天気
                </label>
                <select
                  id="weather"
                  name="weather"
                  value={formData.weather}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="sunny">晴れ</option>
                  <option value="cloudy">曇り</option>
                  <option value="rainy">雨</option>
                  <option value="snowy">雪</option>
                </select>
              </div>

              {/* メモ */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  メモ
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="散歩の感想や気づいたことなど..."
                />
              </div>
            </div>

            {/* ボタン */}
            <div className="flex gap-3 mt-8">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {isLoading ? '保存中...' : '散歩記録を保存'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
