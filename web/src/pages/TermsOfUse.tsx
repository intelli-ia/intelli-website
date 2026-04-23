import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

export function TermsOfUse() {
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
          Termos de Uso
        </h1>

        <div className="prose prose-lg text-intelli-blue/80 font-sans space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Intelli, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">2. Serviços de Consultoria</h2>
            <p>
              A Intelli oferece serviços de consultoria especializada. As informações fornecidas neste site têm caráter informativo e não constituem uma garantia de resultados específicos, os quais dependem da implementação e do contexto de cada cliente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones e imagens, é de propriedade exclusiva da Intelli ou de seus licenciadores e está protegido pelas leis de direitos autorais brasileiras e internacionais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">4. Uso Permitido</h2>
            <p>
              Você recebe uma licença limitada e não exclusiva para acessar o conteúdo deste site para uso pessoal e informativo. É proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduzir, duplicar ou copiar o material da Intelli sem autorização prévia;</li>
              <li>Utilizar o site para fins ilegais ou não autorizados;</li>
              <li>Interferir na segurança ou no funcionamento normal do site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              A Intelli não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da incapacidade de usar nosso site ou serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">6. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites de terceiros. A Intelli não tem controle sobre o conteúdo ou as práticas de privacidade desses sites e não assume responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-intelli-blue mt-8 mb-4">7. Modificações dos Termos</h2>
            <p>
              A Intelli reserva-se o direito de alterar estes Termos de Uso a qualquer momento, sem aviso prévio. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
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
