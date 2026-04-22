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
        <section className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col bg-[#faf5ed] pt-20 md:pt-24 lg:pt-32 overflow-hidden">
            {/* Main content - centered */}
            <div className="relative z-10 flex-1 flex items-center container mx-auto px-4 md:px-6 pb-16">
                <div className="w-full flex flex-col items-center text-center space-y-8 lg:space-y-12">

                    {/* Content Area */}
                    <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
                        <h1 className="font-garamond text-[2.75rem] md:text-7xl lg:text-8xl font-normal text-[#1A202C] leading-[1.1] tracking-tight">
                            Automatize seu fluxo<br className="hidden md:block" />de vendas com IA
                        </h1>
                        <p className="text-[#4A5568] text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light mx-auto">
                            A Intelli potencializou <span className="font-semibold text-[#1A202C]">mais de 120 empresas</span> com funis de vendas <span className="font-semibold text-[#1A202C]">automatizados com IA</span>, ajudando negócios a converter mais clientes.
                        </p>
                    </div>


                    <div className="flex flex-col items-center gap-8">
                        <Button
                            onClick={scrollToNext}
                            className="bg-[#0A0E27] hover:bg-[#1a2244] text-white font-medium text-base px-6 py-3 h-auto rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-xl hover:shadow-2xl hover:-translate-y-1 w-auto"
                        >
                            Conheça a nossa solução
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>

                        {/* Social Proof */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex -space-x-3 md:-space-x-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#faf5ed] overflow-hidden shadow-md relative group transition-transform hover:scale-110 hover:z-10">
                                        <img
                                            src={`/testemonials/img-${i}.jpg`}
                                            alt="Success Case"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#1A202C] font-bold text-lg leading-none">
                                    +120
                                </span>
                                <span className="text-[#4A5568] text-sm md:text-base font-medium leading-none">
                                    projetos desenlvovidos com sucesso
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Client Logos Marquee */}
            <div className="w-full relative overflow-hidden border-y border-[#0A0E27]/5 mt-auto bg-[#0A0E27]/10 backdrop-blur-xl">
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
                            className="flex items-center justify-center px-4 md:px-8 py-0 border-r border-[#0A0E27]/5 min-w-[120px] md:min-w-[200px]"
                        >
                            <img
                                src={src}
                                alt="Customer logo"
                                className="h-16 md:h-28 w-auto object-contain grayscale opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Subtle fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#faf5ed]/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#faf5ed]/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    )
}
