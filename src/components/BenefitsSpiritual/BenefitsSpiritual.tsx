import React from "react";
import { Helmet } from "react-helmet-async";

interface BenefitsSpiritualProps {
  imageSrc?: string;
  imageAlt?: string;
}

const BenefitsSpiritual: React.FC<BenefitsSpiritualProps> = ({ imageSrc, imageAlt }) => {
  return (
    <>
      <Helmet>
        <title>Benefícios Espirituais do Estudo da Teologia | Fortaleça sua Fé</title>
        <meta
          name="description"
          content="Descubra os benefícios espirituais do estudo da teologia e como ele pode transformar sua vida, fortalecendo a fé, trazendo entendimento e paz interior."
        />
        <meta name="keywords" content="teologia, benefícios espirituais, fé, estudo bíblico, crescimento espiritual" />
        <meta name="author" content="Seu Nome ou Sua Marca" />
      </Helmet>

      <section
        aria-label="Benefícios espirituais do estudo da teologia"
        className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md text-gray-900"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#BFA875]">
          Benefícios Espirituais do Estudo da Teologia
        </h2>

        {imageSrc && (
          <div className="mb-6 flex justify-center">
            <img
              src={imageSrc}
              alt={imageAlt || "Imagem ilustrativa sobre estudo da teologia"}
              className="w-full max-w-md rounded-md object-cover shadow-lg"
              loading="lazy"
            />
          </div>
        )}

        <p className="mb-4 leading-relaxed text-justify">
          O estudo da teologia é uma jornada profunda que vai muito além do conhecimento acadêmico. Ele promove um crescimento espiritual significativo, ajudando a fortalecer a fé e a compreensão das Escrituras Sagradas.
        </p>
        <p className="mb-4 leading-relaxed text-justify">
          Ao estudar teologia, você desenvolve uma conexão mais íntima com seus valores espirituais, além de adquirir ferramentas para refletir sobre a vida, a moral e o propósito divino. Isso pode trazer uma maior paz interior e resiliência diante dos desafios diários.
        </p>
        <p className="mb-4 leading-relaxed text-justify">
          Além disso, o estudo sistemático da teologia fomenta o respeito pelas diferentes tradições e crenças, promovendo um diálogo construtivo e a empatia em comunidades religiosas diversas.
        </p>
        <p className="leading-relaxed text-justify">
          Em resumo, dedicar tempo para aprender teologia pode transformar sua vida espiritual, abrindo caminhos para uma fé mais consciente, amorosa e comprometida com o bem-estar próprio e do próximo.
        </p>
      </section>
    </>
  );
};

export default BenefitsSpiritual;
