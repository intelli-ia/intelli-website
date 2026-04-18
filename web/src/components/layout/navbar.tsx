import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar({ className }: { className?: string }) {
    return (
        <nav className={cn("w-full py-8 absolute top-0 left-0 z-50", className)}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center bg-white/40 backdrop-blur-xl py-4 px-8 rounded-[2rem] shadow-sm border border-white/40">
                {/* Logo */}
                <div className="text-[#0A0E27] font-black text-3xl tracking-tighter flex items-center gap-1">
                    <span className="bg-[#FF7A2F] text-white w-10 h-10 flex items-center justify-center rounded-xl rotate-3">i</span>
                    intelli<span className="text-[#FF7A2F]">.</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    <a href="#how" className="text-sm font-bold text-[#0A0E27]/60 hover:text-[#0A0E27] transition-colors">Como Funciona</a>
                    <a href="#cases" className="text-sm font-bold text-[#0A0E27]/60 hover:text-[#0A0E27] transition-colors">Cases</a>
                    <a href="#about" className="text-sm font-bold text-[#0A0E27]/60 hover:text-[#0A0E27] transition-colors">Blog</a>
                    <a href="#contact" className="text-sm font-bold text-[#0A0E27]/60 hover:text-[#0A0E27] transition-colors">Contato</a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" className="hidden sm:inline-flex text-[#0A0E27] font-bold hover:bg-white/50 rounded-xl">Login</Button>
                    <Button className="bg-[#FF7A2F] hover:bg-[#E66922] text-white font-bold rounded-xl px-6 h-11 shadow-lg shadow-orange-100">Agendar Demo</Button>
                </div>
            </div>
        </nav>
    )
}
