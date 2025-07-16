export interface AffiliateCourse {
  id: string;
  title: string;
  description: string;
  image?: string;
  salesPageUrl: string;
  directPaymentUrl: string;
  category: 'teologia' | 'espiritualidade' | 'outros';
}

export const affiliateCourses: AffiliateCourse[] = [
  {
    id: 'curso-teologia-basica',
    title: 'Curso de Teologia Básica',
    description: 'Aprenda os fundamentos da teologia cristã com um curso completo e acessível, voltado para iniciantes.',
    image: 'https://m.media-amazon.com/images/I/412TjNFkSwL._SY445_SX342_PQ95_.jpg', // opcional, você pode ajustar depois
    salesPageUrl: 'https://go.hotmart.com/L100847958M',
    directPaymentUrl: 'https://go.hotmart.com/L100847958M?ap=5c85',
    category: 'teologia',
  },
  {
  id: 'curso-teologia-intermediaria', // você pode ajustar esse id para algo que faça sentido
  title: 'Curso de Teologia Intermediária',
  description: 'Aprofunde seus conhecimentos em teologia cristã com este curso intermediário, ideal para quem já conhece os fundamentos.',
  image: 'https://static-media.hotmart.com/nQfzelTFMk_trHS05dZRppMXnP0=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/0a5efe26-8a12-4708-ac42-3a2d2fb5eaf5/CAPACRISTAOTEOLOGICO3d.png?w=920', // se você tiver uma imagem, pode adicionar aqui
  salesPageUrl: 'https://go.hotmart.com/E100869045N',
  directPaymentUrl: 'https://go.hotmart.com/E100869045N?dp=1',
  category: 'teologia',
},
{
  id: 'teologia-sem-ministerio',
  title: 'Teologia Sem Mistério',
  description: `O curso de Teologia sem mistério foi criado para aqueles que desejam dar o passo principal para o conhecimento das Escrituras Sagradas. Todas as objeções serão quebradas e sua mente será transformada. Vamos aprender sobre a criação do homem, a queda do Luzeiro, como era o mundo de Deus antes da Terra ser criada. Onde o Espírito Santo estava? O que Ele fazia? Como Deus criou a imagem perfeita? Quem era esta imagem perfeita? Se respondeu Adão, lamento dizer, você errou. Adão foi uma ideia secundária de Deus.`,
  image: 'https://static-media.hotmart.com/Ef_HIjsQ0a8YbXIPIabh6a44jNc=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/3206c33d-ca9a-468a-b067-3e4df74cf059/50DESCONTO.png?w=920', // pode trocar se quiser uma imagem específica
  salesPageUrl: 'https://go.hotmart.com/O100869293N?dp=1',
  directPaymentUrl: 'https://go.hotmart.com/O100869293N?dp=1',
  category: 'teologia',
}


  // Adicione mais cursos aqui depois
];
