// src/hooks/useSEO.ts
import { useEffect } from "react";


export const useSEO = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [title, description]);
};
