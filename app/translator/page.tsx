'use client'

import { useState } from 'react'
import {
  ArrowLeftRight,
  Languages,
  Volume2,
} from 'lucide-react'

export default function TranslatorPage() {
  const [input, setInput] = useState('')
  const [translated, setTranslated] = useState('')
  const [loading, setLoading] = useState(false)

  const speakJapanese = () => {
    if (!translated) return

    const utterance = new SpeechSynthesisUtterance(
      translated
    )

    utterance.lang = 'ja-JP'

    window.speechSynthesis.speak(utterance)
  }

  const translateText = async () => {
  if (!input.trim()) return

  setLoading(true)

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        input
      )}&langpair=en|ja`
    )

    const data = await response.json()

    if (data.responseData.translatedText) {
      setTranslated(
        data.responseData.translatedText
      )
    } else {
      setTranslated(
        'Translation unavailable'
      )
    }
  } catch (error) {
    console.log(error)

    setTranslated(
      'Translation unavailable'
    )
  }

  setLoading(false)
}

  return (
    <div className="min-h-screen bg-[#f8f4ef] p-10 text-black">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-black p-3 text-white">
            <Languages />
          </div>

          <div>
            <h1 className="text-5xl font-bold">
              Japanese Translator
            </h1>

            <p className="mt-2 text-black/60">
              Translate English into Japanese.
            </p>
          </div>
        </div>

        {/* Translator */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Input */}
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <p className="mb-4 text-lg font-semibold">
              English
            </p>

            <textarea
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              placeholder="Type something..."
              className="h-64 w-full resize-none rounded-2xl border border-black/10 bg-[#f8f4ef] p-5 outline-none"
            />

            <button
              onClick={translateText}
              className="mt-5 flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-white transition hover:scale-105"
            >
              {loading ? 'Translating...' : 'Translate'}

              <ArrowLeftRight size={18} />
            </button>
          </div>

          {/* Output */}
          <div className="rounded-3xl bg-gradient-to-br from-pink-200 to-orange-100 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">
                Japanese
              </p>

              <button
                onClick={speakJapanese}
                className="rounded-xl bg-white p-2 shadow transition hover:scale-105"
              >
                <Volume2 size={18} />
              </button>
            </div>

            <div className="mt-10">
              <p className="break-words text-5xl font-bold leading-relaxed">
                {translated || 'こんにちは'}
              </p>

              <p className="mt-5 text-black/60">
                AI-powered Japanese translation.
              </p>
            </div>
          </div>
        </div>

        {/* Example Buttons */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold">
            Try Examples
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              'Hello',
              'My name is Chetana',
              'I love Japan',
              'Anime is beautiful',
              'Good morning',
            ].map((sentence) => (
              <button
                key={sentence}
                onClick={() =>
                  setInput(sentence)
                }
                className="rounded-2xl bg-white px-5 py-3 shadow transition hover:scale-105"
              >
                {sentence}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}