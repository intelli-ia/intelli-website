import { motion } from "framer-motion"
import { Globe, Database, Bot, Bell } from "lucide-react"

export function Pitch() {
    return (
        <section id="pitch" className="relative bg-[#0A0E27] rounded-t-[6rem] mt-12 pt-24 pb-28 overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E27] via-[#111830] to-[#0d1535] pointer-events-none" />

            <div className="relative container mx-auto px-4 md:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    {/* Pill Badges Row */}
                    <div className="flex flex-wrap justify-center gap-0 mb-12">
                        {[
                            { icon: Globe, label: "Infraestrutura" },
                            { icon: Database, label: "Dados" },
                            { icon: Bot, label: "Agentes de IA" },
                            { icon: Bell, label: "Conversão" },
                        ].map((item, idx) => (
                            <div 
                                key={idx}
                                className="flex items-center gap-2 px-5 py-2 bg-transparent border-2 border-white rounded-full text-white"
                            >
                                <item.icon className="w-4 h-4" />
                                <span className="text-[12px] font-bold tracking-widest uppercase whitespace-nowrap">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Headline */}
                    <h2 className="font-garamond text-4xl md:text-5xl lg:text-7xl font-normal text-white leading-[1.1] tracking-tight mb-16">
                        Como escalamos a sua<br />
                        <span className="font-semibold">operação comercial</span>
                    </h2>

                    {/* Body */}
                    <p className="text-white text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
                        Tráfego rastreável e agentes de IA<br className="hidden md:block" /> operando toda a sua estrutura comercial.
                    </p>
                </div>

                {/* Vertical Stepper Container */}
                <div className="mt-32 max-w-6xl mx-auto relative">
                    {/* Vertical Connecting Line (Desktop Only) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden lg:block" />

                    {[
                        {
                            title: "Infraestrutura.",
                            description: "Sua empresa ganha uma página de alta conversão para o Google e um Instagram estruturado para que todo visitante seja guiado de forma clara até a compra.",
                        },
                        {
                            title: "Captação Inteligente.",
                            description: "Com a base pronta, sua empresa atrai clientes com anúncios adaptados ao interesse de cada um, enquanto o sistema rastreia os visitantes para aprender e tornar as campanhas mais inteligentes.",
                        },
                        {
                            title: "Multi-Agentes.",
                            description: "Seu atendimento passa a rodar 24h/dia com agentes de IA humanizados que vendem no WhatsApp, reativam conversas sem resposta, atualizam seu CRM e enviam relatórios de vendas diariamente.",
                        },
                        {
                            title: "Fechamento.",
                            description: "Livre da burocracia, a sua equipe interna foca exclusivamente em tirar pedidos, fechar vendas e garantir uma experiência de excelência para os clientes dentro da sua empresa.",
                        },
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative mb-24 last:mb-0"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Number Circle (Desktop Centered) */}
                            <motion.div
                                className="absolute left-1/2 -top-2 w-12 h-12 bg-[#BFFF00] text-[#0A0E27] rounded-full flex items-center justify-center font-bold z-10 hidden lg:flex"
                                initial={{ scale: 0, x: "-50%" }}
                                whileInView={{ scale: 1, x: "-50%" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            >
                                {index + 1}
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                {/* Content Block */}
                                <motion.div
                                    className={`text-left ${index % 2 !== 0 ? 'lg:order-2 lg:pl-16' : 'lg:text-left lg:pr-16'}`}
                                    initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    {/* Mobile Number Indicator */}
                                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                                        <div className="w-8 h-8 bg-[#BFFF00] text-[#0A0E27] rounded-full flex items-center justify-center font-bold text-sm">
                                            {index + 1}
                                        </div>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>

                                    <h3 className="font-garamond text-5xl md:text-6xl text-white mb-6">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Image Placeholder */}
                                <motion.div
                                    className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-[2rem] aspect-video w-full flex items-center justify-center group overflow-hidden">
                                        <div className="text-white/20 text-sm italic group-hover:text-white/40 transition-colors">
                                            {step.title} Visualization Placeholder
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
