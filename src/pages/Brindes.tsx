// src/pages/Brindes.tsx
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GiveawayList from "../components/GiveawayList/GiveawayList";

export default function Brindes() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0F0F23]/95 pt-24 pb-12 px-4">
        <Helmet>
          <title>Brindes e Sorteios da Steam - Participe Agora!</title>
          <meta name="description" content="Descubra os melhores brindes e sorteios da Steam. Participe e tenha a chance de ganhar prêmios incríveis!" />
          <meta name="keywords" content="brindes, sorteios, Steam, jogos, prêmios" />
        </Helmet>

        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">
            Brindes e Sorteios da Steam
          </h1>
          <p className="text-gray-300">
            Participe dos nossos sorteios e tenha a chance de ganhar jogos e brindes incríveis da Steam. Não perca essa oportunidade!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <GiveawayList />
        </div>
      </div>
    </HelmetProvider>
  );
}
