import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import type { BlogPost } from "../../data/blogPosts";
import { getRecentPosts } from "../../data/blogPosts";

interface PostSectionProps {
  categoriesToShow?: BlogPost["category"][];
  postSlugsToShow?: string[];
}

export function PostSection({ categoriesToShow, postSlugsToShow }: PostSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    let initialPosts = getRecentPosts(20);

    if (categoriesToShow?.length) {
      initialPosts = initialPosts.filter((p) => categoriesToShow.includes(p.category));
    }

    if (postSlugsToShow?.length) {
      initialPosts = initialPosts.filter((p) => postSlugsToShow.includes(p.slug));
    }

    setPosts(initialPosts);
  }, [categoriesToShow, postSlugsToShow]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map((p) => p.category)));
    return uniqueCategories.length > 1 ? ["all", ...uniqueCategories] : [];
  }, [posts]);

  return (
    <section className="py-16 text-white bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Posts em Destaque</h2>

        {categories.length > 0 && (
          <div className="flex justify-center gap-4 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm shadow ${
                  activeCategory === cat
                    ? "bg-accent2 text-primary"
                    : "bg-secondary text-text hover:bg-accent"
                }`}
              >
                {cat === "all" ? "Todos" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="overflow-x-auto">
          <div className="flex gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 min-w-[200px]"
              >
                <Link to={`/posts/${post.slug}`} aria-label={`Ler post ${post.title}`} className="block">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/fallback-image.png";
                    }}
                  />
                  <div className="bg-secondary p-2">
                    <h3 className="text-sm font-medium truncate text-text">{post.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
