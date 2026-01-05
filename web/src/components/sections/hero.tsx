import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { DashBackground } from "@/components/ui/dash-background"
import { NoiseBackground } from "@/components/ui/noise-background"

export function Hero() {
    const scrollToNext = () => {
        const nextSection = document.getElementById('problem')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Sócios da Intelli"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for Text Readability - Adjusted for image visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-intelli-blue/95 via-intelli-blue/80 via-30% to-transparent to-60%"></div>

                {/* Antigravity Particle Effect */}
                <DashBackground />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
                <div className="max-w-3xl space-y-8 animate-fade-in-down">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                        Negócios <span className="text-intelli-green">intelli</span>gentes não acontecem por acaso.
                    </h1>

                    <p className="text-gray-200 text-base md:text-xl max-w-2xl leading-relaxed font-light">
                        Unimos soluções tecnológicas e estratégias de marketing para explorar o
                        verdadeiro potencial da sua empresa.
                    </p>

                    <div className="flex justify-start">
                        <NoiseBackground
                            containerClassName="rounded-full shadow-[0_0_20px_rgba(191,255,0,0.2)] transition-all duration-10 ease-in-out hover:scale-105"
                            gradientColors={[
                                "#BFFF00", // intelli-green
                                "#00FFD0", // cyan-green
                                "#BFFF00"  // Loop back to green
                            ]}
                            noiseOpacity={0.25}
                        >
                            <Button
                                onClick={scrollToNext}
                                className="bg-intelli-green text-intelli-blue font-bold hover:bg-intelli-green text-base px-10 py-3 h-auto rounded-full transition-all duration-300 flex items-center gap-2 group shadow-inner"
                            >
                                Quero conhecer
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90" />
                            </Button>
                        </NoiseBackground>
                    </div>
                </div>
            </div>
        </section>
    )
}
