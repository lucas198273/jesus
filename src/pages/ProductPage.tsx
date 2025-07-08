import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { recipes } from "../data/recipes";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductPage = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title = "Catálogo de Receitas - Receitas Deliciosas e Fáceis";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore nosso catálogo de receitas fáceis e deliciosas. Encontre opções veganas, entradas, sobremesas e mais, com instruções passo a passo!"
      );
    }
  }, []);

  return (
    <div className="relative pt-24 bg-white text-[#4E2A14]">
      
      <section className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#A67C4D] mb-10 text-center">Catálogo de Receitas</h1>

        {/* Receitas de Entrada */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#8B5B2A] mb-6 text-center">Entradas Deliciosas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes
              .filter((r) => r.category === "entrada")
              .map((r) => (
                <div
                  key={r.id}
                  className="bg-white p-4 rounded-lg shadow-lg border-2 border-[#A67C4D] flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={r.imageUrl}
                    alt={`${r.title} - Receita de ${r.category}`}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-medium text-[#6B3E1F] mt-2 line-clamp-2">{r.title}</h3>
                  <Link
                    to={`/receitas/${r.slug}`}
                    className="mt-3 inline-block px-4 py-2 bg-[#A67C4D] text-white rounded-full hover:bg-[#8B5B2A] transition-all duration-300"
                  >
                    Ver Receita
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Receitas Veganas */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#8B5B2A] mb-6 text-center">Receitas Veganas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes
              .filter((r) => r.category === "vegano")
              .map((r) => (
                <div
                  key={r.id}
                  className="bg-white p-4 rounded-lg shadow-lg border-2 border-[#A67C4D] flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={r.imageUrl}
                    alt={`${r.title} - Receita de ${r.category}`}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-medium text-[#6B3E1F] mt-2 line-clamp-2">{r.title}</h3>
                  <Link
                    to={`/receitas/${r.slug}`}
                    className="mt-3 inline-block px-4 py-2 bg-[#A67C4D] text-white rounded-full hover:bg-[#8B5B2A] transition-all duration-300"
                  >
                    Ver Receita
                  </Link>
                </div>
              ))}
          </div>
        </div>

        {/* Receitas de Sobremesa */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-[#8B5B2A] mb-6 text-center">Sobremesas Irresistíveis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes
              .filter((r) => r.category === "sobremesa")
              .map((r) => (
                <div
                  key={r.id}
                  className="bg-white p-4 rounded-lg shadow-lg border-2 border-[#A67C4D] flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={r.imageUrl}
                    alt={`${r.title} - Receita de ${r.category}`}
                    className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-medium text-[#6B3E1F] mt-2 line-clamp-2">{r.title}</h3>
                  <Link
                    to={`/receitas/${r.slug}`}
                    className="mt-3 inline-block px-4 py-2 bg-[#A67C4D] text-white rounded-full hover:bg-[#8B5B2A] transition-all duration-300"
                  >
                    Ver Receita
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-[#A67C4D] hover:bg-[#8B5B2A] text-white p-3 rounded-full shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default ProductPage;