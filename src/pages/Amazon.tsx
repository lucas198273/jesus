import { Helmet, HelmetProvider } from "react-helmet-async";
import AffiliateCardList from "../components/AffiliateCardList/AffiliateCardList";

export default function Amazon() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-[#F9F6F1] pt-28 pb-16 px-4">
        <Helmet>
          <title>Produtos Bíblicos na Amazon | Apoie Nosso Projeto</title>
          <meta
            name="description"
            content="Explore nossa seleção de produtos bíblicos como Bíblias de Estudo e livros teológicos. Compre pela Amazon e apoie nosso site com seu clique!"
          />
          <meta
            name="keywords"
            content="bíblia de estudo, livros cristãos, produtos bíblicos, teologia, amazon, afiliados"
          />
          <link rel="canonical" href="https://seusite.com.br/amazon" />
          <meta property="og:title" content="Produtos Bíblicos na Amazon" />
          <meta
            property="og:description"
            content="Seleção especial de Bíblias e livros cristãos disponíveis na Amazon. Fortaleça sua fé com conteúdo confiável."
          />
          <meta
            property="og:image"
            content="https://seusite.com.br/imagens/capa-amazon.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://seusite.com.br/amazon" />
        </Helmet>

        {/* Título e Introdução */}
        <section className="max-w-5xl mx-auto text-center mb-12 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#2C2C2C] mb-4">
            Produtos Bíblicos em Destaque
          </h1>
          <p className="text-lg sm:text-xl text-[#4C4C4C] max-w-2xl mx-auto">
            Selecione materiais que edifiquem sua fé! Aqui você encontra Bíblias de estudo,
            livros cristãos e outros recursos para seu crescimento espiritual. Compre pela Amazon
            e nos ajude com seu clique.
          </p>
        </section>

        {/* Lista de Produtos */}
        <section className="max-w-7xl mx-auto px-2 sm:px-4">
          <AffiliateCardList />
        </section>
      </main>
    </HelmetProvider>
  );
}
