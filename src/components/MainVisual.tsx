'use client'

export default function MainVisual() {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            愛犬との散歩を
            <br />
            もっと楽しく記録
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            散歩の記録を残して、愛犬との時間を大切に
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              散歩を記録する
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              記録を見る
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

