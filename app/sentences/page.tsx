'use client'

import { useState } from 'react'

import {
  Languages,
  Volume2,
  Sparkles,
} from 'lucide-react'

type SentenceData = {
  japanese: string
  english: string
  pronunciation: string
}

export default function SentencesPage() {
  const [input, setInput] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [sentence, setSentence] =
    useState<SentenceData | null>(null)

  const generateSentence =
    async () => {
      if (!input.trim()) return

      setLoading(true)

      try {
        const response = await fetch(
          '/api/sentence',
          {
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body: JSON.stringify({
              word: input,
            }),
          }
        )

        const data =
          await response.json()

        setSentence(data)
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }

  const speakJapanese = () => {
  if (!sentence?.japanese) {
    console.log('No sentence')
    return
  }

  console.log(
    'Trying to speak:',
    sentence.japanese
  )

  const utterance =
    new SpeechSynthesisUtterance(
      sentence.japanese
    )

  utterance.lang = 'ja-JP'

  utterance.rate = 1

  utterance.onstart = () => {
    console.log('Speech started')
  }

  utterance.onend = () => {
    console.log('Speech ended')
  }

  utterance.onerror = (event) => {
    console.log(
      'Speech error:',
      event
    )
  }

  speechSynthesis.speak(utterance)
}
  return (
    <div className="min-h-screen bg-[#f8f4ef] p-6 text-black md:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}

        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-black p-4 text-white">
            <Sparkles />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              AI Sentence Practice
            </h1>

            <p className="mt-2 text-black/60">
              Generate Japanese example
              sentences using AI.
            </p>
          </div>
        </div>

        {/* Input */}

        <div className="mt-12 rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="Enter a word like water, cat, anime..."
              value={input}
              onChange={(e) =>
                setInput(
                  e.target.value
                )
              }
              onKeyDown={(e) => {
                if (
                  e.key === 'Enter'
                ) {
                  generateSentence()
                }
              }}
              className="flex-1 rounded-2xl border border-black/10 bg-[#f8f4ef] p-5 text-lg outline-none"
            />

            <button
              onClick={
                generateSentence
              }
              className="rounded-2xl bg-black px-8 py-5 text-white transition hover:scale-105"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Output */}

        <div className="mt-10 rounded-[2rem] bg-white p-10 shadow-2xl">
          {loading ? (
            <div className="flex h-[300px] items-center justify-center">
              <p className="text-2xl font-semibold">
                Generating Sentence...
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-5xl font-bold leading-relaxed">
                {sentence?.japanese ||
                  'こんにちは'}
              </p>

              <p className="mt-6 text-2xl text-black/60">
                {
                  sentence?.pronunciation
                }
              </p>

              <div className="mt-10 rounded-3xl bg-pink-100 px-8 py-5">
                <p className="text-2xl font-semibold">
                  {sentence?.english}
                </p>
              </div>

              <button
                onClick={
                  speakJapanese
                }
                className="mt-8 rounded-2xl bg-black p-4 text-white transition hover:scale-105"
              >
                <Volume2 />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}