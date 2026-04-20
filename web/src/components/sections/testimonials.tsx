import { Marquee } from "@/components/ui/marquee"

const testimonials = [
    {
        name: "Patrícia Souza",
        content: "Já gosto de vc 🚀 Prático e direto. Impressionada! Vc tem liderança na veia! E olhe q vc tá falando com uma governante, então tenho o olhar crítico kkkk Parabéns, sem arrodeios. Líder nato 🚀 Guilherme querido, que post maravilhoso, ameii, aprovado 🩷🩷🩷",
        avatar: "https://i.pravatar.cc/150?u=patricia"
    },
    {
        name: "Vanessa Lessa",
        role: "Two do Design",
        content: "Vc não é gente, é anjo. Não ta bom não, tá perfeito. Não sei como vamos fazer... mas eu gostei demaissssss.",
        avatar: "https://i.pravatar.cc/150?u=vanessa"
    },
    {
        name: "Dr. Ivo Alves",
        role: "Clínica Medicamp",
        content: "A IA realmente ta cada vez melhor. Faz toda diferença nos atendimentos via ZAP. Gostei das cores agora do site... mto bom. E olha, já chegaram pacientes hj que procuraram pelo google. Parabens a vcs.",
        avatar: "https://i.pravatar.cc/150?u=ivo"
    },
    {
        name: "Rose Jesus",
        role: "Belle Santé",
        content: "Tivemos uma experiência péssima com uma IA anterior. Vocês entraram para resolver e dentro de dias mudaram o jogo. Hoje os clientes nem sabem se estão falando com um humano ou com a IA. Perguntei para a minha equipe como estava o atendimento agora e a resposta foi: 'está incrível'.",
        avatar: "https://i.pravatar.cc/150?u=rose"
    },
    {
        name: "Aline Mendonça",
        role: "Active Pilates",
        content: "Rapaz, sei nem o que dizer. Isso ficou incrível.",
        avatar: "https://i.pravatar.cc/150?u=aline"
    },
    {
        name: "Dra. Juliana Karaoglan",
        content: "Gostei muito! Tom divertido e informativo.",
        avatar: "https://i.pravatar.cc/150?u=juliana"
    },
    {
        name: "Dra. Rayanna Bahia",
        content: "Acho que tá ótimo o atendimento de Maria. As respostas dela estão bem conectadas.",
        avatar: "https://i.pravatar.cc/150?u=rayanna"
    },
    {
        name: "Dr. Ian Damas",
        content: "Melhorou muito. Estão chegando pacientes mais próximos da minha área. Minha impressão é que melhorou muito a interação...",
        avatar: "https://i.pravatar.cc/150?u=ian"
    }
]

export function Testimonials() {
    return (
        <section className="bg-[#faf5ed] py-32 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="font-garamond font-semibold text-4xl md:text-5xl lg:text-7xl text-[#0A0E27] mb-6">
                    Quem já{" "}
                    <span className="relative inline-block">
                        escalou
                        <svg
                            className="absolute -bottom-4 -right-3 w-[105%] h-6 text-[#32a852]"
                            viewBox="0 0 110 20"
                            preserveAspectRatio="none"
                        >
                            {/* Main Wave */}
                            <path
                                d="M2 17 C 20 20, 40 19, 60 14 C 80 9, 95 12, 108 5"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {/* Arrow Head - pointing up-right */}
                            <path
                                d="M100 15 L 109 5 L 101 2"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>{" "}
                    com a gente
                </h2>
            </div>

            <div className="relative">
                <Marquee className="[--duration:120s] [--gap:3px] items-end">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#0A0E27] border border-white/5 p-8 md:p-10 flex flex-col items-center text-center rounded-[2.5rem] w-max max-w-[400px]"
                        >
                            <div className="mb-6">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-[#BFFF00]/20"
                                />
                            </div>
                            <p className="text-white text-base md:text-lg leading-relaxed font-light mb-6 italic">
                                "{t.content}"
                            </p>
                            <div>
                                <h4 className="text-white font-semibold text-sm md:text-base">{t.name}</h4>
                                {t.role && <p className="text-white/50 text-[12px] md:text-sm">{t.role}</p>}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
