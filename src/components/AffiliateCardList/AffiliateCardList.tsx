import { biblicalBooks, studyBibles, type Product } from "../../data/affiliateProducts";
import AffiliateCard from "../AffiliateCard/AffiliateCard";

function Section({ title, products }: { title: string; products: Product[] }) {
  if (products.length === 0) return null;

  const sectionId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className="mb-14" aria-labelledby={sectionId}>
      <h2
        id={sectionId}
        className="text-2xl sm:text-3xl font-bold text-black mb-6"
      >
        {title}
      </h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        role="list"
      >
        {products.map((product) => (
          <AffiliateCard key={product.asin} product={product} />
        ))}
      </div>
    </section>
  );
}

export default function AffiliateCardList() {
  return (
    <div
      className="space-y-20 px-4 sm:px-6 lg:px-8"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Lista de produtos em oferta da Amazon" />
    <Section title="Bíblias de Estudo Recomendadas" products={studyBibles} />
    <Section title="Livros Cristãos e Teológicos" products={biblicalBooks} />

    </div>
  );
}