import { Hero } from "@/components/sections/hero"
import { Pitch } from "@/components/sections/pitch"
import { CTA } from "@/components/sections/cta"
import { IntelliBrand } from "@/components/sections/intelli-brand"
import { Testimonials } from "@/components/sections/testimonials"

export function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Pitch />
      <Testimonials />
      <CTA />
      <IntelliBrand />
    </main>
  )
}
