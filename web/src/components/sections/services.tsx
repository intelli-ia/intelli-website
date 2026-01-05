import * as React from "react"
import { useInView } from "framer-motion"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { AppleCardsCarousel } from "@/components/ui/apple-cards-carousel"
import iaImg from "@/assets/images/carousel/ia.jpg"
import trafegoImg from "@/assets/images/carousel/trafego.jpg"
import integracoesImg from "@/assets/images/carousel/integracoes-apps.jpg"
import websitesImg from "@/assets/images/carousel/websites.jpg"
import automacoesImg from "@/assets/images/carousel/automacoes.jpg"
import dashImg from "@/assets/images/carousel/dash.jpg"
import designImg from "@/assets/images/carousel/design.jpg"
import instagramImg from "@/assets/images/carousel/instagram.jpg"
import seoImg from "@/assets/images/carousel/seo.jpg"

const SERVICES = [
    {
        title: "IA para Atendimento",
        src: iaImg,
    },
    {
        title: "Tráfego Pago e Orgânico",
        src: trafegoImg,
    },
    {
        title: "Integrações de Aplicativos",
        src: integracoesImg,
    },
    {
        title: "Websites e Landing Pages",
        src: websitesImg,
    },
    {
        title: "Automação de Processos",
        src: automacoesImg,
    },
    {
        title: "Dashboards Personalizados",
        src: dashImg,
    },
    {
        title: "Design de Criativos",
        src: designImg,
    },
    {
        title: "Estruturação de Instagram",
        src: instagramImg,
    },
    {
        title: "SEO e Google Meu Negócio",
        src: seoImg,
    },
]

export function Services() {
    const headlineRef = React.useRef(null)
    const isHeadlineVisible = useInView(headlineRef, {
        once: true,
        amount: 0.2 // Dispara assim que o título começar a entrar
    })

    return (
        <SectionWrapper id="services" className="bg-intelli-green py-16 overflow-hidden">
            <div className="space-y-10">

                {/* Headline */}
                <div className="container mx-auto px-4 md:px-6">
                    <h2
                        ref={headlineRef}
                        className="text-3xl md:text-5xl font-bold text-intelli-blue max-w-2xl mb-12"
                    >
                        Na prática, isso significa:
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative w-full">
                    <AppleCardsCarousel items={SERVICES} active={isHeadlineVisible} />
                </div>

            </div>
        </SectionWrapper>
    )
}
