// src/data/affiliateProducts.ts

export interface Product {
  title: string;
  asin: string;
  affiliateTag: string;
  imageUrl: string;
  customText?: string;
}

// SEO: JSON-LD structured data for affiliate products
export const affiliateProductsStructuredData = () => {
  const products = [...ps5Products, ...ps4Products];
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

// Produtos PS5
export const ps5Products: Product[] = [
  {
    title: "Star Wars Outlaws - PlayStation 5",
    asin: "B0D9HKTGZ7",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71Ll-BWpyYL._AC_SX679_.jpg",
    customText: "Explore o universo Star Wars em mundo aberto no PS5.",
  },
  {
    title: "God of War Ragnarök – Edição Standard – PlayStation 5",
    asin: "B0BH59HP23",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/8136lnf0n2L._AC_SX679_.jpg",
    customText: "Mergulhe na jornada mítica de Kratos e Atreus pelos Nove Reinos.",
  },
  {
    title: "Resident Evil Village – Gold Edition – PlayStation 5",
    asin: "B0BLVY24Z3",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/61UmOMpv7SL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "A versão Gold traz todos os conteúdos extras para uma experiência completa.",
  },
    {
    title: "The Last of Us Part I Remastered – PlayStation 5",
    asin: "B0CP689L59",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/61KU9GYqDPL._AC_SX679_.jpg",
    customText: "Reviva a história emocionante de sobrevivência neste clássico remasterizado para PS5.",
  },
];

// Produtos PS4
export const ps4Products: Product[] = [
 // Produtos PS4
    {
    title: "Assassin's Creed Valhalla – PlayStation 4",
    asin: "B0BPCW1WPL",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/819zQmqyDcL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "Viva a era viking com combate épico e construção de assentamentos no PS4."
  },
    {
    title: "LITTLE NIGHTMARES COMPLETE EDITION – PlayStation 4",
    asin: "B07P67PP2L",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71XV2qbxWkL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "Desvende os mistérios sombrios de Six nesta edição completa do cult game no PS4."
  },
    {
    title: "God of War Hits – PlayStation 4",
    asin: "B07YT1GLV9",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/81h0oxLQQPL._AC_SX679_.jpg",
    customText: "Experimente a jornada épica de Kratos nesta edição Hits para PS4."
  },
   {
    title: "Injustice: Gods Among Us Ultimate Edition – PlayStation 4",
    asin: "B088C4C6QK",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/71dkJ7KkhkL.__AC_SX300_SY300_QL70_ML2_.jpg",
    customText: "Lute com seus heróis e vilões favoritos nesta edição definitiva de Injustice para PS4."
  },


];
