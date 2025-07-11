// data/blogPosts.ts

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  gallery?: string[];
  videos?: string[];
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
  title: "Lost in Random: The Eternal Die – Review Hades‑Like Estiloso e Competente",
  slug: "lost-in-random-the-eternal-die-review",
  excerpt: "Lost in Random: The Eternal Die é um roguelike estilo Hades com estética Burtonesca, mecânicas de dado e combate estratégico que brilham em 2025.",
  content: `
    <h2>Hades‑Like com Toque Sombrio e Surpreendente</h2>
    <p><strong>Lost in Random: The Eternal Die</strong>, spin‑off da aventura de 2021, aposta num roguelike ágil e desafiador, inspirado em Hades, mantendo o charme peculiar de sua ambientação</p>

    <h3>Combate e Mecânicas Estratégicas</h3>
    <p>Aleksandra usa quatro armas principais (espada, martelo, lança e arco), complementadas por cartas e seu dado companheiro, o Fortune — que adiciona variabilidade e timing tático. A estratégia é reforçada por mais de 100 relíquias e mecânicas de matching de cores para buffs.</p>

    <h3>Visual e Áudio de Excelência</h3>
    <p>Com estética inspirada por Tim Burton, a direção de arte é um dos destaques — "gorgeous appearance", com arte em estilo “stop motion” e sons envolventes. A dublagem e trilha sonora completam a imersão .</p>

    <h3>Dificuldade e Acessibilidade</h3>
    <p>O combate é fluido e gratificante, com desafio crescente — embora o diretor reconheça que o jogo poderia ser ~10% mais difícil . Existe opção de Easy Mode e suporte a save/fast‑travel, tornando‑o mais acessível.</p>

    <h3>Pontos Fortes vs Limitações</h3>
    <ul>
      <li>✔ Agência táctica com múltiplas armas e sistema de relíquias.</li>
      <li>✔ Arte e ambientação únicas, visual e áudio memoráveis.</li>
      <li>✖ Repetição em inimigos e salas após várias runs :contentReference[oaicite:7]{index=7}.</li>
      <li>✖ Progressão de builds menos profunda que em Hades :contentReference[oaicite:8]{index=8}.</li>
    </ul>

    <h3>Vale a Pena?</h3>
    <p>Para fãs de roguelikes que buscam estilo, ritmo rápido e estratégia com toque de sorte, “The Eternal Die” é uma recomendação clara — equilibrando mecânicas sólidas com ambiente criativo :contentReference[oaicite:9]{index=9}.</p>

    <p><small>Fonte: Polygon (10/06/2025), GameBlast (10/06/2025), GameInform­er (16/05/2025), Universo Nintendo (10/06/2025)</small></p>
  `,
  featuredImage: "/assets/lost/lost.png",
  videos: [
    "4O7ZRXp56dc"
  ],    
  category: "review",
  tags: ["lost in random", "eternal die", "roguelike", "hades-like", "review 2025"],
  author: {
    name: "Eduardo Rocha",
    avatar: "/assets/authors/eduardo-rocha.webp",
    bio: "Especialista em reviews de roguelikes e narrativas sombrias, com foco em jogabilidade e estética."
  },
  publishedAt: "2025-07-09T14:00:00Z",
  readTime: 9,
  rating: 8.8,
  gameInfo: {
    title: "Lost in Random: The Eternal Die",
    developer: "Stormteller Games",
    publisher: "Thunderful Publishing",
    releaseDate: "2025-06-17",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    genre: ["Roguelike", "Ação", "Estratégia"],
    metacriticScore: 87
  },
  seoMeta: {
    metaTitle: "Lost in Random: The Eternal Die Review – Roguelike Estiloso 2025 | Universo Pixels",
    metaDescription: "Review de Lost in Random: The Eternal Die, um roguelike inspirado em Hades com combate ágil, estética Burtonesca e mecânicas únicas.",
    keywords: ["lost in random review", "eternal die", "roguelike 2025", "hades-like", "review jogos"],
    ogImage: "/assets/blog/lost-in-random-eternal-die-og.webp"
  },
  featured: true,
  status: "published",
  views: 0,
  likes: 0
}
,


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
    featuredImage: "/assets/zelda/zelda.jpg",
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
      metaTitle: "Zelda: Tears of the Kingdom - Guia Completo para Iniciantes | Universo Pixels",
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
    featuredImage: "/assets/ps5/ps5.webp",
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
      metaTitle: "PlayStation 5 Pro: Vazamentos Revelam Especificações | Universo Pixels",
      metaDescription: "Confira os vazamentos mais recentes sobre o PlayStation 5 Pro e suas especificações técnicas impressionantes.",
      keywords: ["ps5 pro", "playstation 5 pro", "sony", "console", "hardware", "vazamentos"],
      ogImage: "/assets/blog/ps5-pro-rumors-og.webp"
    },
    featured: false,
    status: "published",
    views: 8930,
    likes: 456
  },
  // Post 4
  {
  id: "4",
  title: "PS Plus Julho 2025: Cyberpunk 2077 Grátis e Destaques do Mês",
  slug: "ps-plus-julho-2025-cyberpunk-2077",
  excerpt: "Cyberpunk 2077 é gratuito para assinantes PS Plus em julho, além de uma nova leva de jogos incríveis como Banishers e Risk of Rain 2.",
  content: `
    <h2>Cyberpunk 2077 de Graça para Assinantes</h2>
    <p>Como parte do 15º aniversário da PlayStation Plus, a Sony disponibilizou <strong>Cyberpunk 2077</strong> gratuitamente para todos os assinantes do plano Essential até 23 de julho de 2025. A expansão <em>Phantom Liberty</em> também está com 30% de desconto.</p>

    <h3>Outros Jogos do Mês</h3>
    <ul>
      <li><strong>Banishers: Ghosts of New Eden</strong></li>
      <li><strong>Risk of Rain 2</strong></li>
      <li><strong>Tropico 6</strong></li>
      <li><strong>Mount & Blade II: Bannerlord</strong></li>
    </ul>

    <h3>Vale a pena assinar?</h3>
    <p>Com um lineup variado e títulos premiados, julho representa um dos melhores meses do serviço em 2025.</p>

    <p><small>Fonte: <a href="https://www.playstationlifestyle.net/2025/07/09/ps-plus-game-catalog-extra-premium-lineup-july-2025/" target="_blank">PlayStation Lifestyle - 09/07/2025</a></small></p>
  `,
  featuredImage: "/assets/psplus/psplus.webp",
  category: "news",
  tags: ["ps plus", "cyberpunk", "sony", "jogos gratuitos", "playstation"],
  author: {
    name: "Lucas Pereira",
    avatar: "/assets/psplus/psplus.webp",
    bio: "Redator e gamer desde criança, escreve sobre indústria, lançamentos e serviços de assinatura."
  },
  publishedAt: "2025-07-09T11:00:00Z",
  readTime: 6,
  seoMeta: {
    metaTitle: "PS Plus Julho 2025: Cyberpunk 2077 Grátis e Novos Jogos | Universo Pixels",
    metaDescription: "Confira os jogos do PS Plus de julho de 2025, incluindo Cyberpunk 2077 gratuito, descontos em DLCs e mais lançamentos.",
    keywords: ["ps plus julho 2025", "cyberpunk 2077 ps plus", "phantom liberty", "playstation plus", "jogos grátis julho"],
    ogImage: "/assets/psplus/psplus.webp"
  },
  featured: true,
  status: "published",
  views: 9810,
  likes: 647
},
// Post 5
{
  id: "5",
  title: "Roblox: Grow a Garden bate recorde com 21 milhões de jogadores simultâneos",
  slug: "roblox-grow-garden-recorde",
  excerpt: "O fenômeno Grow a Garden bate recorde histórico no Roblox com mais de 21 milhões de jogadores online ao mesmo tempo.",
  content: `
    <h2>Recorde Histórico no Roblox</h2>
    <p>O jogo <strong>Grow a Garden</strong>, lançado em março de 2025 na plataforma Roblox, atingiu um impressionante pico de <strong>21,3 milhões de jogadores simultâneos</strong> no dia 21 de junho de 2025, tornando-se um dos maiores sucessos da história dos jogos online.</p>

    <h3>O que é Grow a Garden?</h3>
    <p>Um simulador de fazenda cooperativo onde jogadores constroem, plantam e colhem juntos. A acessibilidade, sistema de progressão e mecânicas sociais são o segredo de seu sucesso.</p>

    <h3>Impacto na Comunidade</h3>
    <p>Influenciadores, escolas e até eventos ao vivo colaboraram para popularizar o título. O Roblox continua se firmando como um ecossistema criativo poderoso.</p>

    <p><small>Fonte: <a href="https://en.wikipedia.org/wiki/Grow_a_Garden" target="_blank">Wikipedia - Julho 2025</a></small></p>
  `,
  featuredImage: "/assets/roblox/roblox.jpg",
  category: "news",
  tags: ["roblox", "recorde", "grow a garden", "multiplayer", "games online"],
  author: {
    name: "Camila Ramos",
    avatar: "/assets/authors/camila-ramos.webp",
    bio: "Aficionada por cultura gamer e jogos sociais, cobre fenômenos de audiência e tendências emergentes."
  },
  publishedAt: "2025-07-08T10:00:00Z",
  readTime: 5,
  seoMeta: {
    metaTitle: "Grow a Garden: Roblox quebra recorde histórico em 2025 | Universo Pixels",
    metaDescription: "Roblox atinge novo marco com Grow a Garden, ultrapassando 21 milhões de jogadores simultâneos em junho de 2025.",
    keywords: ["roblox recorde", "grow a garden", "roblox 2025", "jogo mais jogado", "multiplayer", "simulador social"],
    ogImage: "/assets/blog/roblox-grow-garden-og.webp"
  },
  featured: true,
  status: "published",
  views: 12740,
  likes: 1052
},
// Post 6
{
  id: "6",
  title: "Tony Hawk’s Pro Skater 3+4 Remake chega em 11 de julho para todas as plataformas",
  slug: "tony-hawk-remake-julho-2025",
  excerpt: "Tony Hawk’s Pro Skater 3+4 Remake traz a nostalgia dos anos 2000 com gráficos modernos, novas músicas e multiplayer online.",
  content: `
    <h2>O Retorno da Lenda</h2>
    <p>O aguardado <strong>remake de Tony Hawk’s Pro Skater 3 e 4</strong> será lançado em 11 de julho de 2025 para PlayStation 5, Xbox Series X/S, PC e Nintendo Switch 2. O jogo traz pistas clássicas, sistema de combos polido e um novo modo carreira.</p>

    <h3>Nostalgia com Novidades</h3>
    <p>Com gráficos em 4K e novas faixas musicais licenciadas, o título oferece modos multiplayer online e editor de pistas com integração social.</p>

    <h3>Expectativas Elevadas</h3>
    <p>Após o sucesso do remake THPS 1+2, fãs esperam fidelidade à jogabilidade clássica com melhorias modernas.</p>

    <p><small>Fonte: <a href="https://www.pcgamer.com/games/july-2025-pc-game-release-calendar/" target="_blank">PC Gamer - Julho 2025</a></small></p>
  `,
  featuredImage: "/assets/tony/tony.webp",
  category: "news",
  tags: ["tony hawk", "remake", "skate", "thps 3", "thps 4", "lançamento"],
  author: {
    name: "Gabriel Nunes",
    avatar: "/assets/tony/tony.webp",
    bio: "Entusiasta de esportes radicais e nostálgico dos anos 2000, cobre relançamentos e clássicos modernos."
  },
  publishedAt: "2025-07-07T13:00:00Z",
  readTime: 5,
  seoMeta: {
    metaTitle: "Tony Hawk’s Pro Skater 3+4 Remake chega em julho | Universo Pixels",
    metaDescription: "Remake de Tony Hawk’s Pro Skater 3 e 4 será lançado em 11 de julho de 2025 com gráficos 4K e multiplayer online.",
    keywords: ["tony hawk 2025", "remake thps 3", "remake thps 4", "jogos de skate", "lançamento julho", "skate"],
    ogImage: "/assets/blog/tony-hawk-remake-2025-og.webp"
  },
  featured: false,
  status: "published",
  views: 7120,
  likes: 529
},
{
  id: "7",
  title: "Kingdom Come: Deliverance 2 – Uma Obras-Primas Medieval Renovada",
  slug: "kingdom-come-deliverance-2-review",
  excerpt: "Kingdom Come: Deliverance 2 chega em 2025 como um RPG medieval ambicioso e imersivo, superando expectativas com sistemas complexos e mundo vivo.",
  content: `
    <h2>Imersão Total no Mundo Medieval</h2>
    <p><strong>Kingdom Come: Deliverance 2</strong> é descrito como "um triunfo, tecendo sistemas complexos em um mundo medieval incrivelmente imersivo" – destacando-se como um dos melhores RPGs do ano até agora</p>

    <h3>Jogabilidade e Narrativa</h3>
    <p>O jogo mantém liberdade de escolha, incentivando exploração livre em campos, tavernas e emboscadas. O combate desafiador e realista eleva a experiência.</p>

    <h3>Performance e Recepção</h3>
    <p>Executado com estabilidade no PC, o jogo impressiona pela ambientação detalhada e narrativa rica, mantendo jogadores ativos por muitas horas.</p>

    <h3>Conclusão</h3>
    <p>Um RPG medieval profundo e elegante – ideal para quem busca um sistema robusto e mundo vivido.</p>

    <p><small>Fonte: TechRadar – 4 de julho de 2025</small></p>
  `,
  featuredImage: "/assets/king/king.jpg",
  category: "review",
  tags: ["kingdom come deliverance 2", "rpg medieval", "review 2025"],
  author: {
    name: "Fernanda Lima",
    avatar: "/assets/authors/fernanda-lima.webp",
    bio: "Jornalista de RPGs e jogos de mundo aberto, com foco em narrativa e imersão."
  },
  publishedAt: "2025-07-05T12:00:00Z",
  readTime: 7,
  rating: 9.0,
  gameInfo: {
    title: "Kingdom Come: Deliverance 2",
    developer: "Warhorse Studios",
    publisher: "Koch Media",
    releaseDate: "2025-01-01", // estimado
    platforms: ["PC"],
    genre: ["RPG", "Medieval", "Ação"],
    
  },
  seoMeta: {
    metaTitle: "Kingdom Come: Deliverance 2 Review – RPG Medieval Imersivo | Universo Pixels",
    metaDescription: "Confira nosso review de Kingdom Come: Deliverance 2, um RPG medieval complexo, imersivo e considerado um dos melhores jogos de 2025.",
    keywords: ["kingdom come deliverance 2", "review rpg medieval", "jogos 2025"],
    ogImage: "/assets/blog/kcd2-review-og.webp"
  },
  featured: false,
  status: "published",
  views: 0,
  likes: 0
},{
  id: "8",
  title: "FBC: Firebreak – Remédio ou Erro da Remedy?",
  slug: "fbc-firebreak-review",
  excerpt: "FBC: Firebreak traz um shooter tático com DNA de Control, mas peca em ritmo lento no início—vale a experiência cooperativa?",
  content: `
    <h2>Estreia da Remedy em Multiplayer</h2>
    <p>O spin-off <strong>FBC: Firebreak</strong> marca a entrada da Remedy no live-service, com jogabilidade sólida embora lenta nas primeiras horas.</p>

    <h3>Gameplay e Progressão</h3>
    <p>A construção de classes é recompensadora, e o tiroteio funciona bem – apesar de um início arrastado, o jogo se liberta quando o ritmo melhora.</p>

    <h3>Aspectos Técnicos e Visuais</h3>
    <p>Baseado no universo de Control, traz boa direção artística e engine Northlight, com visuais consistentes e coesão temática.</p>

    <h3>Conclusão</h3>
    <p>Recomendado para fãs do universo Remedy, especialmente em modo cooperativo. Uma experiência narrativa sólida, ainda que com ritmo gradual.</p>

    <p><small>Fonte: GameSpot – avaliação com nota 8/10 </small></p>
  `,
  featuredImage: "/assets/fbc/fbc.jpg",
  category: "review",
  tags: ["fbc firebreak", "remedy", "review multiplayer", "control universe"],
  author: {
    name: "Rafael Costa",
    avatar: "/assets/authors/rafael-costa.webp",
    bio: "Crítico de games, especializado em shooters e narrativas envolventes."
  },
  publishedAt: "2025-07-01T14:00:00Z",
  readTime: 6,
  rating: 8.0,
  gameInfo: {
    title: "FBC: Firebreak",
    developer: "Remedy Entertainment",
    publisher: "Remedy Entertainment",
    releaseDate: "2025-06-17",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    genre: ["FPS", "Multiplayer", "Tático"],
  
  },
  seoMeta: {
    metaTitle: "FBC: Firebreak Review – Remedy entra no mundo multiplayer | Universo Pixels",
    metaDescription: "Leia nossa análise de FBC: Firebreak, a estreia da Remedy no multiplayer que mistura ação e progressão inspirada em Control.",
    keywords: ["fbc firebreak", "remedy multiplayer", "review 2025", "control spin-off"],
    ogImage: "/assets/blog/fbc-firebreak-og.webp"
  },
  featured: false,
  status: "published",
  views: 0,
  likes: 0
},{
  id: "9",
  title: "Doom: The Dark Ages – Brutalidade Medieval com Estilo",
  slug: "doom-the-dark-ages-review",
  excerpt: "Doom: The Dark Ages transporta a brutalidade clássica da franquia para um cenário medieval, com novas armas, combates estratégicos e veículos poderosos.",
  content: `
    <h2>Reimaginação Medieval do Doom Slayer</h2>
    <p><strong>Doom: The Dark Ages</strong> leva o Doom Slayer a um cenário medieval em combate pesado, com armas corpo-a-corpo e escudo-serra para parry táticos .</p>

    <h3>Arsenal e Combate</h3>
    <p>Adição de escudo-serra, maça e flail trazem combate mais estratégico. Mecânica de slow-motion nos glory kills acrescenta peso e estilo.</p>

    <h3>Inovações Notáveis</h3>
    <p>Introduz pilotagem de veículos, como dragões cibernéticos e mechs gigantes, expandindo o escopo do combate clássico.</p>

    <h3>Recepção e Impacto Inicial</h3>
    <p>Lançado em 15 de maio de 2025 no Game Pass, alcançou 3 milhões de jogadores na primeira semana, recebendo críticas positivas.</p>

    <p><small>Fonte: Wikipedia – atualização em julho de 2025 :contentReference[oaicite:7]{index=7}</small></p>
  `,
  featuredImage: "/assets/doom/doom.jpg",
  gallery: [
    "/assets/doom/doom.jpg",
   "/assets/doom/doom.jpg",
   "/assets/doom/doom.jpg",
  ],
  videos: [
"d2wIMCybK98","ZxwwwN1C8lw"
  ],
  category: "review",
  tags: ["doom the dark ages", "doom medieval", "review fps", "2025 game"],
  author: {
    name: "Ana Beatriz",
    avatar: "/assets/authors/ana-beatriz.webp",
    bio: "Especialista em FPS e cultura retro-futurista nos games."
  },
  publishedAt: "2025-07-06T16:00:00Z",
  readTime: 8,
  rating: 9.1,
  gameInfo: {
    title: "Doom: The Dark Ages",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    releaseDate: "2025-05-15",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    genre: ["FPS", "Ação"],
  },
  seoMeta: {
    metaTitle: "Doom: The Dark Ages Review – FPS medieval brutal | Universo Pixels",
    metaDescription: "Confira nosso review de Doom: The Dark Ages, que traz o Slayer para a era medieval com armas, veículos e estratégia.",
    keywords: ["doom the dark ages", "review fps 2025", "doom medieval", "id software"],
    ogImage: "/assets/blog/doom-dark-ages-og.webp"
  },
  featured: false,
  status: "published",
  views: 0,
  likes: 0
}
,  {
    id: "10",
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
      metaTitle: "Cyberpunk 2077: Phantom Liberty Review - A Redenção Esperada | Universo Pixels",
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
  id: "11",
  title: "Assassin’s Creed Shadows – Guia Definitivo para Iniciantes",
  slug: "assassins-creed-shadows-guia-iniciante",
  excerpt: "Descubra os segredos de Assassin’s Creed Shadows com este guia completo: desde combate a exploração, ideal para novos jogadores.",
  content: `
    <h2>Entrando na Era de Naoe e Yasuke</h2>
    <p>Com lançamento em 14 de fevereiro de 2025, Assassin’s Creed Shadows traz um mundo aberto ambientado no Japão Feudal. Este guia vai ajudá-lo a entender as mecânicas iniciais e se adaptar ao estilo único do jogo</p>

    <h3>Combate e Arquitetura Stealth</h3>
    <p>Explore o sistema de combate refinado, que mistura furtividade e combate direto. Dicas sobre armas recomendadas e upgrades para Yasuke e Naoe.</p>

    <h3>Exploração e Missões Secundárias</h3>
    <p>O game oferece muitas atividades paralelas. Aprenda a balancear missões principais e secundárias para evoluir rápido e explorar o mapeamento do jogo.</p>

    <h3>Recompensas e Itens Essenciais</h3>
    <p>Encontre recursos valiosos e artefatos que aumentam seu desempenho no combate. Saiba onde buscar e como usá-los a seu favor.</p>

    <p><small>Fonte: <a href="https://www.gamesradar.com/assassins-creed-shadows-guide/" target="_blank" rel="noopener noreferrer">GamesRadar (2025)</a></small></p>
  `,
  featuredImage: "/assets/ass/ass-1.webp",
  videos:[
    "u6nnRfKrZy8"
  ],
  category: "guide",
  tags: ["assassins creed", "shadows", "ac shadows", "guia", "stealth"],
  author: {
    name: "Lucas Pereira",
    avatar: "/assets/ass/ass-1.webp",
    bio: "Gamer e criador de conteúdo especializado em jogos de ação e furtividade."
  },
  publishedAt: "2025-05-10T10:00:00Z",
  readTime: 10,
  gameInfo: {
    title: "Assassin’s Creed Shadows",
    developer: "Ubisoft",
    publisher: "Ubisoft",
    releaseDate: "2025-02-14",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    genre: ["Ação", "Stealth", "Aventura"],
    price: 69.99,
    metacriticScore: 92
  },
  seoMeta: {
    metaTitle: "Assassin’s Creed Shadows – Guia Completo para Iniciantes | Universo Pixels",
    metaDescription: "Aprenda o básico de Assassin’s Creed Shadows: dicas de combate, exploração e progressão para começar sua aventura no Japão Feudal.",
    keywords: ["assassins creed", "shadows", "guia", "stealth", "iniciante"],
    ogImage: "/assets/ass/ass-1.webp"
  },
  featured: true,
  status: "published",
  views: 15800,
  likes: 890
},{
  id: "12",
  title: "Monster Hunter Wilds – Guia de Caça Estratégica",
  slug: "monster-hunter-wilds-guia-estrategico",
  excerpt: "Domine as terras selvagens de Wilds com este guia estratégico: caças, equipamentos e dicas para sobreviver aos monstros mais imponentes.",
  content: `
    <h2>Bem-vindo ao Desafio das Terras Proibidas</h2>
    <p>Lançado em 28 de fevereiro de 2025, Monster Hunter Wilds expande a fórmula da série com um mundo mais interativo e profundo</p>

    <h3>Troca de Armas Estratégica</h3>
    <p>A novidade é a possibilidade de carregar duas armas e trocá-las usando seu Seikrets, criando combos adaptáveis conforme o monstro enfrentado.</p>

    <h3>Acampamentos Pop-Up & Dinâmica de Ambiente</h3>
    <p>Monte acampamentos em áreas-chave para restabelecer recursos no campo, sem precisar retornar à base.</p>

    <h3>Sistema de Feridas e Pontos Fracos</h3>
    <p>O novo sistema de feridas permite atacar pontos vulneráveis específicos dos monstros para causar dano extra .</p>

    <p><small>Fonte: <a href="https://en.wikipedia.org/wiki/Monster_Hunter_Wilds" target="_blank" rel="noopener noreferrer">Wikipedia (2025)</a></small></p>
  `,
  featuredImage: "/assets/monster/monster-1.webp",
  gallery: [
     "/assets/monster/monster-2.webp",
     "/assets/monster/monster-3.webp",
     "/assets/monster/monster-4.webp",
  ],
  category: "guide",
  tags: ["monster hunter", "wilds", "caça", "jogos", "capcom"],
  author: {
    name: "Ana Costa",
    avatar: "/assets/authors/ana-costa.jpg",
    bio: "Entusiasta de jogos action-RPG e guia de mecânicas complexas."
  },
  publishedAt: "2025-04-20T09:00:00Z",
  readTime: 11,
  gameInfo: {
    title: "Monster Hunter Wilds",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "2025-02-28",
    platforms: ["PC", "PS5", "Xbox Series X/S"],
    genre: ["Action RPG", "Cooperação", "Sobrevivência"],
    price: 69.99,
    metacriticScore: 88
  },
  seoMeta: {
    metaTitle: "Monster Hunter Wilds – Guia Estratégico de Caça | Universo Pixels",
    metaDescription: "Aprenda técnicas avançadas de Monster Hunter Wilds: como trocar armas, usar acampamentos pop‑up e explorar pontos fracos dos monstros.",
    keywords: ["monster hunter wilds", "guia", "caça", "capcom", "action rpg"],
    ogImage: "/assets/blog/mh-wilds-og.webp"
  },
  featured: true,
  status: "published",
  views: 0,
  likes: 0
},{
  id: "13",
  title: "Por que os Jogos AA estão Dominando em 2025",
  slug: "reflexao-jogos-aa-2025",
  excerpt: "Os jogos AA, de orçamento médio, estão ganhando destaque e entregando experiências inovadoras e de alta qualidade em 2025.",
  content: `
    <h2>O renascimento dos jogos AA</h2>
    <p>Em 2025, vimos títulos como <strong>Clair Obscur: Expedition 33</strong> e <strong>Split Fiction</strong> liderarem indicações ao Game of the Year, mostrando que jogos desenvolvidos por equipes menores podem oferecer qualidade de AAA sem os riscos exorbitantes — aclamados com notas acima de 90 no Metacritic e OpenCritic</p>

    <h3>Produção sustentável e criativa</h3>
    <p>Esses projetos custam menos e trazem equipes enxutas, focando na inovação, narrativa e arte, sem a burocracia dos estúdios gigantescos. É um modelo mais sustentável que agrada tanto desenvolvedores quanto jogadores.</p>

    <h3>O impacto no futuro do setor</h3>
    <p>Se Clair Obscur ganhar um grande prêmio, pode marcar uma mudança definitiva na percepção entre indie e AAA. Isso incentiva studios menores a investirem em suas visões criativas, sem a pressão de atingir metas astronômicas de vendas.</p>
  `,
  featuredImage: "/assets/aa/aa.jpg",
  category: "opinion",
  tags: ["AA games", "indie", "gaming trends", "2025"],
  author: {
    name: "Rafael Lima",
    avatar: "/assets/aa/aa.jpg",
    bio: "Analista de mercado gamer e entusiasta de narrativas interativas.",
  },
  publishedAt: "2025-07-11T12:00:00Z",
  readTime: 6,
  seoMeta: {
    metaTitle: "O Renascimento dos Jogos AA em 2025 | Universo Pixels",
    metaDescription: "Entenda por que jogos AA estão dominando 2025 e o que isso significa para a indústria.",
    keywords: ["AA games", "indústria gamer 2025", "Clair Obscur", "Split Fiction"],
    ogImage: "/assets/aa/aa.jpg"
  },
  featured: false,
  status: "published",
  views: 0,
  likes: 0
},
{
  id: "14",
  title: "A Revolução dos Jogos Baseados em Nuvem em 2025",
  slug: "revolucao-jogos-nuvem-2025",
  excerpt: "Os jogos baseados em nuvem estão transformando a forma como jogamos, oferecendo acessibilidade e experiências de alta qualidade em 2025.",
  content: `
    <h2>O Futuro dos Jogos na Nuvem</h2>
    <p>Em 2025, plataformas como <strong>Google Stadia</strong> e <strong>NVIDIA GeForce NOW</strong> estão redefinindo o acesso aos jogos, permitindo que jogadores desfrutem de títulos AAA em dispositivos que antes não suportavam gráficos avançados. A eliminação da necessidade de hardware caro está democratizando o acesso aos jogos.</p>

    <h3>Acessibilidade e Inclusão</h3>
    <p>Com a crescente popularidade dos jogos na nuvem, mais jogadores podem participar da comunidade gamer, independentemente de suas limitações financeiras ou de hardware. Isso está criando um ecossistema mais inclusivo, onde todos têm a chance de experimentar jogos de alta qualidade.</p>

    <h3>Desafios e Oportunidades</h3>
    <p>Embora a tecnologia de jogos na nuvem apresente desafios, como latência e dependência de uma conexão de internet estável, as inovações contínuas estão superando essas barreiras. O futuro parece promissor, com desenvolvedores explorando novas formas de criar experiências imersivas que aproveitam a nuvem.</p>
  `,
  featuredImage: "/assets/nuv/nuv.webp",
  category: "opinion",
  tags: ["cloud gaming", "tecnologia", "jogos 2025", "acessibilidade"],
  author: {
    name: "Mariana Souza",
    avatar: "/assets/cloud-gaming/mariana.jpg",
    bio: "Jornalista de tecnologia e apaixonada por inovações no mundo dos jogos.",
  },
  publishedAt: "2025-08-15T12:00:00Z",
  readTime: 5,
  seoMeta: {
    metaTitle: "A Revolução dos Jogos Baseados em Nuvem em 2025 | Universo Pixels",
    metaDescription: "Descubra como os jogos baseados em nuvem estão transformando a indústria em 2025 e o que isso significa para os jogadores.",
    keywords: ["cloud gaming", "jogos 2025", "acessibilidade", "tecnologia de jogos"],
    ogImage: "/assets/nuv/nuv.webp"
  },
  featured: true,
  status: "published",
  views: 0,
  likes: 0
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