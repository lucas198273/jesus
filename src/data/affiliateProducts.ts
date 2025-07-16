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

export const biblicalBooks: Product[] = [
  {
    title: "Teologia Sistemática - Wayne Grudem (Edição Revisada e Ampliada)",
    asin: "6559670163",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/51qVMmOMZfL._SY445_SX342_.jpg",
    customText: "Versão mais atualizada da obra clássica de teologia sistemática de Wayne Grudem.",
  },
  {
    title: "Manual Bíblico de Halley - Henry H. Halley",
    asin: "8573675691",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/41q7cjVl9bL._SY445_SX342_.jpg",
    customText: "Manual com panorama histórico e arqueológico da Bíblia, essencial para estudantes.",
  },
  {
    title: "O Discípulo Radical - John Stott",
    asin: "8577790444",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/61QLR55mJ0L._SY466_.jpg",
    customText: "Chamado à radicalidade na vivência do evangelho, por um dos maiores teólogos cristãos.",
  },
  {
    title: "A Cruz de Cristo - John Stott",
    asin: "8573671467",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/41JEI+teVxL._SX342_SY445_.jpg",
    customText: "Uma profunda análise do significado da cruz na fé cristã.",
  },
  {
    title: "A crucificação: entendendo a morte de Jesus Cristo",
    asin: "6556895563",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/51v7zYbvJcL._SY445_SX342_.jpg",
    customText: "Obra que explora o contexto histórico e teológico da morte de Cristo.",
  },
  {
    title: "A Verdade do Evangelho - Paul Washer",
    asin: "6559880281",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/51IAIpCyO+L._SY445_SX342_.jpg",
    customText: "Uma exposição clara e fiel sobre a essência do evangelho bíblico.",
  },
  {
  title: "A Supremacia de Cristo em um Mundo Pós-Moderno",
  asin: "B084Z3NY83",
  affiliateTag: "ofertaspixels-20",
  imageUrl: "https://m.media-amazon.com/images/I/416Bb2WquLL._SY445_SX342_.jpg",
  customText: "Uma coletânea de mensagens teológicas centradas em Cristo, relevantes para os desafios do mundo atual.",
}

];
