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
    title: "Bíblia de Estudo Plenitude - Capa Luxo Marrom",
    asin: "6586996015",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/51vj9DfUljL._SX342_SY445_.jpg",
    customText: "Estudo profundo e edificante com comentários e recursos espirituais para o leitor cristão."
  },
  {
    title: "Bíblia dos Reformadores - Capa Caramelo",
    asin: "6586996937",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/61r0NumUDwL._SY385_.jpg",
    customText: "Inspirada na tradição reformada, ideal para aprofundar o conhecimento teológico."
  },
  {
    title: "Bíblia de Aplicação Pessoal para Meninos - Média",
    asin: "B0DCHDCWWY",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/41AqZIk5VOL._SX342_SY445_.jpg",
    customText: "Voltada para o público infantil, com aplicação prática dos ensinamentos bíblicos."
  },
  {
    title: "Bíblia Sagrada - Leão de Judá - NVI",
    asin: "6586078636",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/41fhEZe1B5L._SX342_SY445_.jpg",
    customText: "Design imponente com o símbolo do Leão de Judá. Ideal para presentes e estudo."
  },
  {
    title: "Bíblia Sagrada Gigante - Dourada - Linguagem de Hoje",
    asin: "B0DB2JSWCJ",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/31gyNssne5L._SY445_SX342_.jpg",
    customText: "Letra gigante e fácil leitura com acabamento dourado. Uma excelente escolha devocional."
  },
  {
    title: "Orações Quebram Maldições - John Eckhardt",
    asin: "8561411686",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/51pv774cuDL._SY445_SX342_.jpg",
    customText: "Um guia de intercessão poderosa para romper maldições e restaurar vidas espirituais."
  }


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
