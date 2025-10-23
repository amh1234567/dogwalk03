'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function AnimatedImage({ 
  src, 
  alt, 
  className = '', 
  width = 300, 
  height = 200 
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`rounded-lg shadow-lg ${className}`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

