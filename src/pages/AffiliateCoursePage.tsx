import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { affiliateCourses } from "../data/affiliateCourses";

export function AffiliateCoursePage() {
  const { id } = useParams();
  const course = id ? affiliateCourses.find(c => c.id === id) : null;

  if (id && !course) {
    return (
      <section className="py-16 text-center text-red-600 font-semibold text-xl">
        <Helmet>
          <title>Curso não encontrado | Cursos Afiliados</title>
          <meta name="description" content="Curso afiliado não encontrado na plataforma." />
        </Helmet>
        <p>Curso não encontrado.</p>
        <Link to="/cursos" className="mt-4 inline-block text-blue-600 underline">
          Voltar para cursos disponíveis
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white text-gray-800 px-4">
      <Helmet>
        <title>
          {course ? `${course.title} | Curso Afiliado` : "Cursos Afiliados | Estude Teologia Online"}
        </title>
        <meta
          name="description"
          content={
            course
              ? course.description
              : "Conheça nossos cursos afiliados de teologia, espiritualidade e desenvolvimento cristão."
          }
        />
      </Helmet>

      <div className="max-w-5xl mx-auto">
        {course ? (
          <>
            <h1 className="text-4xl font-bold mb-6 text-center">{course.title}</h1>

            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded mb-6"
                loading="lazy"
              />
            )}

            <p className="text-lg leading-relaxed mb-6">{course.description}</p>

            <div className="flex gap-4 justify-center">
              <a
                href={course.salesPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Visitar Página de Vendas
              </a>
              <a
                href={course.directPaymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
              >
                Comprar Agora
              </a>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center mb-10">Cursos Recomendados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {affiliateCourses.map(course => (
                <div
                  key={course.id}
                  className="shadow-lg border border-gray-200 rounded overflow-hidden hover:shadow-xl transition"
                >
                  {course.image && (
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{course.description}</p>
                    <Link
                     to={`/detalhe/${course.id}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
