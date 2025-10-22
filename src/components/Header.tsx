'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              Dog Walk Tracker
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              ホーム
            </Link>
            <Link 
              href="/dashboard/history" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              記録履歴
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

