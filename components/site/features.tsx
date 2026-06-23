'use client'

import { motion } from 'motion/react'
import {
  Languages,
  PenLine,
  CalendarHeart,
  Layers,
  ListChecks,
  LineChart,
  Landmark,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Languages,
    kanji: '訳',
    title: 'AI Translation',
    description:
      'Translate between Japanese and English instantly, with context, nuance, and natural phrasing explained line by line.',
  },
  {
    icon: PenLine,
    kanji: 'か',
    title: 'Kana Practice',
    description:
      'Master hiragana and katakana with stroke-order guidance, handwriting recognition, and spaced repetition.',
  },
  {
    icon: CalendarHeart,
    kanji: '日',
    title: 'Daily Vocabulary',
    description:
      'A fresh, personalized set of words every day, tuned to your level and the topics you care about.',
  },
  {
    icon: Layers,
    kanji: '札',
    title: 'Flashcards',
    description:
      'Smart SRS flashcards that adapt to your memory, surfacing words right before you forget them.',
  },
  {
    icon: ListChecks,
    kanji: '問',
    title: 'Quiz System',
    description:
      'Reinforce learning with adaptive quizzes covering reading, listening, grammar, and meaning.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-sm font-semibold tracking-wide text-primary">
            特徴 · Features
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
            Everything you need to reach fluency
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            One elegant platform that unifies every part of your Japanese
            learning journey — powered by adaptive AI.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            const featured = i === 0
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className={featured ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border-border/70 bg-card/70 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-4 -right-2 font-heading text-7xl text-primary/5 transition-colors duration-300 group-hover:text-primary/10"
                  >
                    {feature.kanji}
                  </span>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
