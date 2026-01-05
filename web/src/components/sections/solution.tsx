import { SectionWrapper } from "@/components/ui/section-wrapper"
import { cn } from "@/lib/utils"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { Marquee } from "@/components/ui/marquee"
import solutionImage from "@/assets/images/INTELLI-WEBSITE-SOLUTION.png"
import { motion, AnimatePresence } from "framer-motion"
import {
    Target,
    MessageSquare,
    Zap,
    Calendar as CalendarIcon,
    Building2
} from "lucide-react"
import { useEffect, useState } from "react"

// --- Components for Bento Backgrounds ---

const LeadsMarquee = () => {
    const leads = [
        { name: "Joaquim S.", source: "Website", amount: "R$ 4.500" },
        { name: "Maria Clara", source: "Google", amount: "R$ 1.200" },
        { name: "Pedro H.", source: "WhatsApp", amount: "R$ 8.900" },
        { name: "Ana Beatriz", source: "Instagram", amount: "R$ 3.100" },
        { name: "Tomás V.", source: "Google", amount: "R$ 12.000" },
    ]

    return (
        <Marquee className="absolute top-0 [--duration:30s] [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
            {leads.concat(leads).map((lead, idx) => (
                <div key={idx} className="flex flex-col gap-1 p-4 bg-white/50 backdrop-blur-sm border rounded-xl min-w-[140px] shadow-sm transform group-hover:scale-105 transition-transform duration-500">
                    <span className="text-xs font-bold text-intelli-blue">{lead.name}</span>
                    <div className="flex justify-between items-center text-[10px] text-intelli-blue/60">
                        <span>{lead.source}</span>
                        <span className="text-intelli-green font-bold bg-intelli-blue/50 px-1 py-0 rounded-full">{lead.amount}</span>
                    </div>
                </div>
            ))}
        </Marquee>
    )
}

const CONVERSATION = [
    { text: "Olá, gostaria de saber mais!", side: 'left' as const },
    { text: "Bom dia, tudo bem? Será um prazer te atender! Gostaria de agendar uma consulta para qual especialidade?", side: 'right' as const },
    { text: "Quero agendar para pediatria", side: 'left' as const },
    { text: "Excelente, me passe a idade da criança e me diga se há alguma queixa específica ou se é consulta de rotina, por favor!", side: 'right' as const },
    { text: "Ele tem 3 anos, é consulta de rotina mesmo", side: 'left' as const },
    { text: "Maravilha, temos horário disponível na quarta-feira às 10h e às 14h, algum desses fica bom?", side: 'right' as const },
    { text: "Pode ser sim, 10h fica melhor", side: 'left' as const },
    { text: "Excelente, me confirme o nome completo dele para o agendamento", side: 'right' as const },
    { text: "Enzo Henrique", side: 'left' as const },
    { text: "Excelente, a consulta do Enzo foi agendada para quarta-feira às 10h com o Dr. Ricardo, profissional de excelência em nossa clínica. Será um prazer recebê-los por aqui!", side: 'right' as const },
    { text: "Obrigada! Gostei da agilidade", side: 'left' as const },
    { text: "Por nada! Estou aqui para isso! Até lá!", side: 'right' as const },
]

