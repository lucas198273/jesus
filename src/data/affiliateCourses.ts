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
  // Adicione mais cursos aqui depois
];
