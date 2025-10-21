'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              🐕Dog Walk Tracker
            </Link>
          </div>
          <nav className="flex space-x-6">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              新規記録
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

