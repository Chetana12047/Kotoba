'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Globe, MessageCircle, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SakuraPetals } from './sakura-petals'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Flashcards', href: '/flashcards' },
      { label: 'Kana', href: '/kana' },
      { label: 'Quiz', href: '/quiz' },
      { label: 'Translator', href: '/translator' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { label: 'Hiragana', href: '/kana' },
      { label: 'Katakana', href: '/kana' },
      { label: 'Vocabulary', href: '/dashboard' },
      { label: 'Grammar', href: '/dashboard' },
      { label: 'Culture', href: '/culture' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/' },
      { label: 'Blog', href: '/' },
      { label: 'Careers', href: '/' },
      { label: 'Contact', href: '/contact' },
      { label: 'Press', href: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/' },
      { label: 'Terms', href: '/' },
      { label: 'Cookies', href: '/' },
      { label: 'Licenses', href: '/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA band */}
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center shadow-2xl shadow-primary/25 md:px-12 md:py-20"
        >
          <SakuraPetals count={10} />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 font-heading text-[10rem] leading-none text-primary-foreground/10"
          >
            言葉
          </span>

          <h2 className="relative font-heading text-3xl font-bold tracking-tight text-balance text-primary-foreground md:text-5xl">
            Begin your Japanese journey today
          </h2>

          <p className="relative mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/85">
            Join over 120,000 learners. Start free — no credit card required.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/learn">
              <Button className="h-12 rounded-xl bg-background px-6 text-base text-foreground shadow-lg">
                Get started free
                <ArrowRight className="size-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="ghost"
                className="h-12 rounded-xl px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
              >
                Talk to our team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-heading text-lg text-primary-foreground">
                言
              </span>

              <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Kotoba
              </span>
            </Link>

            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              The elegant way to learn Japanese — language and culture, woven
              together.
            </p>

            <div className="mt-5 flex gap-2">
              {[Globe, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex size-9 items-center justify-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kotoba. Made with 心 for language
            learners.
          </p>

          <p className="text-sm text-muted-foreground">
            日本語を、もっと美しく。
          </p>
        </div>
      </div>
    </footer>
  )
}