import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#F9F6F1] text-[#2C2C2C] pt-28 pb-20 px-6">
      <Helmet>
        <title>Teologia e Espiritualidade | Início</title>
        <meta
          name="description"
          content="Fortaleça sua caminhada espiritual com cursos de teologia, estudos bíblicos e reflexões profundas."
        />
        <meta property="og:title" content="Conhecimento e Fé Caminham Juntos" />
        <meta property="og:description" content="Cursos, estudos e produtos cristãos para sua jornada espiritual." />
        <meta property="og:image" content="https://example.com/imagem-destaque.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Conhecimento e Fé Caminham Juntos
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#2C2C2C]">
            Descubra reflexões profundas, estudos bíblicos e cursos de teologia para fortalecer sua caminhada espiritual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/produtos"
              className="bg-[#705D43] text-white px-6 py-3 rounded-lg hover:bg-[#BFA875] transition duration-300"
            >
              Ver Produtos
            </Link>    
            <Link
              to="/cursos"
              className="bg-[#705D43] text-white px-6 py-3 rounded-lg hover:bg-[#BFA875] transition duration-300"
            >
              Ver Cursos
            </Link>
           
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1 w-full max-w-xl">
          <img
            src="https://flt.edu.br/wp-content/uploads/2022/07/FLT-Imagem-de-blog-Estudo-de-teologia-Junho-AC220622-14-980x551.png"
            alt="Estudo bíblico e espiritualidade"
            className="w-full h-auto rounded-lg shadow-md object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
