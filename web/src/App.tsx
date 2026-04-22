import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Home } from "@/pages/Home"
import { PrivacyPolicy } from "@/pages/PrivacyPolicy"
import { TermsOfUse } from "@/pages/TermsOfUse"
import { ScrollToTop } from "@/components/utils/scroll-to-top"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#faf5ed] selection:bg-[#BFFF00] selection:text-[#0A0E27]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App