import { Analytics } from '@vercel/analytics/next'

import type {
  Metadata,
  Viewport,
} from 'next'

import { Geist } from 'next/font/google'

import { Noto_Serif_JP } from 'next/font/google'

import {
  ClerkProvider,
} from '@clerk/nextjs'

import './globals.css'

import { Navbar } from '@/components/site/navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const notoSerifJp =
  Noto_Serif_JP({
    variable:
      '--font-noto-serif-jp',
    subsets: ['latin'],
    weight: [
      '400',
      '500',
      '600',
      '700',
    ],
  })

export const metadata: Metadata = {
  title: 'Kotoba',

  description:
    'Kotoba is a modern Japanese learning platform with AI translation, kana practice, smart flashcards, quizzes, and culture lessons.',


  generator: 'v0.app',
}

export const viewport: Viewport =
  {
    themeColor: '#fdf6f1',
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geistSans.variable} ${notoSerifJp.variable} bg-background`}
      >
        <body className="font-sans antialiased">
          <Navbar />

          <main className="pt-28">
            {children}
          </main>

          {process.env.NODE_ENV ===
            'production' && (
            <Analytics />
          )}
        </body>
      </html>
    </ClerkProvider>
  )
}