import { SectionWrapper } from "@/components/ui/section-wrapper"

export function IntelliBrand() {
    return (
        <SectionWrapper className="bg-[#faf5ed] py-5 md:py-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 flex justify-center items-center">
                <h2 className="text-[25vw] md:text-[22vw] font-bold text-intelli-blue leading-none select-none flex items-baseline">
                    intelli<span className="text-intelli-green text-[0.4em]">.</span>
                    <span className="font-figtree font-semibold text-[0.4em] ml-[0.05em]">ai</span>
                </h2>
            </div>
        </SectionWrapper>
    )
}
