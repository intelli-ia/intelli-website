import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Serviços", href: "#services" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contact" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-[#faf5ed]/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
                    : "bg-[#faf5ed]"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 lg:pl-16 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 shrink-0">
                    <span className="font-sans font-bold text-xl text-[#0A0E27] tracking-tight">
                        intelli
                    </span>
                </a>

                {/* Desktop Links - REMOVED per request */}
                <div className="hidden md:block flex-1" />

                {/* CTA Button + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        className="hidden sm:inline-flex bg-[#0A0E27] hover:bg-[#1a2244] text-white font-semibold text-sm px-5 py-2.5 h-auto rounded-xl transition-all duration-200"
                    >
                        <a 
                            href={`https://wa.me/5571983477264?text=${encodeURIComponent("Vi o site e gostaria de entender melhor o processo")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Consultoria
                        </a>
                    </Button>

                    {/* Mobile menu toggle */}
                    <button
                        className="md:hidden p-2 text-[#0A0E27]"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#faf5ed] border-t border-gray-200/60 px-4 py-4 flex flex-col gap-4">
                    <Button
                        asChild
                        className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-semibold text-sm px-5 h-11 rounded-xl"
                    >
                        <a 
                            href={`https://wa.me/5571983477264?text=${encodeURIComponent("Vi o site e gostaria de entender melhor o processo")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                        >
                            Agendar Consultoria
                        </a>
                    </Button>
                </div>
            )}
        </header>
    )
}
