import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import {  getPostsByCategory, getFeaturedPosts } from "../data/blogPosts";
import type { BlogPost } from "../data/blogPosts";
const CategorySection = ({ category, title }: { category: BlogPost['category'] | 'featured'; title: string }) => {
  const posts = useMemo(() => {
    return category === 'featured' ? getFeaturedPosts() : getPostsByCategory(category);
  }, [category]);

  if (posts.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-text mb-6 text-center capitalize">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-secondary p-4 rounded-lg shadow-lg border border-accent2 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <Link to={`/posts/${post.slug}`} className="block w-full">
              <img
                src={post.featuredImage}
                alt={`Imagem de destaque de ${post.title}`}
                className="w-full h-48 object-cover rounded-md mx-auto hover:opacity-90 transition-opacity"
                loading="lazy"
              />
            </Link>
            <div className="mt-2 flex flex-col items-center">
              <span className="text-xs text-accent2 uppercase mb-1">{post.category}</span>
              <h3 className="text-lg font-medium text-text line-clamp-2">{post.title}</h3>
              <p className="text-sm text-text/80 line-clamp-2 mt-1">{post.excerpt}</p>
              <Link
                to={`/posts/${post.slug}`}
                className="mt-3 inline-block px-4 py-2 bg-accent2 text-text rounded-full hover:bg-accent transition-all duration-300"
                aria-label={`Ler ${post.category === 'review' ? 'review' : post.category === 'guide' ? 'guia' : post.category === 'news' ? 'notícia' : 'opinião'} de ${post.title}`}
              >
                Ler {post.category === 'review' ? 'Review' : post.category === 'guide' ? 'Guia' : post.category === 'news' ? 'Notícia' : 'Opinião'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
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
    document.title = "Blog de Jogos - Reviews, Guias e Notícias | GameHub";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore nosso blog de jogos com reviews detalhadas, guias completos e as últimas notícias sobre games. Descubra tudo sobre seus jogos favoritos!"
      );
    }
  }, []);

  return (
    <div className="relative pt-24 bg-primary text-text">
      <section className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-accent2 mb-10 text-center">Blog de Jogos</h1>

        <CategorySection category="featured" title="Posts em Destaque" />
        <CategorySection category="review" title="Reviews de Jogos" />
        <CategorySection category="guide" title="Guias e Tutoriais" />
        <CategorySection category="news" title="Notícias do Mundo dos Games" />
        <CategorySection category="opinion" title="Opiniões e Análises" />
      </section>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-accent2 hover:bg-accent text-text p-3 rounded-full shadow-lg"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
};

export default BlogPage;