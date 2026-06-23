'use client'

import {
  useEffect,
  useState,
} from 'react'

import Link from 'next/link'

import { motion } from 'motion/react'

import {
  Menu,
  X,
} from 'lucide-react'

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Translator',
    href: '/translator',
  },
  {
    label: 'Kana',
    href: '/kana',
  },
  {
    label: 'Flashcards',
    href: '/flashcards',
  },
  {
    label: 'Quiz',
    href: '/quiz',
  },
  {
    label: 'Sentences',
    href: '/sentences',
  },
  {
    label: 'Profile',
    href: '/profile',
  },
]

export function Navbar() {
  const [scrolled, setScrolled] =
    useState(false)

  const [open, setOpen] =
    useState(false)

  const [mounted, setMounted] =
    useState(false)

  const { isSignedIn } =
    useUser()

  useEffect(() => {
    setMounted(true)

    const onScroll = () =>
      setScrolled(
        window.scrollY > 16
      )

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      }
    )

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll
      )
  }, [])

  if (!mounted) return null

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 md:px-6',
          scrolled
            ? 'glass shadow-lg shadow-primary/5'
            : 'bg-transparent'
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary font-heading text-lg text-primary-foreground shadow-md shadow-primary/20">
            言
          </span>

          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Kotoba
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="h-9 px-4 text-foreground hover:bg-accent/60"
                >
                  Log in
                </Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button className="h-9 rounded-xl px-5 shadow-md shadow-primary/20">
                  Sign up
                </Button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            setOpen((v) => !v)
          }
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex size-9 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-accent/60 md:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <Button
                    variant="ghost"
                    className="w-full"
                  >
                    Log in
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button className="w-full rounded-xl">
                    Sign up
                  </Button>
                </SignUpButton>
              </>
            ) : (
              <div className="flex justify-center pt-2">
                <UserButton />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}