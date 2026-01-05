import { SectionWrapper } from "@/components/ui/section-wrapper"
import { DollarSign, Layers, MessageCircle } from "lucide-react"

const DIFFERENTIALS = [
    {
        icon: DollarSign,
        title: "Oferecemos um preço acessível",
        description: "Queremos democratizar o acesso a soluções profissionais de marketing e tecnologia. Seja você uma empresa pequena ou de médio porte, temos a solução para a sua operação."
    },
    {
        icon: Layers,
        title: "Unificamos tudo em um só lugar",
        description: "Não precisa contratar três fornecedores diferentes. Estratégia de marketing e desenvolvimento tecnológico integrados desde o primeiro dia."
    },
    {
        icon: MessageCircle,
        title: "Usamos comunicação corporativa",
        description: "Atendemos poucos projetos simultaneamente para garantir excelência na comunicação. Trabalhamos como seus parceiros, não como fornecedores terceirizados."
    }
]

export function Differentiators() {
    return (
        <SectionWrapper id="differentiators" className="bg-intelli-blue py-24 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-intelli-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-16 relative z-10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Somos diferentes porque:
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 md:px-6">
                    {DIFFERENTIALS.map((item, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Green Border Gradient Effect on Hover (Optional/Simpler implementation via border color change) */}
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-intelli-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-intelli-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-intelli-green/10 text-intelli-green group-hover:bg-intelli-green group-hover:text-intelli-blue transition-colors duration-300">
                                <item.icon size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}