const ChatAnimation = () => {
    const [visibleMessages, setVisibleMessages] = useState<{ id: number, text: string, side: 'left' | 'right' }[]>(() => [
        { ...CONVERSATION[0], id: Date.now() }
    ])

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % CONVERSATION.length
            const msg = { ...CONVERSATION[currentIndex], id: Date.now() }
            setVisibleMessages(prev => {
                const next = [...prev, msg]
                if (next.length > 2) return next.slice(1)
                return next
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])



    return (
        <div className="absolute inset-0 flex flex-col gap-2 p-4 justify-start bg-transparent overflow-hidden pt-6">
            <AnimatePresence mode="popLayout">
                {visibleMessages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                            "max-w-[85%] p-2.5 rounded-2xl text-[10px] sm:text-xs font-medium shadow-sm leading-snug",
                            msg.side === 'right' ? "bg-intelli-blue text-white ml-auto" : "bg-white text-intelli-blue"
                        )}
                    >
                        {msg.text}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

const ORBITAL_ICONS = [
    { name: "WhatsApp", logo: "/logos/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp", scale: 2.3 },
    { name: "Salesforce", logo: "/logos/Salesforce.com_logo.svg.png", scale: 1.7 },
    { name: "Google Calendar", logo: "/logos/Google-Calendar-Logo.png", scale: 1.8 },
    { name: "HubSpot", logo: "/logos/HubSpot-Simbolo.png", scale: 2.0 },
    { name: "Meta", logo: "/logos/meta_PNG12.png", scale: 2.0 },
    { name: "Pipedrive", logo: "/logos/pipedrive.webp", scale: 2.0 },
    { name: "Gmail", logo: "/logos/Gmail_Logo_512px.png.webp", scale: 1.0 },
    { name: "OpenAI", logo: "/logos/openai.webp", scale: 1.1 },
    { name: "Kommo", logo: "/logos/kommo.png", scale: 2.0 },
    { name: "Google Ads", logo: "/logos/lg-66d67065d6779-Google-Ads-Logo.webp", scale: 1.4 },
    { name: "Omie", logo: "/logos/omie.png", scale: 2.0 },
    { name: "Amigoapp", logo: "/logos/amigoapp.png", scale: 1.7 },
]

const IntegrationSync = () => {
    const [activeConnections, setActiveConnections] = useState<number[]>([])

    useEffect(() => {
        const interval = setInterval(() => {
            // Pick 2-4 random icons to connect
            const count = Math.floor(Math.random() * 3) + 2
            const indices = Array.from({ length: count }, () =>
                Math.floor(Math.random() * ORBITAL_ICONS.length)
            )
            setActiveConnections(indices)

            // Clear connections shortly after
            setTimeout(() => setActiveConnections([]), 800)
        }, 1200)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="relative flex items-center justify-center -translate-y-10">
                {/* Connection Lines (Dash circle) - radius 100px */}
                <div className="absolute w-[200px] h-[200px] rounded-full border border-dashed border-intelli-blue/10" />

                {/* Visual core - Company */}
                <div className="relative z-20 bg-white p-3 rounded-2xl shadow-xl border border-intelli-blue/5 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-intelli-blue" />
                    <div className="absolute inset-0 bg-intelli-green rounded-2xl blur-xl opacity-20 animate-pulse -z-10" />
                </div>

                {/* Orbital System */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[300px] h-[300px] flex items-center justify-center"
                >
                    {/* Dynamic Web Connections */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible z-0">
                        <AnimatePresence>
                            {activeConnections.map((idx, i) => {
                                const angle = (idx * 360) / ORBITAL_ICONS.length
                                const rad = (angle - 90) * (Math.PI / 180)
                                const x2 = 150 + 100 * Math.cos(rad)
                                const y2 = 150 + 100 * Math.sin(rad)
                                return (
                                    <motion.line
                                        key={`${idx}-${i}`}
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 0.3 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        x1="150" y1="150"
                                        x2={x2} y2={y2}
                                        stroke="url(#lineGradient)"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 4"
                                    />
                                )
                            })}
                        </AnimatePresence>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#0A0E27" />
                                <stop offset="100%" stopColor="#BFFF00" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {ORBITAL_ICONS.map((item, idx) => {
                        const angle = (idx * 360) / ORBITAL_ICONS.length
                        return (
                            <div
                                key={item.name}
                                style={{
                                    position: 'absolute',
                                    transform: `rotate(${angle}deg) translate(100px)`
                                }}
                                className="flex items-center justify-center w-12 h-12"
                            >
                                <motion.div
                                    initial={{ rotate: -angle }}
                                    animate={{ rotate: -angle - 360 }}
                                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        style={{ transform: `scale(${item.scale})` }}
                                        className="w-8 h-8 object-contain drop-shadow-sm"
                                    />
                                </motion.div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}

const CalendarPreview = () => {
    const today = new Date()
    const currentMonthYear = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(today)
    const formattedMonthYear = currentMonthYear.charAt(0).toUpperCase() + currentMonthYear.slice(1)

    return (
        <div className="absolute inset-x-0 top-0 p-4 flex items-start justify-center pt-6">
            <div className="bg-white rounded-xl shadow-lg border p-4 w-full transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-500">
                <div className="flex justify-between items-center mb-4 pb-2 border-b">
                    <span className="text-xs font-bold text-intelli-blue">{formattedMonthYear}</span>
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-200" />
                        <div className="w-2 h-2 rounded-full bg-gray-200" />
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-2">
                    {[...Array(7)].map((_, i) => <div key={i} className="h-1 bg-gray-100 rounded-full" />)}
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {[...Array(21)].map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "aspect-square rounded-md flex items-center justify-center text-[8px] font-bold",
                                i === 14 ? "bg-intelli-green text-intelli-blue" : "bg-gray-50 text-gray-300"
                            )}
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        Icon: Target,
        name: "Funis Estratégicos",
        description: "Nem todo visitante compra no primeiro clique. Criamos funis que nutrem relacionamentos, qualificam leads e convertem no momento certo.",
        href: "#",
        cta: "Ver detalhes",
        className: "col-span-3 lg:col-span-1",
        background: <LeadsMarquee />,
    },
    {
        Icon: MessageSquare,
        name: "Atendimento com Inteligência Artificial",
        description: "Atendimento 24h, todos os dias, que qualifica leads e vende enquanto você descansa, integrado ao seu CRM e demais ferramentas.",
        href: "#",
        cta: "Testar IA",
        className: "col-span-3 lg:col-span-2",
        background: <ChatAnimation />,
    },
    {
        Icon: Zap,
        name: "Integrações Centralizadas",
        description: "Chega de operar 10 ferramentas desconectadas. Centralizamos tudo para que os dados fluam automaticamente entre sistemas. As ferramentas servem sua empresa, não o contrário.",
        href: "#",
        cta: "Conectar stack",
        className: "col-span-3 lg:col-span-2",
        background: <IntegrationSync />,
    },
    {
        Icon: CalendarIcon,
        name: "Agendamento Inteligente",
        description: "Agendamentos e lembretes de forma automática. Ideal para área da saúde e empresas que vendem via reuniões.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Agendar Demo",
        background: <CalendarPreview />,
    },
]

export function Solution() {
    return (
        <SectionWrapper id="solution" className="bg-intelli-offwhite overflow-hidden pb-0 md:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-stretch">

                <div className="lg:col-span-2 flex flex-col justify-between">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-intelli-blue leading-[1.1] mt-0">
                            A solução está na integração.
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-intelli-blue/80 leading-relaxed">
                            <p>
                                Marketing sem tecnologia é esforço desperdiçado. Tecnologia sem estratégia
                                de marketing é potencial não explorado.
                            </p>
                            <p>
                                Somos differentes porque, desde o primeiro dia, você tem os dois trabalhando
                                juntos. Da estratégia de captação até a automação dos processos.
                            </p>

                            <span className="inline-block px-4 py-2 font-bold text-intelli-green bg-intelli-blue rounded-[0.5rem] text-sm md:text-base shadow-lg">
                                Uma solução completa.
                            </span>
                        </div>
                    </div>

                    <div className="w-full relative -mt-4 lg:-mt-10 -ml-4 flex items-end justify-start overflow-visible group">
                        <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[36rem] overflow-hidden">
                            <img
                                src={solutionImage}
                                alt="Solution Illustration"
                                className="w-full h-full object-contain filter brightness-[1.1] contrast-[1.05] opacity-60"
                                style={{
                                    maskImage: 'radial-gradient(circle at center, black 25%, transparent 75%)',
                                    WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 75%)'
                                }}
                            />

                            {/* Overlay to ensure perfect blending with white background */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30" />
                        </div>
                    </div>
                </div>

                {/* Right Column - Bento Grid (60% -> 3/5 cols) */}
                <div className="lg:col-span-3">
                    <BentoGrid>
                        {features.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </div>

            </div>
        </SectionWrapper>
    )
}

export function IntegrationHighlight() {
    return (
        <section className="bg-intelli-green min-h-screen flex items-center pt-0 pb-24 md:pb-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 lg:px-24 flex flex-col items-start">
                <div className="flex flex-col items-start gap-8 md:gap-12 lg:gap-16 max-w-7xl">
                    <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold text-intelli-blue flex flex-col items-start gap-6 md:gap-10 tracking-tighter leading-none">
                        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 group transition-all duration-500">
                            <span>Tudo</span>
                            <span className="text-intelli-green bg-intelli-blue px-6 py-3 md:px-10 md:py-5 lg:px-14 lg:py-7 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-white/5 transform hover:scale-105 transition-transform duration-300">
                                integrado.
                            </span>
                        </div>

                        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 group transition-all duration-500">
                            <span>Tudo</span>
                            <span className="text-intelli-green bg-intelli-blue px-6 py-3 md:px-10 md:py-5 lg:px-14 lg:py-7 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-white/5 transform hover:scale-105 transition-transform duration-300">
                                funcionando.
                            </span>
                        </div>

                        <div className="flex items-center gap-4 md:gap-8 lg:gap-12 group transition-all duration-500">
                            <span>Tudo</span>
                            <span className="text-intelli-green bg-intelli-blue px-6 py-3 md:px-10 md:py-5 lg:px-14 lg:py-7 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-white/5 transform hover:scale-105 transition-transform duration-300 text-left">
                                focado em resultado.
                            </span>
                        </div>
                    </h2>
                </div>
            </div>
        </section>
    )
}
