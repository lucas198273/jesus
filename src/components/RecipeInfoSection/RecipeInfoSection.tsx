import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const RecipeInfoSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const mensagemWhatsApp = `Olá! 😊 Tenho uma dúvida sobre uma receita ou gostaria de sugerir algo. Pode me ajudar?`;
  const linkWhatsApp = `https://wa.me/5531971705728?text=${encodeURIComponent(mensagemWhatsApp)}`;

  return (
    <section
      className="py-16 px-4 bg-[#F5E8D7] text-[#4E2A14]"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-[#A67C4D]"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)" }}
        >
          Sobre Nosso Site de Receitas
        </h2>

        <p
          className="text-lg md:text-xl mb-6 text-[#6B3E1F] italic"
          style={{ lineHeight: "1.6" }}
        >
          Aqui, cada receita conta uma história de sabor e simplicidade. Nosso objetivo é trazer receitas fáceis, saudáveis e deliciosas, testadas para garantir o melhor resultado na sua cozinha.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="p-6 rounded-lg shadow-lg border"
            style={{
              backgroundColor: "#E8D4B7",
              borderColor: "#A67C4D",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#A67C4D]">Qualidade das Receitas</h3>
            <p className="text-base text-[#6B3E1F]">
              Todas as receitas são criadas com ingredientes frescos e instruções claras. Nosso time testa cada prato para assegurar que você tenha uma experiência culinária perfeita e confiável.
            </p>
          </div>

          <div
            className="p-6 rounded-lg shadow-lg border"
            style={{
              backgroundColor: "#E8D4B7",
              borderColor: "#A67C4D",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#A67C4D]">Contato e Sugestões</h3>
            <p className="text-base text-[#6B3E1F]">
              Adoramos ouvir você! Envie suas dúvidas sobre receitas, sugestões ou propostas de parceria via WhatsApp. Estamos prontos para ajudar a tornar sua cozinha ainda mais especial.
            </p>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 rounded-lg transition-colors font-semibold"
              style={{
                backgroundColor: "#A67C4D",
                color: "#F5E8D7",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#8B5B2A")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#A67C4D")
              }
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <p
          className="text-lg md:text-xl font-bold text-[#A67C4D]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Sabor na mesa com amor e dedicação.
        </p>
      </div>
    </section>
  );
};

export default RecipeInfoSection;