import Header from '@/components/Header'
import MainVisual from '@/components/MainVisual'
import Content2 from '@/components/Content2'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MainVisual />
        <Content2 />
      </main>
    </div>
  )
}
