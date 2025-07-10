// src/contexts/SearchContext.tsx
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useDebounce } from "use-debounce";
import { useNavigate } from "react-router-dom";
import { searchPosts, type BlogPost } from "../src/data/blogPosts";
import { matchSorter } from "match-sorter";

export interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  results: BlogPost[];
  handleSearch: (q: string) => void;
  loading: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const found = searchPosts(debouncedQuery);
    const sorted = matchSorter(found, debouncedQuery, {
      keys: ["title", "tags", "content"],
    });

    setResults(sorted);

    const exactMatch = sorted.find(
      (p) =>
        p.title.toLowerCase() === debouncedQuery.toLowerCase() ||
        p.tags.some((t) => t.toLowerCase() === debouncedQuery.toLowerCase())
    );

    if (exactMatch) {
      navigate(`/posts/${exactMatch.slug}`);
    }

    setLoading(false);
  }, [debouncedQuery, navigate]);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim()) {
      navigate(`/busca?query=${encodeURIComponent(q)}`);
    } else {
      setResults([]);
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ query, setQuery, results, handleSearch, loading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
};
