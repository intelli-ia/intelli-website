import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import problemImage1 from "@/assets/images/INTELLI-WEBSITE-PROBLEMS-01.jpg"
import problemImage2 from "@/assets/images/INTELLI-WEBSITE-PROBLEMS-02.jpg"
import problemImage3 from "@/assets/images/INTELLI-WEBSITE-PROBLEMS-03.jpg"
import problemImage4 from "@/assets/images/INTELLI-WEBSITE-PROBLEMS-04.jpg"

export function Problem() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const textSegments = [
        {
            text: "Enquanto você lê isso, possivelmente um cliente em potencial está tentando falar com sua empresa.",
            highlight: true,
            image: problemImage1
        },
        {
            text: "Talvez ele espere 2 horas por uma resposta. Ou não encontre informações claras. Ou desista porque agendar é difícil.",
            highlight: true,
            image: problemImage2
        },
        {
            text: "Atendimento manual, marketing sem estratégia, automações inexistentes.",
            highlight: false,
            image: problemImage3
        },
        {
            text: "Esses problemas são mais caros do que parecem. Mas isso não precisa continuar assim.",
            highlight: true,
            image: problemImage4
        }
    ]

    return (
        <div id="problem" ref={containerRef} className="relative h-[300vh] bg-[#F8F9FA]">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Images */}
                {textSegments.map((segment, index) => {
                    return (
                        <BackgroundImage
                            key={`bg-${index}`}
                            image={segment.image}
                            progress={scrollYProgress}
                            index={index}
                            total={textSegments.length}
                        />
                    )
                })}

                {/* Text Content */}
                <div className="container mx-auto px-4 md:px-6 max-w-5xl h-full flex items-center justify-center relative z-10">
                    {textSegments.map((segment, index) => {
                        return (
                            <RevealSegment
                                key={index}
                                text={segment.text}
                                progress={scrollYProgress}
                                index={index}
                                total={textSegments.length}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

function BackgroundImage({ image, progress, index, total }: { image: string, progress: any, index: number, total: number }) {
    // Robust Overlap Logic
    const transitionDuration = 0.10;
    const slotDuration = 1 / total;

    const fadeInStart = (index * slotDuration) - transitionDuration;
    const fadeInEnd = index * slotDuration;
    const fadeOutStart = ((index + 1) * slotDuration) - transitionDuration;
    const fadeOutEnd = (index + 1) * slotDuration;

    const ranges = index === 0
        ? [0, 0, fadeOutStart, fadeOutEnd]
        : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd];

    const finalRanges = index === total - 1
        ? [fadeInStart, fadeInEnd, 1, 1]
        : ranges;

    const opacityOutput = index === 0
        ? [0.4, 0.4, 0.4, 0]
        : [0, 0.4, 0.4, 0];

    const finalOpacityOutput = index === total - 1
        ? [0, 0.4, 0.4, 0.4]
        : opacityOutput;

    const opacity = useTransform(progress, finalRanges, finalOpacityOutput);
    // Para a última imagem, manter scale fixo em 1 para evitar alteração de proporção
    const scaleValues = index === total - 1 ? [1, 1, 1, 1] : [1, 1, 1, 1.05];
    const scale = useTransform(progress, finalRanges, scaleValues);

    return (
        <motion.div
            className="absolute inset-0 z-0"
            style={{
                opacity,
                scale
            }}
        >
            <img
                src={image}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover brightness-[1.15] contrast-[0.95] saturate-[0.9]"
            />
            {/* Overlay claro para suavizar a transição e aproximar do off-white */}
            <div className="absolute inset-0 bg-white/20"></div>
        </motion.div>
    )
}

function RevealSegment({ text, progress, index, total }: { text: string, progress: any, index: number, total: number }) {
    // Robust Overlap Logic
    // We divide the scroll into "slots".
    // Transitions happen BETWEEN slots.

    // Config
    const transitionDuration = 0.10; // 10% of scroll is transition
    const slotDuration = 1 / total;  // each item gets a share

    // Calculate precise points
    // Center of this item's visibility is roughly: index * slotDuration
    // We want Item N to fade out EXACTLY as Item N+1 fades in.

    // Timeline for Item 'i':
    // Start Fade In: (i * slotDuration) - transitionDuration
    // End Fade In:   (i * slotDuration)
    // Start Fade Out: ((i+1) * slotDuration) - transitionDuration
    // End Fade Out:   ((i+1) * slotDuration)

    // This creates a perfect chain:
    // Item 0 FadeOut starts at (1*slot) - 0.1
    // Item 1 FadeIn  starts at (1*slot) - 0.1

    const fadeInStart = (index * slotDuration) - transitionDuration;
    const fadeInEnd = index * slotDuration;
    const fadeOutStart = ((index + 1) * slotDuration) - transitionDuration;
    const fadeOutEnd = (index + 1) * slotDuration;

    // Special handling for first item (Visible at start)
    const ranges = index === 0
        ? [0, 0, fadeOutStart, fadeOutEnd] // Opacity 1 from 0 to fadeOutStart
        : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd];

    // Special handling for last item (Stays visible at end)
    const finalRanges = index === total - 1
        ? [fadeInStart, fadeInEnd, 1, 1]
        : ranges;

    // Output opacity values
    const opacityOutput = index === 0
        ? [1, 1, 1, 0]
        : [0, 1, 1, 0];

    const finalOpacityOutput = index === total - 1
        ? [0, 1, 1, 1]
        : opacityOutput;

    // Adjust effect values for the last item - Remove extreme transforms
    const scaleOutput = index === total - 1 ? [0.9, 1, 1, 1] : [0.9, 1, 1, 1.1];
    const blurOutput = index === total - 1 ? ["blur(10px)", "blur(0px)", "blur(0px)", "blur(0px)"] : ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"];
    const yOutput = index === total - 1 ? [50, 0, 0, 0] : [50, 0, 0, -50];

    const opacity = useTransform(progress, finalRanges, finalOpacityOutput);
    const scale = useTransform(progress, finalRanges, scaleOutput);
    const blur = useTransform(progress, finalRanges, blurOutput);
    const y = useTransform(progress, finalRanges, yOutput);

    // Visibility wrapper to ensure clicks pass through when invisible
    const display = useTransform(progress, (p: number) => {
        // Allow a bit of buffer
        return (p >= finalRanges[0] - 0.05 && p <= finalRanges[3] + 0.05) ? "flex" : "none";
    });

    return (
        <motion.div
            style={{
                opacity,
                scale,
                filter: blur,
                y,
                display
            }}
            className={cn(
                "absolute inset-0 flex items-center justify-center text-center px-4 md:px-20 will-change-transform",
                "z-10" // Unified z-index
            )}
        >
            <p className="text-3xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight text-intelli-blue">
                {text.split(" ").map((word, i) => {
                    const cleanWord = word.toLowerCase().replace(/[.,]/g, "");
                    // Identify keywords for highlighting
                    const isKeyword = ["tentando", "falar", "espere", "2", "horas", "não", "encontre", "desista", "caros", "estratégia", "manual", "inexistentes", "precisa"].includes(cleanWord) || word.toLowerCase().includes("intelli");
                    const isImportant = ["problemas", "comuns"].includes(cleanWord);

                    return (
                        <span key={i} className={cn(
                            "inline-block mr-2 md:mr-3 mb-2 transition-colors duration-300",
                            isKeyword ? "text-intelli-green bg-intelli-blue px-2 md:px-3 py-0.5 rounded-lg inline-block shadow-sm" : "",
                            isImportant && !isKeyword ? "text-intelli-blue font-bold" : ""
                        )}>
                            {word}
                        </span>
                    )
                })}
            </p>
        </motion.div>
    )
}
