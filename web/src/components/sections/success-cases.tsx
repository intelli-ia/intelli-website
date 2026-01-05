import { useState, useEffect } from "react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Building2, ArrowUpRight, X, ArrowLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const CASES = [
    {
        id: 1,
        company: "Queiroz Pimentel",
        solution: "WebApp Integrado ao ERP Omie + IA de Gestão de Obras",
        result: "Eliminação de processos manuais e visibilidade diária da operação",
        summary: "Desenvolvemos um sistema que eliminou retrabalho operacional e trouxe controle em tempo real para a gestão de obras através de automação e IA.",
        details: "Criamos automação para folha de pagamento (upload de PDF e lançamento automático), liberação e gestão de notas fiscais, e uma IA que coleta reports diários em áudio dos engenheiros, gerando relatórios técnicos oficiais automaticamente para a presidência. Tecnologia transformando processos manuais em fluxos inteligentes.",
        images: [
            { className: "col-span-2 row-span-2", color: "bg-blue-50" },
            { className: "col-span-1 row-span-1", color: "bg-green-50" },
            { className: "col-span-1 row-span-1", color: "bg-gray-50" },
        ]
    },
    {
        id: 2,
        company: "Colégio Aurora",
        solution: "Sistema de Captação com IA + Atendimento 24h Automatizado",
        result: "Mais de 650 contatos gerados em 90 dias e aproximadamente R$ 1,6 milhão em LTV de novos alunos",
        summary: "Implementamos um ecossistema completo de captação que atende, qualifica e agenda visitas 24/7 sem intervenção humana.",
        details: "Desenvolvemos uma IA que conduz toda a jornada do lead: qualificação, nutrição e agendamento de visitas ao colégio. O sistema opera continuamente, convertendo interesse em matrículas efetivas. Marketing e tecnologia integrados gerando resultado real e mensurável.",
        images: [
            { className: "col-span-2 row-span-2", color: "bg-purple-50" },
            { className: "col-span-1 row-span-1", color: "bg-yellow-50" },
            { className: "col-span-1 row-span-1", color: "bg-pink-50" },
        ]
    },
    {
        id: 3,
        company: "CORC",
        solution: "Infraestrutura Digital Completa para Área de Membros + IA de Recuperação",
        result: "R$ 100 mil em faturamento nas primeiras 24h de lançamento e mais de 200 alunos na plataforma",
        summary: "Estruturamos do zero a operação digital de um produto de membros: página de vendas, plataforma, automações e recuperação ativa de vendas.",
        details: "Desenvolvemos página de vendas, configuração completa da área de membros, conteúdos para redes sociais, sistema de boas-vindas automatizado e uma IA de recuperação que aborda ativamente carrinhos abandonados. Infraestrutura profissional que permitiu lançamento veloz e conversão maximizada.",
        images: [
            { className: "col-span-2 row-span-2", color: "bg-orange-50" },
            { className: "col-span-1 row-span-1", color: "bg-teal-50" },
            { className: "col-span-1 row-span-1", color: "bg-indigo-50" },
        ]
    },
]

export function SuccessCases() {
    const [selectedCase, setSelectedCase] = useState<typeof CASES[0] | null>(null)

    // Bloquear scroll quando o modal estiver aberto
    useEffect(() => {
        if (selectedCase) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => { document.body.style.overflow = 'unset' }
    }, [selectedCase])

    return (
        <SectionWrapper id="cases" className="bg-intelli-offwhite py-24">
            <div className="space-y-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-intelli-blue">
                        Cases de Sucesso
                    </h2>
                    <p className="text-intelli-blue/60 mt-4 max-w-2xl mx-auto">
                        Clique nos cards para ver os detalhes de como transformamos essas operações.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 md:px-6">
                    {CASES.map((item) => (
                        <motion.div
                            key={item.id}
                            layoutId={`case-${item.id}`}
                            onClick={() => setSelectedCase(item)}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-intelli-green transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-intelli-offwhite rounded-xl text-intelli-blue/80">
                                    <Building2 size={24} />
                                </div>
                                <ArrowUpRight className="text-gray-300 group-hover:text-intelli-green transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-intelli-blue mb-2">
                                {item.company}
                            </h3>

                            <p className="text-intelli-blue/70 font-medium mb-4">
                                {item.solution}
                            </p>

                            <div className="pt-4 border-t border-gray-100">
                                <p className="text-sm text-green-600 font-semibold bg-green-50 inline-block px-3 py-1 rounded-full">
                                    {item.result}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Case Details */}
            <AnimatePresence>
                {selectedCase && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCase(null)}
                            className="fixed inset-0 bg-intelli-blue/40 backdrop-blur-md z-[100]"
                        />

                        {/* Content Container */}
                        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                            <motion.div
                                layoutId={`case-${selectedCase.id}`}
                                className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col relative"
                            >
                                <button
                                    onClick={() => setSelectedCase(null)}
                                    className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full text-intelli-blue hover:bg-intelli-green transition-colors z-50"
                                >
                                    <X size={20} />
                                </button>

                                <div className="flex-1 overflow-y-auto">
                                    <div className="flex flex-col md:flex-row h-full min-h-[500px]">

                                        {/* Left Side: Summary */}
                                        <div className="flex-1 p-8 md:p-12 space-y-8 flex flex-col justify-center">
                                            <div className="space-y-4">
                                                <div className="inline-flex items-center gap-2 text-intelli-green bg-intelli-blue px-3 py-1 rounded-full text-sm font-bold">
                                                    <Building2 size={16} />
                                                    {selectedCase.company}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-black text-intelli-blue leading-tight">
                                                    {selectedCase.solution}
                                                </h3>
                                            </div>

                                            <div className="space-y-6 text-intelli-blue/80 leading-relaxed text-lg">
                                                <p className="font-semibold text-intelli-blue">
                                                    {selectedCase.summary}
                                                </p>
                                                <p>
                                                    {selectedCase.details}
                                                </p>
                                            </div>

                                            <div className="pt-6">
                                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                                    <p className="text-sm text-green-600 font-bold uppercase tracking-wider mb-2">Resultado Final</p>
                                                    <p className="text-2xl font-bold text-green-700">{selectedCase.result}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: Bento Grid Elements */}
                                        <div className="flex-1 bg-intelli-offwhite p-8 md:p-12">
                                            <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full aspect-square md:aspect-auto min-h-[400px]">
                                                {selectedCase.images.map((img, i) => (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            "rounded-2xl shadow-sm border border-white flex items-center justify-center p-4",
                                                            img.color,
                                                            img.className
                                                        )}
                                                    >
                                                        <div className="bg-white/50 w-full h-full rounded-xl flex items-center justify-center border border-white/80">
                                                            <span className="text-gray-300 font-bold text-sm">Imagem {i + 1}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Button */}
                                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-center">
                                    <button
                                        onClick={() => setSelectedCase(null)}
                                        className="flex items-center gap-2 px-8 py-3 bg-intelli-blue text-white font-bold rounded-full hover:bg-intelli-green hover:text-intelli-blue transition-all duration-300 group"
                                    >
                                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                        Voltar para Cases
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </SectionWrapper>
    )
}

