export function Footer() {
    const whatsappNumber = "71993211234";
    const whatsappLink = `https://wa.me/55${whatsappNumber}`;

    return (
        <footer className="bg-intelli-offwhite text-intelli-blue py-12 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Contact (WhatsApp) */}
                    < div className="flex flex-col items-start md:items-start gap-2">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4">WhatsApp</span>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-xl md:text-1xl font-bold text-intelli-blue px-4 py-1 rounded-full overflow-hidden group transition-colors duration-300"
                        >
                            <span className="relative z-10 group-hover:text-intelli-green transition-colors duration-300">
                                (71) 99321-1234
                            </span>
                            <span className="absolute inset-0 bg-intelli-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left rounded-full"></span>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2026 | Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-intelli-blue transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-intelli-blue transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer >
    )
}
