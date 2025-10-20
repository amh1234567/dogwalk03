'use client'

export default function Content2() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            散歩アプリの機能
          </h2>
          <p className="text-lg text-gray-600">
            愛犬との散歩をより楽しく、より充実させるための機能をご用意しています
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🐕</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              散歩記録
            </h3>
            <p className="text-gray-600">
              散歩の時間、距離、ルートを記録して愛犬との思い出を残しましょう
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              統計表示
            </h3>
            <p className="text-gray-600">
              散歩の頻度や距離の統計を見て、愛犬の健康管理に役立てましょう
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              簡単操作
            </h3>
            <p className="text-gray-600">
              直感的な操作で、誰でも簡単に散歩記録を管理できます
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

