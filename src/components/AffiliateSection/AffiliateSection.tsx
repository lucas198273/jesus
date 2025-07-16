import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { affiliateCourses } from "../../data/affiliateCourses";
import type { Product } from "../../data/affiliateProducts";
import { biblicalBooks, studyBibles } from "../../data/affiliateProducts";
export default function AffiliateSection() {
  const allProducts: Product[] = [...biblicalBooks, ...studyBibles];

  return (
    <section className="bg-[#F9F6F1] text-[#2C2C2C] py-16 px-4">
      <Helmet>
        <title>Cursos e Produtos Recomendados | Afiliados</title>
        <meta
          name="description"
          content="Conheça os cursos de teologia e produtos afiliados recomendados. Estude com qualidade e aproveite ofertas selecionadas."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Cursos Afiliados */}
        <h2 className="text-3xl font-bold mb-6 text-[#BFA875] text-center">
          Cursos de Teologia Recomendados
        </h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {affiliateCourses.map((course) => (
              <Link
                key={course.id}
                to={`/detalhe/${course.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition w-[280px] min-w-[280px] border border-[#E5DCC3]"
              >
                <img
                  src={course.image || "/fallback-image.png"}
                  alt={course.title}
                  className="h-40 w-full object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#2C2C2C] truncate">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#555] mt-2 line-clamp-3">
                    {course.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-[#BFA875] font-semibold hover:underline">
                    Ver Detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
       
        {/* Produtos Afiliados */}
        <h2 className="text-3xl font-bold my-10 text-[#BFA875] text-center">
          Produtos Recomendados na Amazon
        </h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {allProducts.map((product) => (
              <Link
                key={product.asin}
                to={`/detalhe/${product.asin}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition w-[280px] min-w-[280px] border border-[#E5DCC3]"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-40 w-full object-cover rounded-t-lg"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#2C2C2C] truncate">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#555] mt-2 line-clamp-3">
                    {product.customText || "Produto recomendado."}
                  </p>
                  <span className="mt-4 inline-block text-sm text-[#BFA875] font-semibold hover:underline">
                    Ver Detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
