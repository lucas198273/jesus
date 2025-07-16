// src/data/affiliateProducts.ts

export interface Product {
  title: string;
  asin: string;
  affiliateTag: string;
  imageUrl: string;
  customText?: string;
}

// SEO: JSON-LD structured data para os produtos
export const affiliateProductsStructuredData = () => {
  const products = [...biblicalBooks, ...studyBibles];
  return {
    "@context": "https://schema.org/",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.title,
      image: product.imageUrl,
      sku: product.asin,
      url: `https://www.amazon.com.br/dp/${product.asin}/?tag=${product.affiliateTag}`,
      description: product.customText || product.title,
      offers: {
        "@type": "Offer",
        url: `https://www.amazon.com.br/dp/${product.asin}/?tag=${product.affiliateTag}`,
      },
    })),
  } as const;
};

// Bíblias de Estudo
export const studyBibles: Product[] = [
  {
    title: "Bíblia de Estudo NAA - Letra Grande - Luxo Marrom",
    asin: "6556551252",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71StJ5O+f3L._AC_SY679_.jpg",
    customText: "Uma das Bíblias mais completas para estudo bíblico, com linguagem atualizada.",
  },
  {
    title: "Bíblia de Estudo Pentecostal - Capa Preta",
    asin: "8577422092",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/81n0YPnNcvL._AC_SY679_.jpg",
    customText: "Recurso essencial para quem deseja aprofundar-se na teologia pentecostal.",
  },
  {
    title: "Bíblia de Estudo Aplicação Pessoal - NVT",
    asin: "8578609733",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/91OjrlcHkmL._AC_SY679_.jpg",
    customText: "Ajuda a aplicar os ensinamentos bíblicos no dia a dia do cristão.",
  },
];

// Livros Cristãos / Teológicos
export const biblicalBooks: Product[] = [
  {
    title: "Teologia Sistemática - Wayne Grudem",
    asin: "8527503279",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71HRyzK0TPL._AC_SY679_.jpg",
    customText: "Um guia completo e respeitado de teologia cristã.",
  },
  {
    title: "Manual Bíblico de Halley - Edição Atualizada",
    asin: "857325570X",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/81zh8W4SG4L._AC_SY679_.jpg",
    customText: "Panorama histórico, arqueológico e teológico da Bíblia.",
  },
  {
    title: "O Discípulo Radical - John Stott",
    asin: "8577792842",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71a6Yk6Ot+L._AC_SY679_.jpg",
    customText: "Um chamado à vida cristã profunda e comprometida.",
  },
];
