import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

export function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-intelli-blue/60 hover:text-intelli-blue mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para o início
        </Link>
        <h1 className="text-4xl md:text-5xl font-garamond font-bold text-intelli-blue mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg text-intelli-blue/80 font-sans space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">1. Introdução</h2>
            <p>
              A Intelli valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você visita nosso site ou utiliza nossos serviços de consultoria.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">2. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece voluntariamente, como seu nome, e-mail e número de telefone através de nossos formulários de contato ou via WhatsApp. Também coletamos dados técnicos automaticamente, como endereço IP e cookies, para melhorar sua experiência em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">3. Uso das Informações</h2>
            <p>
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Entrar em contato para agendar consultorias;</li>
              <li>Personalizar sua experiência em nossa plataforma;</li>
              <li>Melhorar nossos serviços e comunicações;</li>
              <li>Cumprir obrigações legais.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">4. Proteção de Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda ou alteração. Seus dados são armazenados de forma segura e acessados apenas por pessoal autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">5. Compartilhamento com Terceiros</h2>
            <p>
              Não vendemos ou alugamos suas informações pessoais. Podemos compartilhar dados com parceiros de confiança que nos auxiliam na operação do site e na prestação de serviços, desde que esses concordem em manter a confidencialidade das informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">6. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através dos canais disponibilizados em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">7. Alterações nesta Política</h2>
            <p>
              Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças.
            </p>
          </section>

          <section className="pt-8 text-sm italic">
            <p>Última atualização: 16 de fevereiro de 2026</p>
          </section>
        </div>
      </motion.div>
    </div>
  )
}
