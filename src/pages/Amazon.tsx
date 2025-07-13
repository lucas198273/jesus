import { Helmet, HelmetProvider } from "react-helmet-async";
import AffiliateCardList from "../components/AffiliateCardList/AffiliateCardList";

export default function Amazon() {
  return (
    <HelmetProvider>
      <main className="min-h-screen bg-[#0F0F23]/95 pt-24 pb-12 px-4">
        <Helmet>
          <title>Ofertas de Produtos na Amazon | Apoie nosso site</title>
          <meta
            name="description"
            content="Descubra produtos em destaque na Amazon com nossos links de afiliado. Compre com segurança e apoie nosso projeto!"
          />
          <meta
            name="keywords"
            content="amazon, ofertas, afiliados, produtos, comprar, ps5, ps4"
          />
          <link rel="canonical" href="https://seusite.com.br/amazon" />
          <meta property="og:title" content="Ofertas da Amazon com link de afiliado" />
          <meta
            property="og:description"
            content="Aproveite as melhores promoções em produtos PS4 e PS5 na Amazon com nosso link especial!"
          />
          <meta
            property="og:image"
            content="https://seusite.com.br/imagens/capa-amazon.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://seusite.com.br/amazon" />
        </Helmet>

        <section className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">
            Produtos em Oferta na Amazon
          </h1>
          <p className="text-gray-300">
            Aproveite essas ofertas e apoie nosso trabalho comprando com nossos links de afiliado.
          </p>
        </section>

        <section className="max-w-6xl mx-auto">
          <AffiliateCardList />
        </section>
      </main>
    </HelmetProvider>
  );
}
