import { Marquee } from "@/components/ui/marquee"

const testimonials = [
    {
        name: "Patrícia Souza",
        content: "Já gosto de vc 🚀 Prático e direto. Impressionada! Vc tem liderança na veia! E olhe q vc tá falando com uma governante, então tenho o olhar crítico kkkk Parabéns, sem arrodeios. Líder nato 🚀 Guilherme querido, que post maravilhoso, ameii, aprovado 🩷🩷🩷",
        avatar: "/testemonials/img-1.jpg"
    },
    {
        name: "Vanessa Lessa",
        role: "Two do Design",
        content: "Vc não é gente, é anjo. Não ta bom não, tá perfeito. Não sei como vamos fazer... mas eu gostei demaissssss.",
        avatar: "/testemonials/img-2.jpg"
    },
    {
        name: "Dr. Ivo Alves",
        role: "Clínica Medicamp",
        content: "A IA realmente ta cada vez melhor. Faz toda diferença nos atendimentos via ZAP. Gostei das cores agora do site... mto bom. E olha, já chegaram pacientes hj que procuraram pelo google. Parabens a vcs.",
        avatar: "/testemonials/img-3.jpg"
    },
    {
        name: "Rose Jesus",
        role: "Belle Santé",
        content: "Tivemos uma experiência péssima com uma IA anterior. Vocês entraram para resolver e dentro de dias mudaram o jogo. Hoje os clientes nem sabem se estão falando com um humano ou com a IA. Perguntei para a minha equipe como estava o atendimento agora e a resposta foi: 'está incrível'.",
        avatar: "/testemonials/img-4.jpg"
    },
    {
        name: "Aline Mendonça",
        role: "Active Pilates",
        content: "Rapaz, sei nem o que dizer. Isso ficou incrível.",
        avatar: "/testemonials/img-5.jpg"
    },
    {
        name: "Dra. Juliana Karaoglan",
        content: "Gostei muito! Tom divertido e informativo.",
        avatar: "/testemonials/img-6.jpg"
    },
    {
        name: "Dra. Rayanna Bahia",
        content: "Acho que tá ótimo o atendimento de Maria. As respostas dela estão bem conectadas.",
        avatar: "/testemonials/img-7.jpg"
    },
    {
        name: "Dr. Ian Damas",
        content: "Melhorou muito. Estão chegando pacientes mais próximos da minha área. Minha impressão é que melhorou muito a interação...",
        avatar: "/testemonials/img-8.jpg"
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
                    <span className="hidden md:inline">com a gente</span>
                </h2>
            </div>

            <div className="relative">
                <Marquee
                    className="[--duration:60s] md:[--duration:60s] [--gap:3px]"
                    childrenAlignment="end"
                >
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
                            <p className="text-white/90 text-base md:text-lg leading-relaxed font-thin tracking-wide antialiased mb-6">
                                {t.content}
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
