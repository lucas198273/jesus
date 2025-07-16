import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useDebounce } from "use-debounce";
import { affiliateCourses } from "../src/data/affiliateCourses";
import { biblicalBooks, studyBibles } from "../src/data/affiliateProducts";
import { matchSorter } from "match-sorter";

// Defina SearchItem explicitamente:
export interface SearchItem {
  id: string;
  title: string;
  category: "curso" | "produto" | "teologia" | "espiritualidade" | "outros";
  slug: string;
  image?: string;
}

interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  results: SearchItem[];
  handleSearch: (q: string) => void;
  loading: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    // Unir cursos e produtos em SearchItem[]
  const allItems: SearchItem[] = [
  ...affiliateCourses.map((course) => ({
    id: course.id,
    title: course.title,
    category: "curso" as const,  // <- garante que é o literal "curso"
    slug: course.id,
    image: course.image,
  })),
  ...[...biblicalBooks, ...studyBibles].map((product) => ({
    id: product.asin,
    title: product.title,
    category: "produto" as const, // <- literal "produto"
    slug: product.asin,
    image: product.imageUrl,
  })),
];


    const matched = matchSorter(allItems, debouncedQuery, { keys: ["title"] });

    setResults(matched);
    setLoading(false);
  }, [debouncedQuery]);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, results, handleSearch, loading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
};
