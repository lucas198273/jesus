// src/hooks/useRecipeData.ts
import { useState, useEffect } from "react";
import type{ Recipe } from "../data/recipes";
import { recipes } from "../data/recipes";

export const useRecipeData = (slug?: string) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    
    if (slug) {
      const found = recipes.find((r) => r.slug === slug);
      setRecipe(found || null);
    } else {
      setRecipe(null);
    }
    
    setIsLoading(false);
  }, [slug]);

  return { recipe, isLoading };
};
