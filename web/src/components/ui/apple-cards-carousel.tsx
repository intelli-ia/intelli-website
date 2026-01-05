import * as React from "react"
import { cn } from "@/lib/utils"

interface Card {
    src: string
    title: string
    category?: string
    content?: React.ReactNode
}

interface CarouselProps {
    items: Card[]
    active?: boolean
    reverse?: boolean
}

export function AppleCardsCarousel({ items, active, reverse }: CarouselProps) {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)
    const [startX, setStartX] = React.useState(0)
    const [scrollLeft, setScrollLeft] = React.useState(0)
    const [isHovered, setIsHovered] = React.useState(false)

    // Clonar itens para efeito de loop infinito suave
    const carouselItems = [...items, ...items, ...items, ...items]

    React.useEffect(() => {
        const container = containerRef.current
        if (!container || !active) return

        let animationFrameId: number

        const scroll = () => {
            if (!isDragging) {
                // Velocidade do auto-scroll
                const speed = 1.8

                if (reverse) {
                    container.scrollLeft -= speed
                    // Loop lógica (se chegar no inicio, vai pro meio/fim)
                    if (container.scrollLeft <= 0) {
                        container.scrollLeft = container.scrollWidth / 2
                    }
                } else {
                    container.scrollLeft += speed
                    // Loop lógica (se chegar no fim, volta pro meio/inicio)
                    if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
                        container.scrollLeft = 0
                    }
                }
            }
            animationFrameId = requestAnimationFrame(scroll)
        }

        scroll()

        return () => cancelAnimationFrame(animationFrameId)
    }, [active, isDragging, isHovered, reverse])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0))
        setScrollLeft(containerRef.current?.scrollLeft || 0)
    }

    const handleMouseLeave = () => {
        setIsDragging(false)
        setIsHovered(false)
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - (containerRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 1 // Scroll-fast
        if (containerRef.current) {
            containerRef.current.scrollLeft = scrollLeft - walk
        }
    }

    return (
        <div
            className="relative w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={containerRef}
                className={cn(
                    "flex overflow-x-hidden cursor-grab active:cursor-grabbing pt-10 pb-10 select-none",
                    isDragging && "cursor-grabbing"
                )}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {carouselItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex-shrink-0 w-[200px] md:w-[250px] h-[320px] md:h-[380px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-[1.02] group mx-3 border border-white/5 bg-intelli-blue/20"
                    >
                        {/* Background Image */}
                        <img
                            src={item.src}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 brightness-[0.7] group-hover:brightness-[0.9] pointer-events-none"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-intelli-blue via-intelli-blue/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10 flex flex-col justify-end h-full pointer-events-none">
                            <h3 className="text-white text-xl md:text-2xl font-bold leading-[1.1] transform-gpu transition-transform duration-700 group-hover:-translate-y-2">
                                {item.title}
                            </h3>
                            <div className="w-0 group-hover:w-12 h-1 bg-intelli-green mt-3 transition-all duration-700 delay-100" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
