import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getPostsByCategory, getFeaturedPosts } from "../../data/blogPosts";
import type { BlogPost } from "../../data/blogPosts";

interface PostCarouselSectionProps {
  category?: BlogPost['category'];
  title: string;
}

export default function PostCarouselSection({ category, title }: PostCarouselSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const posts = category ? getPostsByCategory(category) : getFeaturedPosts();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div className="relative mb-16">
      <h3 className="text-3xl font-semibold text-center text-text mb-6">{title}</h3>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-4 px-2">
          {posts.length > 0 ? (
            posts.map((post, idx) => (
              <div
                key={post.id}
                className="flex-none w-[70%] sm:w-1/2 md:w-1/3 lg:w-1/4"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="relative rounded-xl overflow-hidden h-[320px] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2 border border-accent2">
                  <Link to={`/posts/${post.slug}`} className="block w-full h-full">
                    <img
                      src={post.featuredImage}
                      alt={`Imagem de destaque de ${post.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-secondary bg-opacity-90 flex flex-col">
                    <span className="text-lg text-white font-bold line-clamp-1">{post.title}</span>
                    <div className="flex justify-between items-center mt-2">
                      <Link
                        to={`/posts/${post.slug}`}
                        className="px-4 py-2 rounded-md font-semibold bg-accent2 text-text shadow hover:bg-accent transition"
                      >
                        Ler {post.category === 'review' ? 'Review' : post.category === 'guide' ? 'Guia' : 'Notícia'}
                      </Link>
                      <span className="text-xs text-accent2 capitalize">{post.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-text">Nenhum post encontrado.</div>
          )}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-accent2 text-text p-2 rounded-full z-10 hover:bg-accent"
        aria-label="Post anterior"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-accent2 text-text p-2 rounded-full z-10 hover:bg-accent"
        aria-label="Próximo post"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
