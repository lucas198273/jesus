import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearch } from "../../../contexts/SearchContext";
import type { BlogPost } from "../../data/blogPosts";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { query, setQuery, results, handleSearch, loading } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) handleSearch(query);
    setSearchOpen(true); // Manter o campo de busca aberto após a submissão
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchOpen(true); // Exibir sugestões enquanto digita
  };

  const clearSearch = () => {
    setQuery("");
    setSearchOpen(false);
  };

  const handleSuggestionClick = (slug: string) => {
    clearSearch();
    navigate(`/posts/${slug}`);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F0F23]/95 backdrop-blur-sm shadow-lg border-b-2 border-[#E94560] h-20">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between relative">
        {/* Menu button mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#EAEAEA] p-2"
          aria-label="Abrir menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Nav desktop */}
        <nav className="hidden md:flex space-x-8 font-semibold text-[#EAEAEA]">
          <Link to="/" className="hover:text-[#E94560]">Início</Link>
          <Link to="/blog" className="hover:text-[#E94560]">Blog</Link>
          <Link to="/contact" className="hover:text-[#E94560]">Contato</Link>
        </nav>

        {/* Logo center */}
        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          aria-label="Home GameHub"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#E94560] to-[#1A1A2E] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">🎮</span>
          </div>
          <div className="ml-2 text-[#EAEAEA] font-bold text-xl">
            Game<span className="text-[#E94560]">Hub</span>
          </div>
        </Link>

        {/* Search button mobile */}
        <button
          className="md:hidden text-[#EAEAEA] p-2"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Abrir busca"
        >
          🔍
        </button>

        {/* Search form (always visible on desktop, hidden on mobile) */}
        <form onSubmit={handleSubmit} className={`hidden md:flex items-center ml-4 relative`}>
          <input
            type="text"
            placeholder="Buscar jogos..."
            value={query}
            onChange={handleChange}
            className="bg-[#1A1A2E] px-4 py-2 pr-10 rounded-lg border border-[#16213E] focus:ring-2 focus:ring-[#E94560] text-[#EAEAEA] w-full max-w-xs"
            aria-label="Buscar jogos"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label="Pesquisar"
          >
            🔍
          </button>

          {/* Sugestões */}
          {searchOpen && results.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-[#1A1A2E] mt-1 rounded-lg shadow-lg max-h-64 overflow-auto z-50">
              {results.slice(0, 5).map((post: BlogPost) => (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(post.slug)}
                    className="w-full text-left px-4 py-2 hover:bg-[#16213E] text-[#EAEAEA] focus:outline-none"
                  >
                    {post.title}{" "}
                    <span className="text-[#E94560] text-xs">({post.category})</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      {/* Search form for mobile (appears below the header) */}
      {searchOpen && (
        <form
          onSubmit={handleSubmit}
          className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50"
        >
          <input
            type="text"
            placeholder="Buscar jogos..."
            value={query}
            onChange={handleChange}
            className="bg-[#1A1A2E] px-4 py-2 pr-10 rounded-lg border border-[#16213E] focus:ring-2 focus:ring-[#E94560] text-[#EAEAEA] w-full"
            aria-label="Buscar jogos"
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            aria-label="Pesquisar"
          >
            🔍
          </button>

          {/* Sugestões */}
          {results.length > 0 && (
            <ul className="absolute w-full bg-[#1A1A2E] mt-2 rounded-lg shadow-lg max-h-64 overflow-auto z-50">
              {results.slice(0, 5).map((post: BlogPost) => (
                <li key={post.id}>
                  <button
                    type="button"
                    onClick={() => handleSuggestionClick(post.slug)}
                    className="block w-full px-4 py-2 hover:bg-[#16213E] text-[#EAEAEA] focus:outline-none"
                  >
                    {post.title}{" "}
                    <span className="text-[#E94560] text-xs">({post.category})</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </form>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden fixed top-20 w-full bg-[#0F0F23]/95 p-6 space-y-4 z-40">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block text-[#EAEAEA]">Início</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="block text-[#EAEAEA]">Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block text-[#EAEAEA]">Contato</Link>
        </nav>
      )}
    </header>
  );
}
