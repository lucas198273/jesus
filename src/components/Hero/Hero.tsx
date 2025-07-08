"use client";


export default function Hero() {
  return (
    <section className="relative w-full bg-white text-[#4E2A14] flex items-center justify-center px-6 py-24 md:py-32 border-b-4 border-[#8B5B2A]">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-10">
        {/* Texto e call-to-action */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#4E2A14]">
            Receitas com Sabor de Casa
          </h1>
          <p className="text-base md:text-xl text-[#6B3E1F] leading-relaxed">
            Descubra receitas acolhedoras, simples e cheias de sabor. Inspire-se com pratos tradicionais e novas ideias para sua cozinha!
          </p>
          <button
            onClick={() => window.location.href = "/receitas"}
            className="px-6 py-3 md:px-8 md:py-4 bg-[#A67C4D] hover:bg-[#8B5B2A] transition duration-300 text-white font-semibold rounded-md shadow-md"
          >
            Ver Receitas
          </button>
        </div>

        {/* Imagem de comida */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/assets/receitas/OIP.webp"
            alt="Prato de comida"
            className="w-full max-w-lg rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
