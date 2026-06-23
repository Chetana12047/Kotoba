'use client'

import Link from 'next/link'

import {
  BookOpen,
  Brain,
  Flame,
  Globe,
  Heart,
  Home,
  Languages,
  Trophy,
  User,
} from 'lucide-react'

import { useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const { isSignedIn, user } =
    useUser()

  if (!isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f4ef]">
        <p className="text-2xl font-semibold">
          Please log in first 🌸
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f4ef] text-black">
      {/* Sidebar */}

      <div className="fixed left-0 top-0 h-screen w-64 border-r border-black/10 bg-white/60 p-6 backdrop-blur-xl">
        <h1 className="text-3xl font-bold">
          Kotoba 言葉
        </h1>

        <nav className="mt-10 flex flex-col gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl bg-black px-4 py-3 text-white"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <Link
            href="/translator"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <Languages size={18} />
            Translator
          </Link>

          <Link
            href="/flashcards"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <BookOpen size={18} />
            Flashcards
          </Link>

          <Link
            href="/kana"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <Brain size={18} />
            Kana Practice
          </Link>

          <Link
            href="/quiz"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <Trophy size={18} />
            Quiz
          </Link>

          <Link
            href="/favorites"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <Heart size={18} />
            Favorites
          </Link>

          <Link
            href="/culture"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <Globe size={18} />
            Culture
          </Link>

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-black/5"
          >
            <User size={18} />
            Profile
          </Link>
        </nav>
      </div>

      {/* Main */}

      <main className="ml-64 p-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">
              Welcome back,
              {' '}
              {user?.firstName}
              {' '}
              🌸
            </h2>

            <p className="mt-2 text-black/60">
              Continue your Japanese journey today.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-5 py-3 shadow">
            <div className="flex items-center gap-2">
              <Flame className="text-orange-500" />

              <p className="font-semibold">
                28 Day Streak
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-black/60">
              Vocabulary Learned
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              124
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-black/60">
              Quiz Accuracy
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              87%
            </h3>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <p className="text-black/60">
              Lessons Completed
            </p>

            <h3 className="mt-2 text-4xl font-bold">
              19
            </h3>
          </div>
        </div>

        {/* Daily Word */}

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-pink-200 to-orange-100 p-8 shadow-xl">
          <p className="text-sm uppercase tracking-widest text-black/60">
            Daily Japanese Word
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            桜
          </h2>

          <p className="mt-2 text-xl">
            Sakura — Cherry Blossom
          </p>

          <p className="mt-5 text-black/70">
            春になると桜が咲きます。
          </p>

          <p className="text-black/50">
            Cherry blossoms bloom in spring.
          </p>

          <button
            onClick={() =>
              alert(
                'Saved to favorites 🌸'
              )
            }
            className="mt-6 rounded-xl bg-black px-5 py-3 text-white transition hover:scale-105"
          >
            Save Word
          </button>
        </div>

        {/* Continue Learning */}

        <div className="mt-10">
          <h2 className="text-3xl font-bold">
            Continue Learning
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold">
                Hiragana Basics
              </h3>

              <p className="mt-2 text-black/60">
                Continue practicing Japanese
                syllables.
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-black/10">
                <div className="h-full w-[72%] bg-pink-400"></div>
              </div>

              <p className="mt-2 text-sm text-black/50">
                72% completed
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg">
              <h3 className="text-2xl font-bold">
                Travel Phrases
              </h3>

              <p className="mt-2 text-black/60">
                Learn useful phrases for Japan
                travel.
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-black/10">
                <div className="h-full w-[45%] bg-orange-300"></div>
              </div>

              <p className="mt-2 text-sm text-black/50">
                45% completed
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}