import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Features } from '@/components/site/features'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
