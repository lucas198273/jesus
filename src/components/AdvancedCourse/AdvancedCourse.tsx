// src/components/AdvancedCourse.tsx
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface AdvancedCourseProps {
  title: string;
  description: string;
  salesPageUrl: string;
  imageUrl: string;
}

const AdvancedCourse: React.FC<AdvancedCourseProps> = ({
  title,
  description,
  salesPageUrl,
  imageUrl,
}) => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{title} | Curso Avançado de Teologia</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={salesPageUrl} />
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />
        </Helmet>

        <section
          aria-labelledby="advanced-course-title"
          className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-full md:w-1/2">
            <img
              src={imageUrl}
              alt={`Imagem do curso ${title}`}
              className="w-full rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          <article className="w-full md:w-1/2">
            <h1
              id="advanced-course-title"
              className="text-3xl font-extrabold text-gray-900 mb-4"
            >
              {title}
            </h1>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            <a
              href={salesPageUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Acessar Curso
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </article>
        </section>
      </>
    </HelmetProvider>
  );
};

export default AdvancedCourse;
