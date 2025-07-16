// src/pages/Amazon.tsx
import { Helmet, HelmetProvider } from "react-helmet-async";
import AffiliateCardList from "../components/AffiliateCardList/AffiliateCardList";
import { Link } from "react-router-dom";

export default function Amazon() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-[#F9F6F1] pt-28 pb-16 px-4">
        <Helmet>
          <title>Produtos Bíblicos na Amazon | Compre e Apoie Nosso Projeto</title>
          <meta
            name="description"
            content="Descubra nossa curadoria de Bíblias de Estudo, livros cristãos e materiais teológicos. Compre pela Amazon e fortaleça esse ministério com seu clique!"
          />
          <meta
            name="keywords"
            content="bíblia de estudo, livros cristãos, teologia, produtos bíblicos, amazon, afiliados, fé"
          />
          <link rel="canonical" href="https://seusite.com.br/amazon" />
          <meta property="og:title" content="Produtos Bíblicos na Amazon" />
          <meta
            property="og:description"
            content="Encontre livros e Bíblias que edificam sua fé. Nossa seleção cristã está disponível na Amazon. Apoie o projeto ao comprar!"
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
            livros cristãos e outros recursos para seu crescimento espiritual.
            Compre pela Amazon e nos ajude com seu clique.
          </p>
        </section>

        {/* Lista de Produtos */}
        <section className="max-w-7xl mx-auto px-2 sm:px-4">
          <AffiliateCardList />
        </section>

        {/* Chamada final com CTA */}
        <section className="mt-16 text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#2C2C2C] mb-4">
            Encontre a mudança que você busca
          </h2>
          <p className="text-lg text-[#4C4C4C] mb-6 max-w-xl mx-auto">
            Aprofunde-se no conhecimento da Palavra. Veja nossa seleção completa de livros,
            estudos e guias espirituais que podem transformar sua jornada.
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
          >
            Ver todos os livros
          </Link>
        </section>
      </main>
    </HelmetProvider>
  );
}
