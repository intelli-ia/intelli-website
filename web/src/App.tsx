import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Pitch } from "@/components/sections/pitch"
import { Problem } from "@/components/sections/problem"
import { Solution, IntegrationHighlight } from "@/components/sections/solution"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SuccessCases } from "@/components/sections/success-cases"
import { Differentiators } from "@/components/sections/differentiators"
import { CTA } from "@/components/sections/cta"
import { IntelliBrand } from "@/components/sections/intelli-brand"
import { Testimonials } from "@/components/sections/testimonials"


function App() {
  return (
    <div className="min-h-screen bg-[#faf5ed] selection:bg-[#BFFF00] selection:text-[#0A0E27]">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Pitch />
        <Testimonials />
        <CTA />
        <IntelliBrand />
      </main>

      <Footer />
    </div>
  )
}

export default App