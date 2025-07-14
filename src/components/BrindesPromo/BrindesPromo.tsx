import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BrindesPromo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PromotionEvent",
    name: "Brindes e Sorteios na Steam",
    description: "Participe dos nossos brindes exclusivos e sorteios de jogos na Steam e ganhe títulos incríveis.",
    url: window.location.origin + "/brindes",
  } as const;

  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>Brindes e Sorteios na Steam | Universo Pixels</title>
        <meta
          name="description"
          content="Participe dos nossos brindes e sorteios de jogos na Steam. Ganhe títulos incríveis!"
        />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <section
        className="bg-white rounded-2xl shadow mt-20 p-6 max-w-xl mx-auto text-center"
        aria-labelledby="brindes-heading"
        role="region"
      >
        <h2
          id="brindes-heading"
          className="text-2xl font-bold mb-4 text-blue-700"
        >
          Brindes e Sorteios na Steam
        </h2>
        <p className="mb-6 text-gray-600">
          Participe dos nossos brindes exclusivos e sorteios de jogos na Steam. Não perca a chance de ganhar títulos incríveis e incrementar sua biblioteca de jogos.
        </p>
        <Link to="/brindes" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded">
          Ver Sorteios e Brindes
        </Link>
      </section>
    </>
  );
}
