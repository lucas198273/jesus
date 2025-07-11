import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Politicas() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0F0F23]/95 pt-24 pb-12 px-4">
        <Helmet>
          <title>Políticas de Privacidade e Termos de Uso - Nosso Blog de Tecnologia</title>
          <meta name="description" content="Leia nossas políticas de privacidade e termos de uso. Entenda como protegemos suas informações e as regras de participação em nossos brindes." />
          <meta name="keywords" content="políticas de privacidade, termos de uso, blog de tecnologia, brindes, Steam" />
        </Helmet>

        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow mb-2">
            Políticas de Privacidade e Termos de Uso
          </h1>
          <p className="text-gray-300">
            Bem-vindo ao nosso blog sobre tecnologia! Aqui, você encontrará informações sobre como tratamos suas informações e as regras para participar de nossos brindes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto text-gray-300">
          <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
          <p className="mb-4">
            Nós respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Não coletamos informações pessoais sem o seu consentimento. As informações que você fornece ao participar de nossos brindes são usadas apenas para fins de contato e para a entrega dos prêmios.
          </p>
          <p className="mb-4">
            Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros. No entanto, podemos compartilhar informações com parceiros de confiança que nos ajudam a operar nosso site ou conduzir nossos negócios, desde que esses parceiros concordem em manter essas informações confidenciais.
          </p>

          <h2 className="text-2xl font-bold mb-4">Termos de Uso</h2>
          <p className="mb-4">
            Ao acessar nosso blog, você concorda em cumprir e estar sujeito a estes termos de uso. Os brindes que oferecemos são exclusivamente para fins de entretenimento e não garantimos a disponibilidade de prêmios.
          </p>
          <p className="mb-4">
            Reservamo-nos o direito de modificar ou encerrar os brindes a qualquer momento, sem aviso prévio. Ao participar, você concorda em seguir todas as regras e diretrizes estabelecidas.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <p className="mb-4">
            Se você tiver alguma dúvida sobre nossas políticas ou termos, sinta-se à vontade para entrar em contato conosco através do nosso site.
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
}
