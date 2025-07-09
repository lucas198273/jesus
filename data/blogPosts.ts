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
    excerpt: "Depois de anos de polêmicas, Cyberpunk 2077 finalmente entrega o prometido com a expansão Phantom Liberty. Saiba se vale a pena revisitar Night City.",
    content: `
      <h2>Uma Nova Oportunidade para Night City</h2>
      <p>Cyberpunk 2077: Phantom Liberty vai além de uma simples expansão — representa a resposta da CD Projekt RED aos erros do lançamento inicial, consolidando a evolução do RPG futurista.</p>

      <h3>História e Narrativa Imersivas</h3>
      <p>A trama de Phantom Liberty é uma das mais envolventes já desenvolvidas pela CD Projekt RED. Com o retorno de Keanu Reeves como Johnny Silverhand e Idris Elba interpretando Solomon Reed, a dinâmica entre personagens traz profundidade e autenticidade.</p>

      <h3>Jogabilidade Renovada</h3>
      <p>O combate foi revisado completamente, com sistema de hacking mais fluido, armas que apresentam peso real e uma inteligência artificial adversária aprimorada, elevando o desafio e a imersão.</p>

      <h3>Qualidade Técnica e Visual</h3>
      <p>Visualmente, Phantom Liberty impressiona. Os efeitos avançados de ray tracing, especialmente à noite em Night City, criam uma atmosfera cyberpunk detalhada e envolvente, superando o desempenho inicial do jogo base.</p>

      <h3>Conclusão: A Versão Definitiva de Cyberpunk 2077</h3>
      <p>Phantom Liberty consolida Cyberpunk 2077 como um dos RPGs mais impactantes da geração. Se você esperava o momento ideal para voltar a Night City, ele chegou.</p>

      <p><small>Fonte: <a href="https://www.metacritic.com/game/pc/cyberpunk-2077-phantom-liberty" target="_blank" rel="noopener noreferrer">Metacritic (2024)</a></small></p>
    `,
    featuredImage: "/assets/cyber/cyber.webp",
    gallery: [
      "/assets/cyber/cyber.webp",
      "/assets/cyber/cyber2.webp",
      "/assets/cyber/cyber3.webp"
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
      metaDescription: "Review completa de Cyberpunk 2077: Phantom Liberty. Descubra se a expansão redime o jogo base e vale a pena revisitar Night City.",
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
    title: "The Legend of Zelda: Tears of the Kingdom - Guia Completo para Iniciantes",
    slug: "zelda-tears-kingdom-guia-inicio",
    excerpt: "Comece sua jornada em Tears of the Kingdom com este guia completo. Domine os primeiros passos e explore o novo mundo de Hyrule ao máximo.",
    content: `
      <h2>Primeiros Passos em um Novo Hyrule</h2>
      <p>Tears of the Kingdom oferece uma experiência expandida e mais profunda que seu predecessor. Este guia essencial ajudará você a começar sua aventura com confiança.</p>

      <h3>Habilidades Fundamentais de Link</h3>
      <p>As novas habilidades revolucionam a jogabilidade. Com Fuse, combine objetos para criar armas e ferramentas inéditas; Ultrahand permite construções inovadoras, fundamentais para resolver puzzles complexos.</p>

      <h3>Sistema de Construção Inovador</h3>
      <p>O sistema de construção é o coração do gameplay, estimulando criatividade e estratégia para enfrentar desafios variados. Explore diferentes combinações para avançar em sua jornada.</p>

      <h3>Dicas Essenciais para Exploração</h3>
      <p>Hyrule agora é dividido em três camadas: subsolo, superfície e céu. Cada nível oferece recursos exclusivos e desafios únicos, exigindo planejamento cuidadoso para maximizar sua exploração.</p>

      <p><small>Fonte: <a href="https://www.nintendo.com/games/detail/the-legend-of-zelda-tears-of-the-kingdom-switch/" target="_blank" rel="noopener noreferrer">Nintendo Oficial (2023)</a></small></p>
    `,
    featuredImage: "/assets/zelda.jpg",
    category: "guide",
    tags: ["zelda", "tears of the kingdom", "nintendo", "guia", "tutorial"],
    author: {
      name: "Maria Santos",
      avatar: "/assets/zelda.jpg",
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
      metaDescription: "Guia completo para iniciar em The Legend of Zelda: Tears of the Kingdom. Dicas e estratégias para dominar Hyrule.",
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
    excerpt: "Novos vazamentos indicam que o PlayStation 5 Pro pode ser lançado ainda em 2024, com melhorias significativas em performance e ray tracing.",
    content: `
      <h2>O Que Sabemos Sobre o PS5 Pro</h2>
      <p>De acordo com vazamentos recentes, a Sony está desenvolvendo o PlayStation 5 Pro, focado em aprimorar a performance para jogos em 4K e oferecer ray tracing mais estável.</p>

      <h3>Especificações Rumoreadas</h3>
      <p>Fontes apontam para uma GPU mais potente, capaz de rodar títulos em 4K nativo com maior fluidez, além de melhorias no suporte a ray tracing para gráficos mais realistas.</p>

      <h3>Data Prevista de Lançamento</h3>
      <p>As especulações indicam lançamento para o final de 2024, possivelmente alinhado com lançamentos exclusivos da Sony, aumentando a competitividade no mercado de consoles.</p>

      <p><small>Fonte: <a href="https://www.techradar.com/news/ps5-pro" target="_blank" rel="noopener noreferrer">TechRadar (2024)</a></small></p>
    `,
    featuredImage: "/assets/ps4.webp",
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
      metaDescription: "Confira os vazamentos mais recentes sobre o PlayStation 5 Pro e suas especificações técnicas impressionantes.",
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