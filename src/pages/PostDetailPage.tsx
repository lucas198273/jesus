import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getPostBySlug, getPostsByCategory, getPostsByTag, getPostById } from "../data/blogPosts";
import { SEO } from "../components/SEO/SEO";
import type { BlogPost } from "../data/blogPosts";
import DOMPurify from "dompurify";
import { ArrowLeft, Clock, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const usePostData = (slug?: string) => {
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      const foundPost = getPostBySlug(slug);
      setPost(foundPost || null);
    }
  }, [slug]);

  return { post };
};

const PostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const { post } = usePostData(slug);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const byCategory = getPostsByCategory(post.category).filter((p) => p.slug !== slug);
    const byTags = post.tags.flatMap((tag) => getPostsByTag(tag)).filter((p) => p.slug !== slug);
    const uniquePosts = Array.from(new Set([...byCategory, ...byTags].map((p) => p.id)))
      .map((id) => getPostById(id))
      .filter((p): p is BlogPost => p !== null);
    return uniquePosts.slice(0, 3);
  }, [post, slug]);

  // const handleTagClick = (tag: string) => {
  //   navigate(`/busca?tag=${encodeURIComponent(tag)}`);
  // };

  if (!post) {
    return (
      <div className="py-20 text-center text-text bg-primary min-h-screen" data-aos="fade-in">
        Post não encontrado...
      </div>
    );
  }

  // Structured data for BlogPosting schema with VideoObject
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    datePublished: post.publishedAt,
    image: post.featuredImage,
    publisher: {
      "@type": "Organization",
      name: "GameHub",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${window.location.origin}/posts/${post.slug}`,
    },
    ...(post.videos && post.videos.length > 0 && {
      video: post.videos.map((videoId, index) => ({
        "@type": "VideoObject",
        name: `${post.title} - Vídeo ${index + 1}`,
        description: `Vídeo relacionado a ${post.title}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        uploadDate: post.publishedAt,
        publisher: {
          "@type": "Organization",
          name: "GameHub",
        },
      })),
    }),
  };

  return (
    <div className="pt-24 bg-primary text-text min-h-screen">
      <SEO
        title={post.seoMeta.metaTitle || `${post.title} | GameHub`}
        description={post.seoMeta.metaDescription || post.excerpt}
        image={post.seoMeta.ogImage || post.featuredImage}
        canonical={`${window.location.origin}/posts/${post.slug}`}
        schema={schema}
      />

      <article className="px-4 max-w-4xl mx-auto space-y-8">
        <header className="text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-accent2 mb-4">{post.title}</h1>
          <img
            src={post.featuredImage}
            alt={`Imagem de destaque de ${post.title}`}
            className="w-full rounded-lg shadow-lg mb-6 object-cover max-h-[400px]"
            loading="lazy"
            onError={(e) => console.error(`Erro ao carregar imagem: ${post.featuredImage}`, e)}
          />
          <p className="text-lg text-text/80">{post.excerpt}</p>
          <div className="flex justify-center items-center gap-4 mt-4 text-sm text-text/70">
            <span className="flex items-center gap-1">
              <Clock size={16} /> {post.readTime} min
            </span>
            {post.rating && (
              <span className="flex items-center gap-1">
                <Star size={16} /> {post.rating}/10
              </span>
            )}
            <span>Por {post.author.name} | {new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </header>

        {/* {post.tags.length > 0 && (
          <section className="flex flex-wrap gap-2 justify-center mt-4" aria-label="Tags do post" data-aos="fade-up" data-aos-delay="100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent2 text-text rounded-full text-sm shadow hover:bg-accent transition-colors cursor-pointer"
                title={`Posts sobre ${tag}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </section>
        )} */}

        {post.gameInfo && (
          <section className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-text mb-4">Sobre o Jogo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text/80">
              <div><strong>Título:</strong> {post.gameInfo.title}</div>
              <div><strong>Desenvolvedor:</strong> {post.gameInfo.developer}</div>
              <div><strong>Publicador:</strong> {post.gameInfo.publisher}</div>
              <div><strong>Data de Lançamento:</strong> {new Date(post.gameInfo.releaseDate).toLocaleDateString()}</div>
              <div><strong>Plataformas:</strong> {post.gameInfo.platforms.join(", ")}</div>
              <div><strong>Gêneros:</strong> {post.gameInfo.genre.join(", ")}</div>
              {post.gameInfo.price && <div><strong>Preço:</strong> ${post.gameInfo.price.toFixed(2)}</div>}
              {post.gameInfo.metacriticScore && (
                <div><strong>Metacritic:</strong> {post.gameInfo.metacriticScore}/100</div>
              )}
            </div>
          </section>
        )}

        {post.videos && post.videos.length > 0 && (
          <section className="bg-secondary p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="250">
            <h2 className="text-2xl font-semibold text-text mb-4">Vídeos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.videos.map((videoId, index) => (
                <div key={index} className="relative w-full" style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Vídeo ${index + 1} de ${post.title}`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-2xl font-semibold text-text mb-4">Conteúdo</h2>
          <div
            className="prose prose-invert max-w-none text-text/80"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
        </section>

        {post.gallery && post.gallery.length > 0 && (
          <section data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl font-semibold text-text mb-4">Galeria</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {post.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem ${index + 1} de ${post.title}`}
                  className="w-full h-48 object-cover rounded-lg shadow"
                  loading="lazy"
                  onError={(e) => console.error(`Erro ao carregar imagem da galeria: ${image}`, e)}
                />
              ))}
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="mt-8" data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl font-semibold text-text mb-4">Posts Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((related) => (
                <Link
                  to={`/posts/${related.slug}`}
                  key={related.id}
                  className="block bg-secondary p-4 rounded-lg hover:bg-accent transition"
                  aria-label={`Ler ${related.title}`}
                >
                  <img
                    src={related.featuredImage}
                    alt={`Imagem de destaque de ${related.title}`}
                    className="w-full h-24 object-cover rounded"
                    loading="lazy"
                    onError={(e) => console.error(`Erro ao carregar imagem relacionada: ${related.featuredImage}`, e)}
                  />
                  <p className="mt-2 text-sm font-medium text-text">{related.title}</p>
                  <span className="text-xs text-accent2 uppercase">{related.category}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="flex justify-between mt-8" data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-accent2 text-text rounded-md hover:bg-accent transition flex items-center"
            aria-label="Voltar para a página anterior"
          >
            <ArrowLeft size={20} className="mr-2" /> Voltar
          </button>
          <button
            onClick={() => navigate("/blog")}
            className="px-6 py-2 bg-accent2 text-text rounded-md hover:bg-accent transition"
            aria-label="Ver mais posts do blog"
          >
            Ver mais posts
          </button>
        </section>
      </article>
    </div>
  );
};

export default PostDetailPage;