import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution, IntegrationHighlight } from "@/components/sections/solution"
import { Services } from "@/components/sections/services"
import { HowItWorks } from "@/components/sections/how-it-works"
import { SuccessCases } from "@/components/sections/success-cases"
import { Differentiators } from "@/components/sections/differentiators"
import { CTA } from "@/components/sections/cta"
import { IntelliBrand } from "@/components/sections/intelli-brand"


function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <Navbar />

      <main className="flex flex-col">
        <Hero />
        <Problem />
        <Solution />
        <IntegrationHighlight />
        <Services />
        <HowItWorks />
        <SuccessCases />
        <Differentiators />
        <CTA />
        <IntelliBrand />
      </main>

      <Footer />
    </div>
  )
}

export default App