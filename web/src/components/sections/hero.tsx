import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TextRotator } from "@/components/ui/text-rotator"

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('problem')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const words = [
        "Captação de clientes",
        "Relatórios comerciais",
        "Dashboards de tráfego",
        "Infraestrutura digital"
    ]

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center bg-[#FDFBF7] pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="space-y-10 animate-fade-in-down">
                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#1A202C] leading-[1.2] tracking-tight">
                                Otimize sua <TextRotator texts={words} className="text-[#FF7A2F] font-semibold" /> <br className="hidden md:block" /> com IA estratégica
                            </h1>
                            <p className="text-[#4A5568] text-base md:text-xl max-w-xl leading-relaxed font-normal">
                                A Intelli une tecnologia de ponta e marketing orientado a dados para desbloquear o verdadeiro potencial de crescimento da sua empresa.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={scrollToNext}
                                className="bg-[#FF7A2F] hover:bg-[#E66922] text-white font-bold text-base md:text-lg px-8 py-5 h-auto rounded-xl transition-all duration-300 flex items-center gap-3 group shadow-lg shadow-orange-100"
                            >
                                Impulsionar meus resultados
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>

                        <div className="flex items-center gap-4 text-[#4A5568]/60 text-sm font-semibold">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#FDFBF7] bg-gray-200 overflow-hidden">
                                        <img src={`/avatar-${i}.png`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span>Mais de 1.000 empresas escalando com Intelli</span>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        {/* Main Image Container */}
                        <div className="relative w-full max-w-xl aspect-[4/5] lg:aspect-auto lg:h-full rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                            <img
                                src="/hero-new.png"
                                alt="Intelli Tech Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/40 to-transparent"></div>
                        </div>



                        {/* Decorative Elements */}
                        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-intelli-green rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute -left-20 -top-20 w-48 h-48 bg-[#FF7A2F] rounded-full blur-[100px] opacity-10 animate-pulse"></div>
                    </div>
                </div>

                {/* Clients / Partnership Logos */}
                <div className="mt-32 pt-16 border-t border-gray-200/50">
                    <p className="text-center text-[#4A5568]/40 font-bold uppercase tracking-[0.2em] text-xs mb-10">Confiado por empresas inovadoras</p>
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        <div className="text-2xl font-black text-[#0A0E27] tracking-tighter">QUEIROZ<span className="text-[#FF7A2F]">.</span></div>
                        <div className="text-2xl font-black text-[#0A0E27] tracking-tighter italic">AURORA</div>
                        <div className="text-2xl font-black text-[#0A0E27] tracking-tighter underline decoration-[#FF7A2F]">CORC</div>
                        <div className="text-2xl font-black text-[#0A0E27] tracking-tighter uppercase">Intelli Group</div>
                        <div className="text-2xl font-black text-[#0A0E27] tracking-tighter">BEYOND DATA</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
