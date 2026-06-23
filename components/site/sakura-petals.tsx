'use client'

import { useEffect, useState } from 'react'

type Petal = {
  left: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export function SakuraPetals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  // Generate randomized petals only on the client to avoid hydration mismatch.
  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 8 + Math.random() * 10,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute -top-10 block rounded-[100%_0_100%_0] bg-primary/40"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
