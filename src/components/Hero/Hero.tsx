"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentGame, setCurrentGame] = useState(0);
  
  const featuredGames = [
    {
      title: "Cyberpunk 2077",
      image: "/assets/cyber/cyber.webp",
      genre: "RPG",
      rating: "9.2"
    },
    {
      title: "The Legend of Zelda",
      image: "/assets/zelda/zelda.jpg", 
      genre: "Aventura",
      rating: "9.8"
    },
    {
      title: "lost",
      image: "/assets/lost/lost.png",
      genre: "Ação",
      rating: "9.5"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % featuredGames.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0F0F23] via-[#1A1A2E] to-[#16213E] text-[#EAEAEA] flex items-center justify-center px-6 py-24 md:py-32 border-b-2 border-[#E94560] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={`absolute ${index % 2 === 0 ? 'top' : 'bottom'}-${(index + 1) * 10} ${index % 2 === 0 ? 'left' : 'right'}-${(index + 1) * 10} w-${index + 1} h-${index + 1} bg-[#E94560] rounded-full animate-pulse delay-${index * 1000}`}></div>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl items-center gap-10 z-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-[#E94560]/20 rounded-full border border-[#E94560]/30 mb-4">
            <span className="text-[#E94560] font-semibold text-sm">🎮 GAMING BLOG</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#EAEAEA]">
            Mergulhe no Mundo dos 
            <span className="text-transparent bg-gradient-to-r from-[#E94560] to-[#FF6B9D] bg-clip-text"> Games</span>
          </h1>
          
          <p className="text-base md:text-xl text-[#EAEAEA]/80 leading-relaxed">
            Novidades diárias e resumos dos melhores jogos. Fique por dentro do universo gamer!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => window.location.href = "/brindes"}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#E94560] to-[#FF6B9D] hover:from-[#FF6B9D] hover:to-[#E94560] transition-all duration-300 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Brindes
            </button>
            
            <button
              onClick={() => window.location.href = "/blog"}
              className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#E94560] text-[#E94560] hover:bg-[#E94560] hover:text-white transition-all duration-300 font-semibold rounded-lg"
            >
              Últimas Notícias
            </button>
          </div>

      
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-gradient-to-br from-[#1A1A2E] to-[#16213E] rounded-2xl p-6 shadow-2xl border border-[#E94560]/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E94560]/10 to-transparent opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#E94560] font-semibold text-sm">EM DESTAQUE</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-[#EAEAEA] font-semibold">{featuredGames[currentGame].rating}</span>
                  </div>
                </div>

                <div className="relative mb-4 rounded-xl overflow-hidden">
                  <img
                    src={featuredGames[currentGame].image}
                    alt={featuredGames[currentGame].title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#E94560] text-white px-2 py-1 rounded-md text-xs font-semibold">
                    {featuredGames[currentGame].genre}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#EAEAEA] mb-2">
                  {featuredGames[currentGame].title}
                </h3>
                
                <div className="flex justify-center space-x-2 mt-4">
                  {featuredGames.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentGame(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentGame ? 'bg-[#E94560]' : 'bg-[#EAEAEA]/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#E94560]/20 to-[#FF6B9D]/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
