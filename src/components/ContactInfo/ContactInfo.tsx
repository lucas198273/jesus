import { Helmet } from "react-helmet-async";

export default function ContactInfo() {
  return (
    <div>
      <Helmet>
        <title>Contato & Parcerias | Universo Pixels</title>
        <meta
          name="description"
          content="Entre em contato com o Universo Pixels para parcerias, colaborações ou divulgação de jogos, produtos e serviços. Estamos abertos a projetos que agreguem valor à comunidade gamer!"
        />
        <meta name="keywords" content="contato, parcerias, Universo Pixels, jogos, colaborações, divulgação, comunidade gamer" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contato & Parcerias | Universo Pixels" />
        <meta
          property="og:description"
          content="Entre em contato com o Universo Pixels para parcerias, colaborações ou divulgação de jogos, produtos e serviços. Junte-se à nossa comunidade gamer!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="Universo Pixels" />
      </Helmet>

      <section className="bg-[#0f172a] text-white rounded-2xl p-6 md:p-8 shadow-lg mb-20 border border-blue-800/40 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#38bdf8] text-center md:text-left">
          Contato & Parcerias
        </h2>

        <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
          Se você representa uma empresa, estúdio, canal de conteúdo ou projeto independente, estamos abertos a colaborações e parcerias que agreguem valor à comunidade gamer.
        </p>

        <p className="text-base md:text-lg mb-5 text-white/90 leading-relaxed">
          Aqui no blog, falamos sobre tudo que move o mundo dos jogos — de análises e notícias até curiosidades e bastidores do desenvolvimento. Quer divulgar seu jogo, produto ou serviço? Entre em contato conosco!
        </p>

        <p className="text-base md:text-lg text-[#facc15] font-semibold leading-relaxed">
          📩 Todas as propostas devem ser enviadas via e-mail através do formulário nesta página.
        </p>
      </section>
    </div>
  );
}