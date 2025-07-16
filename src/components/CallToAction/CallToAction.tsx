// src/components/CallToAction.tsx
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  const title = "Transforme sua vida espiritual com bons livros";
  const description =
    "Descubra livros teológicos que ajudam a aprofundar sua fé e compreensão da Palavra. Encontre agora os materiais certos para sua jornada espiritual.";
  const imageUrl =
    "https://m.media-amazon.com/images/I/71HRyzK0TPL._AC_SY679_.jpg"; // imagem simbólica
  const pageUrl = "https://seusite.com/produtos"; // substitua pelo seu domínio real

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={pageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />
        </Helmet>

        <section className="mt-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200 rounded-lg p-8 text-center shadow-md">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Encontre a mudança agora
          </h2>
          <p className="text-blue-700 mb-6 max-w-xl mx-auto text-lg leading-relaxed">
            Aprofunde sua jornada espiritual com materiais cuidadosamente
            escolhidos. Encontre livros e recursos que tocam o coração e
            alimentam a alma.
          </p>
          <Link
            to="/produtos"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
          >
            Ver livros e materiais
          </Link>
        </section>
      </>
    </HelmetProvider>
  );
};

export default CallToAction;
