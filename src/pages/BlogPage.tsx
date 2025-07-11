import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { getPostsByCategory, getFeaturedPosts } from "../data/blogPosts";
import type { BlogPost } from "../data/blogPosts";

// Define as categorias permitidas
type Category = "featured" | "review" | "guide" | "news" | "opinion";

interface FilterButtonsProps {
  onFilterChange: (category: Category) => void;
}

const FilterButtons = ({ onFilterChange }: FilterButtonsProps) => {
  const categories: Category[] = ["featured", "review", "guide", "news", "opinion"];

  return (
    <div className="flex justify-center mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className="mx-2 px-4 py-2 bg-accent2 text-text rounded hover:bg-accent transition-all duration-300"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

interface CategorySectionProps {
  title: string;
  selectedCategory: Category;
}

const CategorySection = ({ title, selectedCategory }: CategorySectionProps) => {
  const posts: BlogPost[] = useMemo(() => {
    return selectedCategory === "featured"
      ? getFeaturedPosts()
      : getPostsByCategory(selectedCategory);
  }, [selectedCategory]);

  if (!title || posts.length === 0)
    return <p className="text-center">Nenhum post disponível para esta categoria.</p>;

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
              >
                Ler{" "}
                {post.category === "review"
                  ? "Review"
                  : post.category === "guide"
                  ? "Guia"
                  : post.category === "news"
                  ? "Notícia"
                  : "Opinião"}
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
  const [selectedCategory, setSelectedCategory] = useState<Category>("featured");

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFilterChange = (category: Category) => {
    setSelectedCategory(category);
  };

  // Dynamic meta descriptions based on selected category
  const metaDescriptions: Record<Category, string> = {
    featured: "Descubra os posts em destaque do GameHub, com reviews, guias e notícias sobre seus jogos favoritos!",
    review: "Leia reviews detalhadas dos últimos lançamentos de jogos no blog do GameHub.",
    guide: "Encontre guias completos e dicas para melhorar sua experiência nos jogos no GameHub.",
    news: "Fique por dentro das últimas notícias e atualizações do mundo dos jogos no GameHub.",
    opinion: "Explore opiniões e análises sobre jogos e tendências no blog do GameHub."
  };

  return (
    <div className="relative pt-24 bg-primary text-text">
      <Helmet>
        <title>Blog de Jogos - {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} | GameHub</title>
        <meta name="description" content={metaDescriptions[selectedCategory]} />
        <meta name="keywords" content={`jogos, ${selectedCategory}, reviews, guias, notícias, GameHub`} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`Blog de Jogos - ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} | GameHub`} />
        <meta property="og:description" content={metaDescriptions[selectedCategory]} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content="GameHub" />
      </Helmet>

      <section className="px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-accent2 mb-10 text-center">Blog de Jogos</h1>

        <FilterButtons onFilterChange={handleFilterChange} />
        <CategorySection title="Posts" selectedCategory={selectedCategory} />
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