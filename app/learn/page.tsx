import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-[#f8f4ef] px-6 py-24 text-black">
      <div className="mx-auto max-w-5xl">
        
        {/* Heading */}

        <h1 className="text-5xl font-bold leading-tight">
          Start Learning Japanese 🌸
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-8 text-black/60">
          Japanese is one of the most beautiful and expressive languages
          in the world. It combines culture, emotion, politeness,
          and meaning in a very unique way. Before learning words and
          conversations, it is important to understand how the Japanese
          writing system works.
        </p>

        {/* Hiragana */}

        <section className="mt-14">
          <h2 className="text-3xl font-bold">
            Hiragana (ひらがな)
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/70">
            <p>
              Hiragana is the first writing system that beginners learn
              while studying Japanese. It is simple, soft-looking, and
              used very commonly in daily life.
            </p>

            <p>
              Japanese children first learn Hiragana before learning
              Kanji. It is used to write native Japanese words,
              grammar particles, sentence endings, and pronunciations.
            </p>

            <p>
              Hiragana contains 46 basic characters. Every symbol
              represents a sound instead of a letter.
            </p>

            <p>
              Example:
            </p>

            <p>
              あ = a <br />
              い = i <br />
              う = u <br />
              え = e <br />
              お = o
            </p>

            <p>
              Hiragana has smooth and curved strokes, which gives it
              a softer appearance compared to Katakana and Kanji.
            </p>

            <p>
              Some common Hiragana words:
            </p>

            <p>
              こんにちは — Hello <br />
              ありがとう — Thank you <br />
              さくら — Sakura / Cherry blossom <br />
              ねこ — Cat
            </p>
          </div>
        </section>

        {/* Katakana */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Katakana (カタカナ)
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/70">
            <p>
              Katakana is another Japanese writing system used mainly
              for foreign words, names, brands, and modern vocabulary.
            </p>

            <p>
              While Hiragana looks soft and rounded, Katakana appears
              sharper and more angular.
            </p>

            <p>
              Katakana is often used for:
            </p>

            <p>
              • Foreign names <br />
              • English-based words <br />
              • Technology terms <br />
              • Brand names <br />
              • Emphasis in writing
            </p>

            <p>
              Example:
            </p>

            <p>
              ア = a <br />
              イ = i <br />
              ウ = u <br />
              エ = e <br />
              オ = o
            </p>

            <p>
              Some common Katakana words:
            </p>

            <p>
              コーヒー — Coffee <br />
              テレビ — Television <br />
              コンピュータ — Computer <br />
              アイスクリーム — Ice cream
            </p>

            <p>
              Since modern Japanese uses many English-origin words,
              Katakana is extremely important in daily conversation.
            </p>
          </div>
        </section>

        {/* Kanji */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Kanji (漢字)
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/70">
            <p>
              Kanji are symbolic Chinese characters used in Japanese.
              Unlike Hiragana and Katakana, Kanji characters carry
              meaning instead of only sound.
            </p>

            <p>
              Thousands of Kanji exist, but beginners usually start
              with simple and frequently used ones.
            </p>

            <p>
              Examples:
            </p>

            <p>
              山 — Mountain <br />
              川 — River <br />
              人 — Person <br />
              火 — Fire <br />
              水 — Water
            </p>

            <p>
              Kanji helps shorten sentences and makes reading faster.
              Without Kanji, Japanese paragraphs become difficult
              to understand.
            </p>

            <p>
              One Kanji can sometimes have multiple pronunciations,
              depending on the word and context.
            </p>

            <p>
              Example:
            </p>

            <p>
              学 = Study / Learning <br />
              学生 = Student <br />
              学校 = School
            </p>

            <p>
              Learning Kanji takes time, but step-by-step practice
              makes it easier and enjoyable.
            </p>
          </div>
        </section>

        {/* Greetings */}

        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Common Greetings & Daily Phrases
          </h2>

          <div className="mt-8 grid gap-4 text-[15px] leading-8 text-black/70 md:grid-cols-2">
            
            <p>こんにちは — Hello</p>
            <p>おはようございます — Good morning</p>

            <p>こんばんは — Good evening</p>
            <p>おやすみなさい — Good night</p>

            <p>ありがとう — Thank you</p>
            <p>どうもありがとうございます — Thank you so much</p>

            <p>どういたしまして — You’re welcome</p>
            <p>すみません — Excuse me / Sorry</p>

            <p>ごめんなさい — I’m sorry</p>
            <p>はじめまして — Nice to meet you</p>

            <p>お元気ですか？ — How are you?</p>
            <p>今日はどうでしたか？ — How was your day?</p>

            <p>お誕生日おめでとう — Happy birthday</p>
            <p>お大事に — Get well soon</p>

            <p>また明日 — See you tomorrow</p>
            <p>また後で — See you later</p>

            <p>またすぐ会いましょう — See you soon</p>
            <p>助けてください — Help me</p>

            <p>大丈夫ですか？ — Are you okay?</p>
            <p>手伝いましょうか？ — Do you need help?</p>

            <p>今何時ですか？ — What time is it?</p>
            <p>水をください — Water please</p>

            <p>駅はどこですか？ — Where is the station?</p>
            <p>トイレはどこですか？ — Where is the washroom?</p>

            <p>私の名前は山口です — My name is Yamaguchi</p>
            <p>東京に住んでいます — I live in Tokyo</p>

            <p>英語を話せますか？ — Can you speak English?</p>
            <p>日本語を勉強しています — I am learning Japanese</p>

            <p>これは何ですか？ — What is this?</p>
            <p>お願いします — Please</p>

            <p>わかりません — I don’t understand</p>
            <p>ゆっくり話してください — Please speak slowly</p>
          </div>
        </section>

        {/* Final */}

        <section className="mt-20 border-t border-black/10 pt-10">
          <p className="text-sm leading-8 text-black/60">
            Japanese learning becomes easier with regular exposure,
            reading, listening, and practice. Start slowly with
            Hiragana and Katakana, learn basic words and phrases,
            and gradually move toward Kanji and conversation practice.
            Consistency matters more than speed.
          </p>
        </section>
      </div>
    </div>
  )
}