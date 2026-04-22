import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { KineticText } from "@/components/ui/kinetic-text"

export function CTA() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    // Transform scroll progress for title reveal (passed to KineticText)
    const titleProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])
    
    // Transform scroll progress to opacity for the additional content
    const contentOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1])
    const contentY = useTransform(scrollYProgress, [0.6, 0.7], [20, 0])

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[#faf5ed]">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8">
                
                <div className="relative z-20 w-full max-w-5xl text-center">
                    <div className="flex flex-col items-center">
                        
                        {/* Kinetic Title */}
                        <KineticText 
                            text="Aplique inteligência no seu processo comercial"
                            className="font-garamond text-5xl md:text-8xl lg:text-[8rem] text-intelli-blue leading-[0.75] lg:leading-[0.65] mb-12 max-w-7xl"
                            color="text-intelli-blue"
                            progress={titleProgress}
                            notationWord="comercial"
                            notationColor="#BFFF00"
                        />

                        {/* Revealed Content */}
                        <motion.div
                            style={{ 
                                opacity: contentOpacity,
                                y: contentY
                            }}
                            className="flex flex-col items-center"
                        >
                            <p className="text-intelli-blue/70 font-normal text-lg md:text-2xl mb-12 max-w-3xl leading-relaxed">
                                Atendimento 24h com agentes de IA orquestrados, tráfego milimetricamente rastreado e conversão contínua.
                            </p>

                            <a
                                href={`https://wa.me/5571983477264?text=${encodeURIComponent("Vi o site e gostaria de entender melhor o processo")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-[#0A0E27] hover:bg-[#1a2244] text-white px-12 py-6 rounded-2xl text-xl font-bold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
                            >
                                Agendar Consultoria
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
