// src/types/SearchItem.ts
export interface SearchItem {
  id: string;
  title: string;
  category: "produto" | "curso" | "teologia" | "espiritualidade" | "outros";
  slug: string;
  image?: string;
}
