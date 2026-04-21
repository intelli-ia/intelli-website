import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('pitch')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col bg-[#faf5ed] pt-28 md:pt-36 lg:pt-44 overflow-hidden">
            {/* Main content - grows to fill available space */}
            <div className="flex-1 flex items-center container mx-auto px-4 md:px-6 lg:pl-16 pb-12 lg:pb-0">
                <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center lg:items-start">
                    {/* Left Column: Content */}
                    <div className="space-y-8 lg:space-y-10 lg:pt-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="space-y-6">
                            <h1 className="font-garamond text-[2.75rem] md:text-6xl lg:text-8xl font-normal text-[#1A202C] leading-[1.15] tracking-tight">
                                Automatize seu fluxo<br />de vendas com IA
                            </h1>
                            <p className="text-[#4A5568] text-base md:text-xl max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
                                A Intelli potencializou <span className="font-semibold text-[#1A202C]">mais de 120 empresas</span> com funis de vendas <span className="font-semibold text-[#1A202C]">automatizados com IA</span>, ajudando negócios a converter mais clientes através da internet.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-start gap-6">
                            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
                                <Button
                                    onClick={scrollToNext}
                                    className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-thin text-base px-6 py-3 h-auto rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-lg w-auto"
                                >
                                    Conheça a nossa solução
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#faf5ed] overflow-hidden shadow-sm relative group">
                                            <img
                                                src={`/testemonials/img-${i}.jpg`}
                                                alt="Success Case"
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1">
                                    <span className="text-[#1A202C] font-bold text-sm md:text-base leading-none">
                                        +120
                                    </span>
                                    <span className="text-[#4A5568] text-xs md:text-sm font-medium leading-none">
                                        projetos desenlvovidos
                                    </span>
                                </div>
                            </div>
                            <div className="lg:mb-6" />
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative lg:h-[420px] flex items-center justify-center lg:justify-start w-full">
                        <div className="relative w-full max-w-md aspect-[16/10] lg:aspect-auto lg:h-full rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
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
            <div className="w-full relative overflow-hidden border-y border-[#0A0E27]/5 mt-auto bg-[#0A0E27]/10 backdrop-blur-xl">
                {/* Darker Glass Refinement */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                <Marquee className="[--duration:80s] [--gap:0rem] p-0">
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
                        <div
                            key={src}
                            className="flex items-center justify-center px-4 md:px-8 py-0 border-r border-[#0A0E27]/5 min-w-[120px] md:min-w-[240px]"
                        >
                            <img
                                src={src}
                                alt="Customer logo"
                                className="h-14 md:h-24 w-auto object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Subtle fade edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#faf5ed]/60 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#faf5ed]/60 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}
