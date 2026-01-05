import { Marquee } from "@/components/ui/marquee"

export function HowItWorks() {
    return (
        <div id="how-it-works" className="bg-intelli-blue py-24 md:py-32 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-12">

                    {/* Block 1 */}
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Já vimos o que gera resultado real e o que é só
                        promessa vazia de quem vende ilusão.
                    </h2>

                    {/* Block 2 */}
                    <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
                        Aquele vídeo que você viu dizendo pra postar todo dia, aquele
                        curso de "fórmula secreta", aquele truque milagroso — <span className="bg-white text-intelli-blue px-2 py-0 rounded opacity-90">nada disso vai salvar sua empresa.</span>
                    </p>

                    {/* Block 3 - Highlight */}
                    <p className="text-2xl md:text-4xl text-intelli-green font-bold !leading-[1.6]">
                        O que funciona é mais direto:<br /> <span className="text-intelli-blue bg-intelli-green px-2 py-1 rounded">produto bom</span>, <span className="text-intelli-blue bg-intelli-green px-2 py-1 rounded">oferta clara</span>, <span className="text-intelli-blue bg-intelli-green px-2 py-1 rounded">funis
                            de</span> <span className="text-intelli-blue bg-intelli-green px-2 py-1 rounded">relacionamento</span> e <span className="text-intelli-blue bg-intelli-green px-2 py-1 rounded">atendimento que resolve.</span><br />
                        <p className="text-2xl md:text-4xl text-intelli-green font-bold !leading-[1.0] py-8">O essencial bem feito e otimizado que POUCAS empresas realmente possuem.</p>
                    </p>

                    {/* Block 4 */}
                    <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl mx-auto">
                        Se você acredita que estética substitui estratégia, existem
                        centenas de agências que vão adorar seu dinheiro.
                    </p>

                    {/* Block 5 - Conclusion */}
                    <p className="text-2xl md:text-3xl text-white font-semibold pt-8">
                        Mas se você quer crescimento de verdade, com processos definidos
                        e tecnologia integrada, temos o mesmo propósito:
                    </p>

                </div>
            </div>

            {/* Infinite Marquee - RESULTADOS */}
            <div className="relative w-full overflow-hidden mt-16 md:mt-24 pointer-events-none select-none pb-12">
                {/* Gradient Masks */}
                <div className="absolute inset-0 bg-gradient-to-r from-intelli-blue via-transparent to-intelli-blue z-20 w-full" />

                <Marquee
                    className="overflow-hidden [--duration:10s] [--gap:4rem]"
                    repeat={4}
                >
                    <span className="text-[12rem] md:text-[20rem] font-black text-intelli-green leading-none tracking-tighter select-none block mx-4">
                        RESULTADOS
                    </span>
                </Marquee>
            </div>
        </div >
    )
}
