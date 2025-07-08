import React from "react";
import { FaInstagram } from "react-icons/fa";

const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-[#F5E8D7] text-[#4E2A14]">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/assets/logo-receitas.webp" // Ajuste o caminho da logo de receitas
          alt="Receitas Deliciosas"
          className="mx-auto mb-6 w-38 h-38 object-cover rounded-full border-4 border-[#A67C4D] shadow-xl"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A67C4D] drop-shadow-md graffiti-font">
          Receitas Deliciosas
        </h2>

        <p className="mb-6 text-lg italic text-[#6B3E1F]">
          Siga-nos nas redes sociais para novas receitas, dicas culinárias e inspirações na cozinha!
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/receitasdeliciosas/" // Ajuste o link do Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform hover:scale-110 text-[#A67C4D] hover:text-[#8B5B2A]"
          >
            <FaInstagram className="w-10 h-10 mb-2" />
            <span className="text-sm font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Adicionando estilo inline para a fonte (pode ser movido para um CSS externo)
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

  .graffiti-font {
    font-family: 'Bangers', cursive;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default SocialMediaSection;