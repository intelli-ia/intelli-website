import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <section className="bg-[#faf5ed] pb-32 pt-16">
            <div className="container mx-auto px-4">
                <div className="relative max-w-6xl mx-auto bg-[#0A0E27] rounded-[3rem] md:rounded-[4rem] overflow-hidden min-h-[450px] flex items-center justify-center text-center">

                    {/* SVG Filters for motion blur */}
                    <svg className="absolute w-0 h-0 invisible">
                        <defs>
                            <filter id="motion-blur-filter">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="15 0" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Dark uniform overlay for legibility */}
                    <div className="absolute inset-0 bg-black/60 z-10" />

                    {/* Background Image with custom motion blur */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/cta.jpg"
                            alt=""
                            className="w-full h-full object-cover scale-110"
                            style={{ filter: 'url(#motion-blur-filter) blur(2px)' }}
                        />
                    </div>

                    <div className="relative z-20 w-full max-w-4xl px-8 py-16 md:px-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="font-garamond text-4xl md:text-6xl text-white leading-[1.1] mb-24 max-w-3xl">
                                <span className="font-bold">Inteligência</span> que trabalha tão duro quanto você
                            </h2>
                            <p className="text-white font-normal text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
                                Atendimento 24h com agentes de IA orquestrados, tráfego milimetricamente rastreado e conversão contínua.                            </p>

                            <button className="group bg-[#BFFF00] hover:bg-[#d4ff4d] text-[#0A0E27] px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#BFFF00]/10">
                                Agendar Consultoria
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
