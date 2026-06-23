'use client'

import { useEffect, useState } from 'react'

import {
  CheckCircle,
  RotateCcw,
  Volume2,
} from 'lucide-react'

type QuizCard = {
  japanese: string
  english: string
  pronunciation: string
}

export default function QuizPage() {
  const [card, setCard] =
    useState<QuizCard | null>(null)

  const [loading, setLoading] =
    useState(false)

  const [answer, setAnswer] =
    useState('')

  const [feedback, setFeedback] =
    useState('')

  const generateQuestion = async () => {
    setLoading(true)

    setAnswer('')
    setFeedback('')

    try {
      const response = await fetch(
        '/api/flashcard'
      )

      const data = await response.json()

      setCard(data)
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const checkAnswer = () => {
    if (!card) return

    const cleanedAnswer =
      answer.toLowerCase().trim()

    const cleanedCorrect =
      card.english.toLowerCase().trim()

    if (
      cleanedAnswer === cleanedCorrect
    ) {
      setFeedback('✅ Correct!')
    } else {
      setFeedback(
        `❌ Wrong! Correct answer: ${card.english}`
      )
    }
  }

  const speakJapanese = () => {
    if (!card) return

    const utterance =
      new SpeechSynthesisUtterance(
        card.japanese
      )

    utterance.lang = 'ja-JP'

    window.speechSynthesis.speak(
      utterance
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f4ef] p-6 text-black md:p-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}

        <div>
          <h1 className="text-5xl font-bold">
            AI Japanese Quiz
          </h1>

          <p className="mt-2 text-black/60">
            Practice Japanese vocabulary
            with AI-generated questions.
          </p>
        </div>

        {/* Quiz Card */}

        <div className="mt-14 rounded-[2.5rem] bg-white p-10 shadow-2xl">
          {loading ? (
            <div className="flex h-[300px] items-center justify-center">
              <p className="text-2xl font-semibold">
                Generating Question...
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-7xl font-bold">
                {card?.japanese}
              </p>

              <p className="mt-5 text-2xl text-black/60">
                {card?.pronunciation}
              </p>

              <button
                onClick={speakJapanese}
                className="mt-6 rounded-2xl bg-black p-4 text-white transition hover:scale-105"
              >
                <Volume2 />
              </button>

              {/* Input */}

              <div className="mt-10">
                <input
                  type="text"
                  placeholder="Enter English meaning..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === 'Enter'
                    ) {
                      checkAnswer()
                    }
                  }}
                  className="w-full rounded-2xl border border-black/10 bg-[#f8f4ef] p-5 text-lg outline-none"
                />
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button
                  onClick={checkAnswer}
                  className="flex items-center gap-2 rounded-2xl bg-green-500 px-7 py-4 font-semibold text-white transition hover:scale-105"
                >
                  <CheckCircle />
                  Check Answer
                </button>

                <button
                  onClick={
                    generateQuestion
                  }
                  className="flex items-center gap-2 rounded-2xl bg-pink-400 px-7 py-4 font-semibold text-white transition hover:scale-105"
                >
                  <RotateCcw />
                  Next Question
                </button>
              </div>

              {/* Feedback */}

              {feedback && (
                <div className="mt-8 rounded-2xl bg-black/5 p-5">
                  <p className="text-xl font-semibold">
                    {feedback}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}