import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* ウェルカムセクション */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            おかえりなさい！🐕
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            今日も愛犬との散歩を楽しみましょう
          </p>
        </div>

        {/* 統計カード */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">📅</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">今日の散歩回数</h3>
            <p className="text-3xl font-bold text-blue-600">0回</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">📊</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">総散歩回数</h3>
            <p className="text-3xl font-bold text-green-600">0回</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl mb-2">🏃</div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">総距離</h3>
            <p className="text-3xl font-bold text-purple-600">0.0km</p>
          </div>
        </div>

        {/* 今日の散歩記録セクション */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">今日の散歩記録</h2>
          
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚶‍♂️</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              今日はまだ散歩記録がありません
            </h3>
            <p className="text-gray-500 mb-8">
              最初の散歩記録を追加してみましょう！
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                ➕新しい散歩記録を追加
              </Link>
              <Link 
                href="/dashboard"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                📋すべての散歩記録を見る
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
