import Header from '@/components/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ダッシュボード</h1>
          <p className="text-gray-600">愛犬との散歩記録を管理しましょう</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">今月の散歩回数</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">12</div>
              <p className="text-sm text-gray-600">回</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">今月の総距離</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">24.5</div>
              <p className="text-sm text-gray-600">km</p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">今月の総時間</h3>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600">8.5</div>
              <p className="text-sm text-gray-600">時間</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">最近の散歩記録</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">ポチとの散歩</p>
                    <p className="text-sm text-gray-600">2024年1月15日 14:30</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">30分</p>
                    <p className="text-sm text-gray-600">2.1km</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <p className="font-medium text-gray-900">ポチとの散歩</p>
                    <p className="text-sm text-gray-600">2024年1月14日 09:15</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">45分</p>
                    <p className="text-sm text-gray-600">3.2km</p>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div>
                    <p className="font-medium text-gray-900">ポチとの散歩</p>
                    <p className="text-sm text-gray-600">2024年1月13日 16:20</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">25分</p>
                    <p className="text-sm text-gray-600">1.8km</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">今週の目標</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">散歩回数</span>
                    <span className="text-gray-900">5 / 7 回</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '71%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">総距離</span>
                    <span className="text-gray-900">12.5 / 15 km</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">総時間</span>
                    <span className="text-gray-900">4.2 / 6 時間</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

