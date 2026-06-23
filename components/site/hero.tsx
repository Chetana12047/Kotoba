'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SakuraPetals } from './sakura-petals'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: 'easeOut' as const,
    },
  }),
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="sakura-glow pointer-events-none absolute inset-0 -z-10" />

      <SakuraPetals />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-secondary-foreground"
          >
            <Sparkles className="size-4 text-primary" />
            AI-powered Japanese, beautifully simple
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 font-heading text-5xl leading-[1.05] font-bold tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl"
          >
            Learn Japanese{' '}
            <span className="text-gradient">Smarter.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground lg:mx-0"
          >
            Master kana, vocabulary, and conversation through an elegant
            platform that blends adaptive AI with the depth of Japanese culture.
            From your first ひらがな to fluent 会話 — Kotoba grows with you.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link href="/learn">
              <Button className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/25">
                Start learning free
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                variant="outline"
                className="h-12 rounded-xl border-border/80 bg-card/60 px-6 text-base backdrop-blur"
              >
                <Play className="size-4 text-primary" />
                Watch demo
              </Button>
            </Link>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start"
          >
            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                Daily Quiz
              </p>
              <p>Practice</p>
            </div>

            <div className="h-8 w-px bg-border" />

            <div>
              <p className="font-heading text-2xl font-bold text-foreground">
                2,300+
              </p>
              <p>Kanji & words</p>
            </div>

          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass relative overflow-hidden rounded-[2rem] p-3 shadow-2xl shadow-primary/10"
          >
            <Image
              src="/hero-illustration.png"
              alt="Illustration of Mount Fuji with cherry blossoms representing Japanese learning"
              width={720}
              height={720}
              priority
              className="h-auto w-full rounded-[1.5rem]"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass absolute -bottom-5 -left-4 rounded-2xl px-4 py-3 shadow-xl md:-left-8"
          >
            <p className="font-heading text-2xl font-bold text-primary">
              桜
            </p>

            <p className="text-xs text-muted-foreground">
              sakura · cherry blossom
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="glass absolute -top-3 -right-2 rounded-2xl px-4 py-3 shadow-xl md:-right-6"
          >
            <p className="text-xs font-medium text-muted-foreground">
              Daily streak
            </p>

            <p className="font-heading text-xl font-bold text-foreground">
              28 🔥
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}