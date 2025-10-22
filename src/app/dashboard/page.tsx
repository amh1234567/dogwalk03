import Header from '@/components/Header'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">散歩記録管理</h1>
          <p className="text-gray-600">愛犬との散歩記録を管理しましょう</p>
        </div>

        {/* 統計カード */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">今月の散歩回数</h3>
            <p className="text-2xl font-bold text-gray-900">12回</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">今月の総距離</h3>
            <p className="text-2xl font-bold text-gray-900">24.5km</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">今月の総時間</h3>
            <p className="text-2xl font-bold text-gray-900">8.5時間</p>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <Link 
            href="/dashboard/new"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            新しい散歩記録を追加
          </Link>
          <Link 
            href="/dashboard/history"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            散歩記録履歴を見る
          </Link>
        </div>

        {/* 最近の散歩記録 */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">最近の散歩記録</h2>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-500">2024年1月15日 14:30</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">30分</p>
                <p className="text-sm text-gray-500">2.1km</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-500">2024年1月14日 09:15</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">45分</p>
                <p className="text-sm text-gray-500">3.2km</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">ポチとの散歩</p>
                  <p className="text-sm text-gray-500">2024年1月13日 16:20</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">25分</p>
                <p className="text-sm text-gray-500">1.8km</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

