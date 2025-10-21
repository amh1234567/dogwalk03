import Header from '@/components/Header'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">散歩記録管理</h1>
          <p className="text-gray-600">愛犬との散歩記録を管理しましょう</p>
        </div>

        {/* 統計カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">📅</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">今月の散歩回数</h3>
            <p className="text-3xl font-bold text-blue-600">12回</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">今月の総距離</h3>
            <p className="text-3xl font-bold text-green-600">24.5km</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">今月の総時間</h3>
            <p className="text-3xl font-bold text-purple-600">8.5時間</p>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link 
            href="/dashboard/new"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            ➕新しい散歩記録を追加
          </Link>
          <Link 
            href="/dashboard/history"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
          >
            📋散歩記録履歴を見る
          </Link>
        </div>

        {/* 最近の散歩記録 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">最近の散歩記録</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🐕</div>
                <div>
                  <p className="font-semibold text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-600">2024年1月15日 14:30</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-blue-600">30分</p>
                <p className="text-sm text-gray-600">2.1km</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🐕</div>
                <div>
                  <p className="font-semibold text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-600">2024年1月14日 09:15</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">45分</p>
                <p className="text-sm text-gray-600">3.2km</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <div className="text-3xl">🐕</div>
                <div>
                  <p className="font-semibold text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-600">2024年1月13日 16:20</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-purple-600">25分</p>
                <p className="text-sm text-gray-600">1.8km</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

