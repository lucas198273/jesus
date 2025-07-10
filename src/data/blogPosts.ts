// data/blogPosts.ts

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  gallery?: string[];
  category: 'review' | 'news' | 'guide' | 'opinion';
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readTime: number; // em minutos
  rating?: number; // 1-10 para reviews
  gameInfo?: {
    title: string;
    developer: string;
    publisher: string;
    releaseDate: string;
    platforms: string[];
    genre: string[];
    price?: number;
    steamId?: string;
    metacriticScore?: number;
  };
  seoMeta: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage: string;
  };
  featured: boolean;
  status: 'published' | 'draft' | 'scheduled';
  views: number;
  likes: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cyberpunk 2077: Phantom Liberty - A Redenção Esperada",
    slug: "cyberpunk-2077-phantom-liberty-review",
    excerpt: "Depois de anos de polêmica, Cyberpunk 2077 finalmente entrega o que prometeu com a expansão Phantom Liberty. Descubra se vale a pena voltar para Night City.",
    content: `
      <h2>Uma Nova Chance para Night City</h2>
      <p>Cyberpunk 2077: Phantom Liberty representa muito mais que uma simples expansão - é uma declaração de intenções da CD Projekt RED, mostrando que aprenderam com os erros do lançamento contconturbado do jogo base.</p>
      
      <h3>História e Narrativa</h3>
      <p>A narrativa de Phantom Liberty é facilmente uma das melhores já criadas pela CD Projekt RED. Com Keanu Reeves retornando como Johnny Silverhand e a adição de Idris Elba como Solomon Reed, a química entre os personagens é palpável.</p>
      
      <h3>Jogabilidade</h3>
      <p>As mecânicas de combate foram completamente reformuladas. O sistema de hacking agora é mais intuitivo, as armas têm peso e impacto reais, e a inteligência artificial dos inimigos foi significativamente melhorada.</p>
      
      <h3>Aspectos Técnicos</h3>
      <p>Visualmente, Phantom Liberty é deslumbrante. Os efeitos de ray tracing, especialmente em Night City durante a noite, criam uma atmosfera cyberpunk autêntica que faltava no lançamento original.</p>
      
      <h3>Conclusão</h3>
      <p>Phantom Liberty não é apenas uma expansão - é a versão definitiva de Cyberpunk 2077. Se você estava esperando o momento certo para mergulhar em Night City, esse momento chegou.</p>
    `,
    featuredImage: "/assets/blog/cyberpunk-phantom-liberty.webp",
    gallery: [
      "/assets/blog/cyberpunk-1.webp",
      "/assets/blog/cyberpunk-2.webp",
      "/assets/blog/cyberpunk-3.webp"
    ],
    category: "review",
    tags: ["cyberpunk", "cd projekt red", "rpg", "expansão", "review"],
    author: {
      name: "João Silva",
      avatar: "/assets/authors/joao-silva.webp",
      bio: "Especialista em RPGs e jogos narrativos com mais de 10 anos de experiência no jornalismo de games."
    },
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-16T14:30:00Z",
    readTime: 8,
    rating: 9.2,
    gameInfo: {
      title: "Cyberpunk 2077: Phantom Liberty",
      developer: "CD Projekt RED",
      publisher: "CD Projekt",
      releaseDate: "2023-09-26",
      platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
      genre: ["RPG", "Ação", "Aventura"],
      price: 29.99,
      steamId: "1091500",
      metacriticScore: 89
    },
    seoMeta: {
      metaTitle: "Cyberpunk 2077: Phantom Liberty Review - A Redenção Esperada | GameHub",
      metaDescription: "Review completa de Cyberpunk 2077: Phantom Liberty. Descubra se a expansão conseguiu redimir o jogo base e se vale a pena voltar para Night City.",
      keywords: ["cyberpunk 2077", "phantom liberty", "review", "cd projekt red", "expansão"],
      ogImage: "/assets/blog/cyberpunk-phantom-liberty-og.webp"
    },
    featured: true,
    status: "published",
    views: 15420,
    likes: 892
  },
  {
    id: "2",
    title: "The Legend of Zelda: Tears of the Kingdom - Guia Completo de Início",
    slug: "zelda-tears-kingdom-guia-inicio",
    excerpt: "Começando em Tears of the Kingdom? Este guia completo te ajudará a dominar os primeiros passos no novo Hyrule e aproveitar ao máximo a aventura.",
    content: `
      <h2>Primeiros Passos no Novo Hyrule</h2>
      <p>Tears of the Kingdom oferece uma experiência ainda mais rica que seu predecessor. Este guia te ajudará a começar com o pé direito.</p>
      
      <h3>Habilidades Fundamentais</h3>
      <p>As novas habilidades de Link revolucionam a jogabilidade. Fuse permite combinar objetos para criar armas únicas, enquanto Ultrahand possibilita construções complexas.</p>
      
      <h3>Sistema de Construção</h3>
      <p>O sistema de construção é o coração de Tears of the Kingdom. Aprenda a pensar fora da caixa e experimentar diferentes combinações para resolver puzzles creativamente.</p>
      
      <h3>Dicas de Exploração</h3>
      <p>Hyrule agora tem três camadas: subsolo, superfície e céu. Cada região oferece recursos únicos e desafios específicos. Planeje sua exploração considerando todos os níveis.</p>
    `,
    featuredImage: "/assets/blog/zelda-tears-kingdom.webp",
    category: "guide",
    tags: ["zelda", "tears of the kingdom", "nintendo", "guia", "tutorial"],
    author: {
      name: "Maria Santos",
      avatar: "/assets/authors/maria-santos.webp",
      bio: "Especialista em jogos Nintendo e criadora de conteúdo focada em guias e tutoriais."
    },
    publishedAt: "2024-01-20T15:00:00Z",
    readTime: 12,
    gameInfo: {
      title: "The Legend of Zelda: Tears of the Kingdom",
      developer: "Nintendo EPD",
      publisher: "Nintendo",
      releaseDate: "2023-05-12",
      platforms: ["Nintendo Switch"],
      genre: ["Aventura", "Ação", "Puzzle"],
      price: 59.99,
      metacriticScore: 96
    },
    seoMeta: {
      metaTitle: "Zelda: Tears of the Kingdom - Guia Completo para Iniciantes | GameHub",
      metaDescription: "Guia completo para começar em The Legend of Zelda: Tears of the Kingdom. Dicas, estratégias e tudo que você precisa saber para dominar Hyrule.",
      keywords: ["zelda", "tears of the kingdom", "guia", "tutorial", "nintendo", "hyrule"],
      ogImage: "/assets/blog/zelda-tears-kingdom-og.webp"
    },
    featured: true,
    status: "published",
    views: 23150,
    likes: 1247
  },
  {
    id: "3",
    title: "PlayStation 5 Pro: Vazamentos Revelam Especificações Impressionantes",
    slug: "playstation-5-pro-vazamentos-especificacoes",
    excerpt: "Novos vazamentos sugerem que o PlayStation 5 Pro pode chegar ainda este ano com melhorias significativas em performance e ray tracing.",
    content: `
      <h2>O Que Sabemos Sobre o PS5 Pro</h2>
      <p>Vazamentos recentes de desenvolvedores indicam que a Sony está trabalhando em uma versão Pro do PlayStation 5, com foco em melhorar a performance em jogos 4K e ray tracing.</p>
      
      <h3>Especificações Rumoreadas</h3>
      <p>Segundo as fontes, o PS5 Pro contará com uma GPU significativamente mais poderosa, capaz de entregar 4K nativo em mais jogos e ray tracing mais estável.</p>
      
      <h3>Data de Lançamento</h3>
      <p>As especulações apontam para um lançamento no final de 2024, coincidindo com grandes lançamentos exclusivos da Sony.</p>
    `,
    featuredImage: "/assets/blog/ps5-pro-rumors.webp",
    category: "news",
    tags: ["playstation", "ps5 pro", "sony", "console", "hardware"],
    author: {
      name: "Carlos Oliveira",
      avatar: "/assets/authors/carlos-oliveira.webp",
      bio: "Jornalista especializado em indústria de games e tecnologia, com foco em hardware e tendências de mercado."
    },
    publishedAt: "2024-01-25T09:00:00Z",
    readTime: 5,
    seoMeta: {
      metaTitle: "PlayStation 5 Pro: Vazamentos Revelam Especificações | GameHub",
      metaDescription: "Novos vazamentos do PS5 Pro revelam especificações impressionantes. Confira tudo sobre a nova versão do console da Sony.",
      keywords: ["ps5 pro", "playstation 5 pro", "sony", "console", "hardware", "vazamentos"],
      ogImage: "/assets/blog/ps5-pro-rumors-og.webp"
    },
    featured: false,
    status: "published",
    views: 8930,
    likes: 456
  }
];

// Funções auxiliares para manipular os posts
export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category && post.status === 'published');
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured && post.status === 'published');
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => 
    post.tags.includes(tag) && post.status === 'published'
  );
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const searchPosts = (query: string): BlogPost[] => {
  const searchTerm = query.toLowerCase();
  return blogPosts.filter(post => 
    post.status === 'published' && (
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      post.gameInfo?.title.toLowerCase().includes(searchTerm)
    )
  );
};