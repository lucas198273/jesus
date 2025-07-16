import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearch, type SearchItem } from "../../../contexts/SearchContext";
import { Helmet } from "react-helmet-async";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { query, setQuery, results, handleSearch, loading } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loading) handleSearch(query);
    setSearchOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSearchOpen(true);
  };

  const clearSearch = () => {
    setQuery("");
    setSearchOpen(false);
  };

  const handleSuggestionClick = (item: SearchItem) => {
    clearSearch();
    if (item.category === "curso") {
      navigate(`/curso/${item.slug}`);
    } else if (item.category === "produto") {
      navigate(`/produto/${item.slug}`);
    } else {
      navigate(`/detalhe/${item.slug}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Cursos e Produtos Cristãos | Teologia e Fé</title>
        <meta
          name="description"
          content="Cursos de teologia e produtos cristãos: encontre bíblias, livros e formações para fortalecer sua fé."
        />
      </Helmet>

      <header className="fixed top-0 w-full z-50 bg-[#F9F6F1]/95 backdrop-blur-sm shadow-md border-b border-[#E5DCC3] h-20">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between relative text-[#2C2C2C]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#705D43] p-2"
            aria-label="Abrir menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className="hidden md:flex space-x-8 font-medium text-[#705D43]">
            <Link to="/" className="hover:text-[#BFA875]">
              Início
            </Link>
            <Link to="/cursos" className="hover:text-[#BFA875]">
              Cursos
            </Link>
            <Link to="/produtos" className="hover:text-[#BFA875]">
              Produtos
            </Link>
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
            aria-label="Página inicial"
          >
            <img
              src="/assets/logo.webp"
              alt="Logo"
              className="w-19 h-auto object-contain rounded-xl"
            />
          </Link>

          <button
            className="md:hidden text-[#705D43] p-2"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Abrir busca"
          >
            🔍
          </button>

          {/* Search Desktop */}
          <form
            onSubmit={handleSubmit}
            className="hidden md:flex items-center ml-4 relative"
          >
            <input
              type="text"
              placeholder="Buscar cursos ou produtos..."
              value={query}
              onChange={handleChange}
              className="bg-[#FFFDF9] px-4 py-2 pr-10 rounded-lg border border-[#E5DCC3] focus:ring-2 focus:ring-[#BFA875] text-[#2C2C2C] w-full max-w-xs"
              aria-label="Buscar"
              autoComplete="off"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#705D43]"
              aria-label="Pesquisar"
            >
              🔍
            </button>

            {/* Sugestões */}
            {searchOpen && results.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-[#FFFDF9] mt-1 rounded-lg shadow-lg max-h-64 overflow-auto z-50 border border-[#E5DCC3]">
                {results.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleSuggestionClick(item)}
                      className="w-full text-left px-4 py-2 hover:bg-[#F1ECE1] text-[#2C2C2C]"
                    >
                      {item.title}
                      <span className="text-[#BFA875] text-xs ml-2">
                        {item.category === "curso" ? "Curso" : "Produto"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>

        {/* Search Mobile */}
        {searchOpen && (
          <form
            onSubmit={handleSubmit}
            className="md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50 px-4"
          >
            <input
              type="text"
              placeholder="Buscar cursos ou produtos..."
              value={query}
              onChange={handleChange}
              className="bg-[#FFFDF9] px-4 py-2 pr-10 rounded-lg border border-[#E5DCC3] focus:ring-2 focus:ring-[#BFA875] text-[#2C2C2C] w-full"
              aria-label="Buscar"
              autoComplete="off"
            />
            <button
              type="submit"
              className="absolute right-8 top-1/2 transform -translate-y-1/2 text-[#705D43]"
              aria-label="Pesquisar"
            >
              🔍
            </button>
          </form>
        )}

        {/* Menu Mobile */}
        {menuOpen && (
          <nav className="fixed top-20 left-0 w-64 h-[calc(100vh-5rem)] bg-[#F9F6F1] text-[#2C2C2C] shadow-lg md:hidden z-40 p-6 flex flex-col space-y-6 border-r border-[#E5DCC3]">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#BFA875]"
            >
              Início
            </Link>
            <Link
              to="/cursos"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#BFA875]"
            >
              Cursos
            </Link>
            <Link
              to="/produtos"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#BFA875]"
            >
              Produtos
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
