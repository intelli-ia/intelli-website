import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-4 px-4 w-full",
                scrolled ? "pt-4" : "pt-6"
            )}
        >
            <div
                className={cn(
                    "w-full max-w-6xl flex items-center justify-between px-6 h-14 transition-all duration-500",
                    "bg-[#faf5ed]/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
                    "rounded-2xl md:rounded-full",
                    scrolled ? "max-w-4xl h-14" : "max-w-5xl h-16"
                )}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 shrink-0">
                    <span className="font-sans font-bold text-xl text-[#0A0E27] tracking-tight">
                        intelliAI
                    </span>
                </Link>

                {/* Empty space where links were */}
                <div className="hidden md:block flex-1" />

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-semibold text-sm px-6 h-10 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <a
                            href={`https://wa.me/5571983477264?text=${encodeURIComponent("Vi o site e gostaria de entender melhor o processo")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Agendar Consultoria
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    )
}

