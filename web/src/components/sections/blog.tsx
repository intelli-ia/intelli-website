import { SectionWrapper } from "@/components/ui/section-wrapper"
import { Button } from "@/components/ui/button"
import blogImage from "@/assets/images/blog-placeholder.png"

const ARTICLES = [
    {
        category: "MARKETING",
        title: "Como aumentar a taxa de conversão do seu site em 3 passos",
        excerpt: "Dicas práticas de UX e copywriting para transformar visitantes em leads qualificados sem aumentar o investimento em ads.",
        date: "28 Dez 2024",
        image: blogImage
    },
    {
        category: "TECNOLOGIA",
        title: "Por que automações de WhatsApp vendem mais que humanos",
        excerpt: "Entenda como a IA pode qualificar leads 24/7 e deixar seu time comercial focado apenas no fechamento.",
        date: "20 Dez 2024",
        image: blogImage
    },
    {
        category: "GESTÃO",
        title: "O fim do 'Achismo': Tomando decisões baseadas em dados",
        excerpt: "Como dashboards simples podem salvar sua operação do caos e mostrar exatamente onde está o lucro.",
        date: "15 Dez 2024",
        image: blogImage
    }
]

export function Blog() {
    return (
        <SectionWrapper id="blog" className="bg-intelli-blue py-24">
            <div className="space-y-16">

                {/* Header */}
                <div className="container mx-auto px-4 md:px-6 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Conteúdos sobre marketing, tecnologia e automação
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                        Insights práticos para profissionalizar sua operação e escalar seu negócio.
                    </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto px-4 md:px-6">
                    {ARTICLES.map((article, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-intelli-green text-xs font-bold tracking-wider">{article.category}</span>
                                    <span className="text-gray-500 text-xs">{article.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-intelli-green transition-colors">
                                    {article.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <Button className="bg-intelli-green text-intelli-blue hover:bg-white hover:text-intelli-blue font-semibold px-8 py-6 rounded-full text-lg">
                        Ver todos os artigos
                    </Button>
                </div>

            </div>
        </SectionWrapper>
    )
}
