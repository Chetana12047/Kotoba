'use client'

import { useState } from 'react'
import { Volume2 } from 'lucide-react'

const hiragana = [
  { kana: 'あ', romanji: 'a' },
  { kana: 'い', romanji: 'i' },
  { kana: 'う', romanji: 'u' },
  { kana: 'え', romanji: 'e' },
  { kana: 'お', romanji: 'o' },

  { kana: 'か', romanji: 'ka' },
  { kana: 'き', romanji: 'ki' },
  { kana: 'く', romanji: 'ku' },
  { kana: 'け', romanji: 'ke' },
  { kana: 'こ', romanji: 'ko' },

  { kana: 'さ', romanji: 'sa' },
  { kana: 'し', romanji: 'shi' },
  { kana: 'す', romanji: 'su' },
  { kana: 'せ', romanji: 'se' },
  { kana: 'そ', romanji: 'so' },

  { kana: 'た', romanji: 'ta' },
  { kana: 'ち', romanji: 'chi' },
  { kana: 'つ', romanji: 'tsu' },
  { kana: 'て', romanji: 'te' },
  { kana: 'と', romanji: 'to' },

  { kana: 'な', romanji: 'na' },
  { kana: 'に', romanji: 'ni' },
  { kana: 'ぬ', romanji: 'nu' },
  { kana: 'ね', romanji: 'ne' },
  { kana: 'の', romanji: 'no' },

  { kana: 'は', romanji: 'ha' },
  { kana: 'ひ', romanji: 'hi' },
  { kana: 'ふ', romanji: 'fu' },
  { kana: 'へ', romanji: 'he' },
  { kana: 'ほ', romanji: 'ho' },

  { kana: 'ま', romanji: 'ma' },
  { kana: 'み', romanji: 'mi' },
  { kana: 'む', romanji: 'mu' },
  { kana: 'め', romanji: 'me' },
  { kana: 'も', romanji: 'mo' },

  { kana: 'や', romanji: 'ya' },
  { kana: 'ゆ', romanji: 'yu' },
  { kana: 'よ', romanji: 'yo' },

  { kana: 'ら', romanji: 'ra' },
  { kana: 'り', romanji: 'ri' },
  { kana: 'る', romanji: 'ru' },
  { kana: 'れ', romanji: 're' },
  { kana: 'ろ', romanji: 'ro' },

  { kana: 'わ', romanji: 'wa' },
  { kana: 'を', romanji: 'wo' },
  { kana: 'ん', romanji: 'n' },
]

const katakana = [
  { kana: 'ア', romanji: 'a' },
  { kana: 'イ', romanji: 'i' },
  { kana: 'ウ', romanji: 'u' },
  { kana: 'エ', romanji: 'e' },
  { kana: 'オ', romanji: 'o' },

  { kana: 'カ', romanji: 'ka' },
  { kana: 'キ', romanji: 'ki' },
  { kana: 'ク', romanji: 'ku' },
  { kana: 'ケ', romanji: 'ke' },
  { kana: 'コ', romanji: 'ko' },

  { kana: 'サ', romanji: 'sa' },
  { kana: 'シ', romanji: 'shi' },
  { kana: 'ス', romanji: 'su' },
  { kana: 'セ', romanji: 'se' },
  { kana: 'ソ', romanji: 'so' },

  { kana: 'タ', romanji: 'ta' },
  { kana: 'チ', romanji: 'chi' },
  { kana: 'ツ', romanji: 'tsu' },
  { kana: 'テ', romanji: 'te' },
  { kana: 'ト', romanji: 'to' },

  { kana: 'ナ', romanji: 'na' },
  { kana: 'ニ', romanji: 'ni' },
  { kana: 'ヌ', romanji: 'nu' },
  { kana: 'ネ', romanji: 'ne' },
  { kana: 'ノ', romanji: 'no' },

  { kana: 'ハ', romanji: 'ha' },
  { kana: 'ヒ', romanji: 'hi' },
  { kana: 'フ', romanji: 'fu' },
  { kana: 'ヘ', romanji: 'he' },
  { kana: 'ホ', romanji: 'ho' },

  { kana: 'マ', romanji: 'ma' },
  { kana: 'ミ', romanji: 'mi' },
  { kana: 'ム', romanji: 'mu' },
  { kana: 'メ', romanji: 'me' },
  { kana: 'モ', romanji: 'mo' },

  { kana: 'ヤ', romanji: 'ya' },
  { kana: 'ユ', romanji: 'yu' },
  { kana: 'ヨ', romanji: 'yo' },

  { kana: 'ラ', romanji: 'ra' },
  { kana: 'リ', romanji: 'ri' },
  { kana: 'ル', romanji: 'ru' },
  { kana: 'レ', romanji: 're' },
  { kana: 'ロ', romanji: 'ro' },

  { kana: 'ワ', romanji: 'wa' },
  { kana: 'ヲ', romanji: 'wo' },
  { kana: 'ン', romanji: 'n' },
]

