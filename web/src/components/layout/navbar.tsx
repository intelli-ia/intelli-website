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
            <div className="container mx-auto px-4 md:px-8 lg:pl-32 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 shrink-0">
                    <img
                        src="/intelli-logo.png"
                        alt="Intelli"
                        className="h-9 w-9 object-cover rounded-xl"
                    />
                    <span className="font-sans font-bold text-xl text-[#0A0E27] tracking-tight">
                        intelli
                    </span>
                </a>

                {/* Desktop Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[#4A5568] hover:text-[#0A0E27] transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        className="hidden sm:inline-flex bg-[#0A0E27] hover:bg-[#1a2244] text-white font-semibold text-sm px-5 py-2.5 h-auto rounded-xl transition-all duration-200"
                    >
                        <a href="#contact">Agende uma Consultoria</a>
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
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-[#4A5568] hover:text-[#0A0E27] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        asChild
                        className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-semibold text-sm px-5 h-11 rounded-xl"
                    >
                        <a href="#contact" onClick={() => setMobileOpen(false)}>Agende uma Consultoria</a>
                    </Button>
                </div>
            )}
        </header>
    )
}
