// src/data/affiliateProducts.ts

export interface Product {
  title: string;
  asin: string;
  affiliateTag: string;
  imageUrl: string;         // adicione isso
  customText?: string;
}


// Produtos PS5
export const ps5Products: Product[] = [
 {
    title: "Star Wars Outlaws - PlayStation 5",
    asin: "B0D9HKTGZ7",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/81eKKNyBd1L._AC_SX679_.jpg", // URL real da imagem
    customText: "Explore o universo Star Wars em mundo aberto no PS5."
  },

];


// Produtos PS4
export const ps4Products: Product[] = [
  {
    title: "Star Wars Outlaws - PlayStation 5",
    asin: "B0D9HKTGZ7",
    affiliateTag: "ofertaspixels-20",
    imageUrl: "https://m.media-amazon.com/images/I/81eKKNyBd1L._AC_SX679_.jpg", // URL real da imagem
    customText: "Explore o universo Star Wars em mundo aberto no PS5."
  },
];
