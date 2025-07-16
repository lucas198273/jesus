import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";
import { affiliateCourses } from "../data/affiliateCourses";
import { biblicalBooks, studyBibles } from "../data/affiliateProducts";
import { ArrowLeft } from "lucide-react";

const allProducts = [...biblicalBooks, ...studyBibles];

const AffiliateDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Buscar curso e produto conforme slug
const course = slug ? affiliateCourses.find((c) => c.id === slug) : undefined;
const product = slug ? allProducts.find((p) => p.asin === slug) : undefined;


  // Se não achar nem curso nem produto, mostrar mensagem
  if (!course && !product) {
    return (
      <div className="pt-24 bg-primary text-text min-h-screen text-center" data-aos="fade-in">
        Item não encontrado.
      </div>
    );
  }

  // Dados a exibir
  const title = course?.title || product?.title || "Detalhes";
  const description = course?.description || product?.customText || "";
  const image = course?.image || product?.imageUrl;

  // URLs para compra e página de vendas, com fallback seguro
  const buyUrl = course?.directPaymentUrl || (product ? `https://www.amazon.com.br/dp/${product.asin}/?tag=${product.affiliateTag}` : "#");
  const salesPageUrl = course?.salesPageUrl || buyUrl;

  // JSON-LD para SEO
  const schema = course
    ? {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Hotmart",
          sameAs: "https://www.hotmart.com",
        },
      }
    : product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        image: product.imageUrl,
        sku: product.asin,
        description: product.customText || product.title,
        offers: {
          "@type": "Offer",
          url: `https://www.amazon.com.br/dp/${product.asin}/?tag=${product.affiliateTag}`,
        },
      }
    : null;

  return (
    <div className="pt-24 bg-primary text-text min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        <meta property="og:url" content={window.location.href} />
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
      </Helmet>

      <div className="px-4 max-w-3xl mx-auto space-y-8">
        <header className="text-center" data-aos="fade-up">
          <h1 className="text-3xl font-bold text-accent2 mb-4">{title}</h1>
          {image && (
            <img
              src={image}
              alt={`Imagem de ${title}`}
              className="w-full max-h-[400px] object-contain rounded-lg shadow-lg"
              loading="lazy"
              onError={(e) => console.error("Erro ao carregar imagem", e)}
            />
          )}
          <p className="text-lg mt-4 text-text/80">{description}</p>
        </header>

        <section className="text-center" data-aos="fade-up" data-aos-delay="200">
          <a
            href={buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent2 text-text rounded-md font-semibold hover:bg-accent transition"
          >
            Comprar Agora
          </a>
          {course && course.salesPageUrl && course.salesPageUrl !== course.directPaymentUrl && (
            <div className="mt-2 text-sm">
              ou veja mais detalhes na{" "}
              <a
                href={salesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                página oficial do curso
              </a>
            </div>
          )}
        </section>

        <section className="flex justify-between" data-aos="fade-up" data-aos-delay="300">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-accent2 text-text rounded-md hover:bg-accent transition flex items-center"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar
          </button>
        </section>
      </div>
    </div>
  );
};

export default AffiliateDetailPage;
