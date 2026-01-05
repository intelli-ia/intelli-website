import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"

export function CTA() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "bate-papo-intelli" })
            cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#0A0E27" } }, "hideEventTypeDetails": false, "layout": "month_view", "hideBranding": true } as any)
        })();
    }, [])

    return (
        <SectionWrapper id="contact" className="bg-intelli-offwhite py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">

                {/* Stage 1: Identification */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-intelli-blue leading-tight max-w-3xl mx-auto">
                        Se você leu até aqui e ficou pensando <br />
                        <span className="text-intelli-green bg-intelli-blue px-2 py-1 rounded inline-block mt-4 leading-[1.2]">
                            "Caramba, tem muita coisa que eu poderia estar fazendo melhor..."
                        </span>
                    </h2>

                    <p className="text-xl md:text-2xl text-intelli-blue/90 font-medium max-w-2xl mx-auto">
                        Quero te oferecer essa oportunidade de conversar diretamente conosco por 30 minutinhos sem custo, sem compromisso de fechar nada, <span className="font-bold text-intelli-blue">sem pegadinha de marketing.</span>
                    </p>
                </div>

                {/* Stage 3: The Narrative */}
                <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-intelli-blue/80 leading-relaxed">
                    <p>
                        É um papo tranquilo mesmo. Você conta o que acha que precisa melhorar, a gente compartilha o que já fizemos
                        funcionar em <span className="font-bold text-intelli-blue">mais de 100 negócios</span> diferentes e dessa conversa<span className="font-bold text-intelli-blue"> você recebe um material em PDF</span> com as ideias organizadas.<br /><br />
                        É seu. Pode aplicar sozinho, pode contratar quem você quiser, ou simplesmente guardar pra quando fizer sentido.
                    </p>

                    <p>
                        Nosso propósito é esse: ajudar empreendedores a enxergarem melhor
                        seus próprios negócios. A gente fica genuinamente feliz vendo alguém
                        sair daqui com mais clareza do que antes.
                    </p>
                </div>

                {/* Stage 5: Final Call to Action */}
                <div className="space-y-10">
                    <p className="text-2xl md:text-3xl font-bold text-intelli-blue">
                        Se isso faz sentido pra você, não deixe a graça passar: <br className="hidden md:block" />
                        <span className="font-bold bg-intelli-blue px-2 py-1 rounded text-intelli-green !leading-[2.0]">Escolha um horário aí embaixo pra gente conversar</span>
                    </p>

                    {/* Cal.com Embed Container */}
                    <div className="w-full bg-white rounded-3xl overflow-hidden shadow-sm">
                        <Cal
                            namespace="bate-papo-intelli"
                            calLink="intelli-qjajuc/bate-papo-intelli"
                            style={{ width: "100%", height: "100%", minHeight: "650px" }}
                            config={{ "layout": "month_view", "theme": "light" }}
                        />
                    </div>


                </div>

            </div>
        </SectionWrapper >
    )
}
