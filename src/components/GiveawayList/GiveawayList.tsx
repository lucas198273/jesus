// src/components/GiveawayList.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Giveaway {
  id: number;
  title: string;
  description: string;
  worth: string;
  thumbnail: string;
  image: string;
  instructions: string;
  open_giveaway_url: string;
  published_date: string;
  type: string;
  platforms?: string | string[]; // Pode ser string ou array, opcional
  status: string;
  end_date: string;
}

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return (
      <div className="text-center text-red-600 p-4">
        Ocorreu um erro ao carregar os brindes. Tente recarregar a página.
      </div>
    );
  }

  return <>{children}</>;
};

const GiveawayList: React.FC = () => {
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const RAPIDAPI_KEY = "46351c28d5msh23168489d55362dp129cb5jsn45784380f2ce";
  const RAPIDAPI_HOST = "gamerpower.p.rapidapi.com";

  useEffect(() => {
    const fetchGiveaways = async () => {
      try {
        const response = await axios.get("https://gamerpower.p.rapidapi.com/api/filter", {
          headers: {
            "x-rapidapi-key": RAPIDAPI_KEY,
            "x-rapidapi-host": RAPIDAPI_HOST,
          },
          params: {
            platform: "epic-games-store.steam.android",
            type: "game.loot",
          },
        });
        console.log("Resposta da API:", response.data);
        setGiveaways(response.data);
        setLoading(false);
      } catch (err) {
        let errorMessage = "Erro ao carregar os brindes. Verifique a conexão ou o endpoint.";
        if (err instanceof Error) {
          errorMessage = err.message || errorMessage;
          if ("response" in err && err.response && "data" in err.response) {
            console.error("Erro detalhado:", (err.response as any).data || err.message);
          } else {
            console.error("Erro detalhado:", err.message);
          }
        } else {
          console.error("Erro desconhecido:", err);
        }
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchGiveaways();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Carregando brindes...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!giveaways.length) return <p className="text-center text-gray-600">Nenhum brinde ativo no momento.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">Brindes de Jogos Gratuitos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {giveaways.map((giveaway) => (
          <div key={giveaway.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img
              src={giveaway.thumbnail || giveaway.image || "https://via.placeholder.com/300x200"}
              alt={giveaway.title}
              className="w-full h-48 object-cover"
              loading="lazy"
              onError={(e) => {
                console.error(`Erro ao carregar imagem: ${giveaway.thumbnail || giveaway.image}`, e);
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x200";
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{giveaway.title}</h2>
              <p className="text-gray-600 text-sm mb-2">Valor: {giveaway.worth || "Não informado"}</p>
              <p className="text-gray-600 text-sm mb-2">
                Plataformas: {Array.isArray(giveaway.platforms) ? giveaway.platforms.join(", ") : giveaway.platforms || "Não informado"}
              </p>
              <p className="text-gray-600 text-sm mb-2">Tipo: {giveaway.type}</p>
              <p className="text-gray-600 text-sm mb-2">Validade: {new Date(giveaway.end_date).toLocaleDateString()}</p>
              <a
                href={giveaway.open_giveaway_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Participar
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        Dados fornecidos por <a href="https://gamerpower.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GamerPower.com</a>
      </p>
    </div>
  );
};

export default GiveawayList;