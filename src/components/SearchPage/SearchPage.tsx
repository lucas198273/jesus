import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../../contexts/SearchContext";

import type { BlogPost } from "../../data/blogPosts"; // Ajuste para ../../data/blogPost se necessário
import { useSEO } from "../../hooks/UseSEO"; // Ajuste para ../../hooks/UseSEO se necessário
import AOS from "aos";
import "aos/dist/aos.css";

const SearchPage = () => {
  const { query, results } = useSearch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    // Simula loading state (remover se SearchContext já gerencia loading)
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300); // Simula busca
    return () => clearTimeout(timer);
  }, [results]);

  useSEO(
    `Resultados para "${query}" | GameHub`,
    `Veja os resultados da busca por "${query}" no GameHub, incluindo reviews, guias e notícias sobre jogos.`,
    [
      { property: "og:title", content: `Resultados para "${query}" | GameHub` },
      { property: "og:description", content: `Veja os resultados da busca por "${query}" no GameHub.` },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  );

  return (
    <div className="pt-24 bg-[#0F0F23] text-[#EAEAEA] min-h-screen">
      <section className="px-4 max-w-7xl mx-auto" data-aos="fade-up">
        <h1
          className="text-3xl font-bold text-[#E94560] mb-6"
          aria-live="polite"
        >
          Resultados para "{query || "Nenhum termo"}"
        </h1>
        {loading ? (
          <p className="text-[#EAEAEA]/80">Carregando...</p>
        ) : results.length === 0 ? (
          <p className="text-[#EAEAEA]/80">Nenhum resultado encontrado.</p>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            role="list"
            aria-label="Resultados da busca"
          >
            {results.map((post: BlogPost, index: number) => (
              <Link
                key={post.id}
                to={`/posts/${post.slug}`}
                className="bg-[#1A1A2E] p-4 rounded-lg shadow-lg border border-[#E94560] hover:bg-[#16213E] transition-colors duration-200"
                aria-label={`Ler ${post.title}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={post.featuredImage || "/fallback-image.jpg"}
                  alt={`Imagem de ${post.title}`}
                  className="w-full h-48 object-cover rounded-md"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
                />
                <h2 className="text-lg font-medium text-[#EAEAEA] mt-2">{post.title}</h2>
                <p className="text-sm text-[#EAEAEA]/80">{post.excerpt}</p>
                <span className="text-xs text-[#E94560] uppercase">{post.category}</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SearchPage;