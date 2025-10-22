import Header from '@/components/Header'
import DatabaseTest from '@/components/DatabaseTest'
import Link from 'next/link'

export default function Home() {
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
            <p className="text-2xl font-bold text-gray-900">0回</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">総散歩回数</h3>
            <p className="text-2xl font-bold text-gray-900">0回</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">総距離</h3>
            <p className="text-2xl font-bold text-gray-900">0.0km</p>
          </div>
        </div>

        {/* データベース接続テスト */}
        <div className="mb-8">
          <DatabaseTest />
        </div>

        {/* 今日の散歩記録セクション */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">今日の散歩記録</h2>
          
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              今日はまだ散歩記録がありません
            </h3>
            <p className="text-gray-500 mb-8">
              最初の散歩記録を追加してみましょう
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                新しい散歩記録を追加
              </Link>
              <Link 
                href="/dashboard"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                すべての散歩記録を見る
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