export default function KanaPage() {
  const [selected, setSelected] = useState('')
  const [answer, setAnswer] = useState('')

const [result, setResult] = useState('')

const allKana = [...hiragana, ...katakana]

const [randomKana, setRandomKana] =
  useState(
    allKana[
      Math.floor(
        Math.random() * allKana.length
      )
    ]
  )

  const speakKana = (text: string) => {
    const utterance =
      new SpeechSynthesisUtterance(text)

    utterance.lang = 'ja-JP'

    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="min-h-screen bg-[#f8f4ef] p-10 text-black">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">
            Kana Practice
          </h1>

          <p className="mt-3 text-lg text-black/60">
            Learn Hiragana & Katakana with
            pronunciation.
          </p>
        </div>

        {/* Hiragana */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">
            Hiragana
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-5">
            {hiragana.map((item) => (
              <button
                key={item.kana}
                onClick={() => {
                  setSelected(item.kana)
                  speakKana(item.kana)
                }}
                className="rounded-3xl bg-white p-8 shadow-xl transition hover:scale-105"
              >
                <p className="text-5xl font-bold">
                  {item.kana}
                </p>

                <p className="mt-3 text-lg text-black/60">
                  {item.romanji}
                </p>

                <div className="mt-4 flex justify-center">
                  <Volume2 size={18} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Katakana */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold">
            Katakana
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-5">
            {katakana.map((item) => (
              <button
                key={item.kana}
                onClick={() => {
                  setSelected(item.kana)
                  speakKana(item.kana)
                }}
                className="rounded-3xl bg-gradient-to-br from-pink-200 to-orange-100 p-8 shadow-xl transition hover:scale-105"
              >
                <p className="text-5xl font-bold">
                  {item.kana}
                </p>

                <p className="mt-3 text-lg text-black/60">
                  {item.romanji}
                </p>

                <div className="mt-4 flex justify-center">
                  <Volume2 size={18} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected */}
        {selected && (
          <div className="mt-16 rounded-3xl bg-black p-10 text-center text-white shadow-2xl">
            <p className="text-lg text-white/70">
              Selected Kana
            </p>

            <p className="mt-4 text-8xl font-bold">
              {selected}
            </p>
          </div>
        )}
      </div>
      {/* Quiz Section */}

<div className="mt-20 rounded-3xl bg-white p-10 shadow-2xl">
  <h2 className="text-4xl font-bold">
    Kana Quiz
  </h2>

  <p className="mt-3 text-black/60">
    Type the correct romanji pronunciation.
  </p>

  <div className="mt-10 text-center">
    <p className="text-8xl font-bold">
      {randomKana.kana}
    </p>

    <button
      onClick={() =>
        speakKana(randomKana.kana)
      }
      className="mt-5 rounded-2xl bg-black px-5 py-3 text-white"
    >
      Hear Pronunciation
    </button>
  </div>

  <div className="mt-10 flex flex-col items-center gap-4">
    <input
      type="text"
      value={answer}
      onChange={(e) =>
        setAnswer(e.target.value)
      }
      placeholder="Type answer..."
      className="w-full max-w-md rounded-2xl border border-black/10 bg-[#f8f4ef] p-4 outline-none"
    />

    <button
      onClick={() => {

  if (

    answer.toLowerCase() ===

    randomKana.romanji

  ) {

    setResult('Correct 🎉')

  } else {

    setResult(

      `Wrong 😭 Correct answer: ${randomKana.romanji}`

    )

  }

  setTimeout(() => {

    setRandomKana(

      allKana[

        Math.floor(

          Math.random() *

            allKana.length

        )

      ]

    )

    setAnswer('')

    setResult('')

  }, 1500)

}}
      className="rounded-2xl bg-pink-400 px-6 py-3 font-semibold text-white transition hover:scale-105"
    >
      Check Answer
    </button>

    {result && (
      <p className="mt-4 text-xl font-semibold">
        {result}
      </p>
    )}
  </div>
</div>
    </div>
  )
}