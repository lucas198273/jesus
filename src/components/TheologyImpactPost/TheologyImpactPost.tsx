// src/components/TheologyImpactPost.tsx
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TheologyImpactPost: React.FC = () => {
  const title = "O Que Muda na Vida de Quem Estuda Teologia?";
  const description =
    "Descubra as transformações espirituais, emocionais e práticas que ocorrem na vida de quem decide mergulhar no estudo da teologia cristã.";

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Helmet>

        <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-700 leading-relaxed mb-6">
            Estudar teologia vai muito além de aprender doutrinas ou decorar
            versículos. É uma jornada profunda de transformação interior, mental
            e espiritual. A cada página estudada, a mente se renova, o coração
            se alinha com a Palavra e a fé ganha novas raízes.
          </p>

          <ul className="space-y-4 text-gray-700 mb-6 list-disc pl-5">
            <li>
              <strong>Compreensão mais profunda da fé:</strong> conceitos como
              salvação, graça e escatologia passam a ter sentido prático.
            </li>
            <li>
              <strong>Maturidade espiritual:</strong> a fé se torna sólida,
              firme e menos vulnerável a enganos.
            </li>
            <li>
              <strong>Amor mais consciente por Deus:</strong> quanto mais se
              conhece a Deus, mais profunda é a adoração.
            </li>
            <li>
              <strong>Capacidade de ensinar e defender a fé:</strong> ideal para
              líderes, evangelistas ou cristãos que querem explicar melhor sua
              crença.
            </li>
            <li>
              <strong>Transformação de mente e atitudes:</strong> a teologia
              afeta a prática cristã e o relacionamento com os outros.
            </li>
          </ul>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 mb-6">
            “Conheçamos, e prossigamos em conhecer ao Senhor...” – Oséias 6:3
          </blockquote>

          <p className="text-gray-800">
            A teologia não é apenas para pastores — é para todos que desejam
            viver com propósito. Se você sente esse chamado, talvez seja hora de
            dar o próximo passo.
          </p>
        </section>
      </>
    </HelmetProvider>
  );
};

export default TheologyImpactPost;
