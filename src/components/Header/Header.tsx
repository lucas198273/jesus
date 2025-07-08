import { useState } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#4E2A14] backdrop-blur-sm shadow-md h-20 border-b-4 border-[#8B5B2A]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Botão do menu mobile */}
        <div className="flex items-center z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#C6A76B] focus:outline-none focus:ring-2 focus:ring-[#A67C4D] rounded-md p-2 mr-4"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-8 font-bold text-[#C6A76B] text-base items-center">
            <Link to="/" className="hover:text-[#A67C4D] transition-colors duration-200">Início</Link>
            <Link to="/receitas" className="hover:text-[#A67C4D] transition-colors duration-200">Receitas</Link>
          </nav>
        </div>

        {/* Logo central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex-shrink-0">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.webp"
              alt="Receitas"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Espaço vazio onde estava o carrinho */}
        <div className="w-8 h-8 z-10" /> {/* Apenas para manter espaçamento igual */}
      </div>

      {/* Menu mobile */}
      <nav
        className={`md:hidden fixed top-20 left-0 w-full bg-[#4E2A14] backdrop-blur-sm shadow-md z-40 px-6 py-4 space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="block text-[#C6A76B] hover:text-[#A67C4D] transition-colors duration-200"
        >
          Início
        </Link>
     
        <Link
          to="/products"
          onClick={() => setMenuOpen(false)}
          className="block text-[#C6A76B] hover:text-[#A67C4D] transition-colors duration-200"
        >
          Receitas
        </Link>
      </nav>
    </header>
  );
}
