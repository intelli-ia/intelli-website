import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TextRotator } from "@/components/ui/text-rotator"
import { Marquee } from "@/components/ui/marquee"

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('problem')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const words = [
        "IA para atendimento",
        "Captação de clientes",
        "Relatórios diários",
        "Dashboards comerciais",
        "Website e infraestrutura"
    ]

    return (
        <section className="min-h-screen w-full flex flex-col bg-[#FDFBF7] pt-32 overflow-hidden">
            {/* Main content - grows to fill available space */}
            <div className="flex-1 flex items-start container mx-auto px-4 md:px-6">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-10 lg:pt-6 lg:pl-16">
                        <div className="space-y-6">
                            {/* Logo */}
                            <div className="flex items-center gap-2.5">
                                <img src="/intelli-logo.png" alt="Intelli" className="h-10 w-10 object-cover rounded-xl" />
                                <span className="font-sans font-bold text-xl text-[#0A0E27] tracking-tight">intelli</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#1A202C] leading-[1.2] tracking-tight">
                                Otimize o seu negócio com <TextRotator texts={words} className="text-[#0A0E27] font-semibold" />
                            </h1>
                            <p className="text-[#4A5568] text-base md:text-lg max-w-xl leading-relaxed font-light">
                                A Intelli potencializou <span className="font-semibold text-[#1A202C]">mais de 120 empresas</span> com funis de vendas <span className="font-semibold text-[#1A202C]">automatizados com IA</span>, ajudando negócios a converter mais clientes e escalar com previsibilidade.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={scrollToNext}
                                className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-bold text-base px-6 py-3 h-auto rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-lg"
                            >
                                Conheça a nossa solução
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative lg:h-[420px] flex items-center justify-start">
                        <div className="relative w-full max-w-md aspect-[4/5] lg:aspect-auto lg:h-full rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                            <img
                                src="/hero-new.png"
                                alt="Intelli Tech Collaboration"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/40 to-transparent"></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Client Logos Marquee - pinned naturally at bottom */}
            <div className="pb-8 pt-6">
                <Marquee className="[--duration:80s] [--gap:4rem]">
                    {[
                        "/customers/Frame-13.webp",
                        "/customers/Frame-14.webp",
                        "/customers/Frame-15.webp",
                        "/customers/Frame-16.webp",
                        "/customers/Frame-17.webp",
                        "/customers/Frame-18.webp",
                        "/customers/Frame-19.webp",
                        "/customers/Frame-20.webp",
                        "/customers/Frame-21.webp",
                        "/customers/Frame-22.webp",
                        "/customers/Frame-23.webp",
                        "/customers/Frame-24.webp",
                        "/customers/Frame-25.webp",
                        "/customers/Frame-26.webp",
                        "/customers/Frame-27.webp",
                        "/customers/Frame-28.webp",
                        "/customers/Frame-29.webp",
                    ].map((src) => (
                        <img
                            key={src}
                            src={src}
                            alt="Customer logo"
                            className="h-32 w-auto object-contain grayscale opacity-50"
                        />
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
