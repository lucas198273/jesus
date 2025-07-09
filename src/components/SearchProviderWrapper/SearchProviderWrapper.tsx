// src/components/SearchProviderWrapper.tsx
import { SearchProvider } from "../../../contexts/SearchContext";
import type { ReactNode } from "react";

export const SearchProviderWrapper = ({ children }: { children: ReactNode }) => {
  return <SearchProvider>{children}</SearchProvider>;
};
