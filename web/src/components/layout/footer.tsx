import { Link } from "react-router-dom"

export function Footer() {
    const whatsappNumber = "71983477264";
    const whatsappMessage = encodeURIComponent("Vi o site e gostaria de entender melhor o processo");
    const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <footer className="bg-[#faf5ed] text-intelli-blue py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Contact (WhatsApp) */}
                    <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4">WhatsApp</span>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-xl md:text-1xl font-bold text-intelli-blue px-4 py-1 rounded-full overflow-hidden group transition-colors duration-300"
                        >
                            <span className="relative z-10 group-hover:text-intelli-green transition-colors duration-300">
                                (71) 98347-7264
                            </span>
                            <span className="absolute inset-0 bg-intelli-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full"></span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2026 | Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link to="/politica-de-privacidade" className="hover:text-intelli-blue transition-colors">Política de Privacidade</Link>
                        <Link to="/termos-de-uso" className="hover:text-intelli-blue transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

