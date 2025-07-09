// src/data/recipes.ts

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  sensations?: string[];
  time: { prep: number; cook: number; total: number };
  servings: number;
  category: string;
  tags?: string[];
  available?: boolean;
}

export const recipes: Recipe[] = [
  {
    id: "cloud-bread-2-0",
    title: "Cloud Bread 2.0 (Pão Nuvem Proteico)",
    slug: "cloud-bread-2-0",
    imageUrl: "/assets/receitas/OIP-1.webp",
    description: "Pão nuvem super fofo, com alto teor proteico e baixo carboidrato – feito com claras e iogurte grego.",
    ingredients: [
      "4 claras em temperatura ambiente",
      "½ colher de chá de cream of tartar ou 1 colher de chá de suco de limão",
      "3 colheres de sopa de iogurte grego",
      "1 pitada de sal",
      "Opcional: sementes de gergelim"
    ],
    instructions: [
      "Pré-aqueça o forno a 150 °C e forre uma assadeira com papel manteiga.",
      "Bata as claras com sal e cream of tartar até picos firmes (~4‑5 min).",
      "Misture o iogurte e incorpore delicadamente às claras.",
      "Modele discos (~10 cm) e asse por 25‑30 minutos até dourar.",
      "Deixe esfriar antes de servir."
    ],
    sensations: ["leve", "fofo", "proteico", "baixo carboidrato"],
    time: { prep: 10, cook: 30, total: 40 },
    servings: 3,
    category: "entrada",
    tags: ["gluten-free", "keto", "proteico", "snack"],
    available: true
  },
  {
    id: "smash-burger-tacos",
    title: "Tacos Smash Burger (Tacos Big Mac)",
    slug: "smash-burger-tacos",
    imageUrl: "/assets/receitas/OIP-2.jpg",
    description: "Hambúrguer prensado direto na tortilha, grelhado até ficar crocante e finalizado com queijo, picles e molho especial.",
    ingredients: [
      "1,5 lb de carne moída 80/20",
      "1 colher de chá de sal",
      "½ colher de chá de pimenta-do-reino",
      "6 tortilhas de farinha pequenas (15 cm)",
      "6 fatias de queijo americano (ou outro à escolha)",
      "Alface picada, cebola picada, picles de endro",
      "Molho de hambúrguer caseiro"
    ],
    instructions: [
      "Misture a carne com sal e pimenta.",
      "Espalhe a carne sobre as tortilhas formando uma camada fina.",
      "Aqueça uma frigideira com um pouco de óleo e grelhe as tortilhas com a carne para baixo.",
      "Vire, adicione o queijo e tampe até derreter.",
      "Finalize com os toppings e sirva quente."
    ],
    sensations: ["crocante", "suculento", "cheio de sabor", "hamburgão reinventado"],
    time: { prep: 10, cook: 5, total: 15 },
    servings: 6,
    category: "entrada",
    tags: ["taco", "hamburguer", "bigmac", "americano", "jantar rápido"],
    available: true
  },
  {
    id: "ube-mochi-pancakes",
    title: "Ube Mochi Pancakes",
    slug: "ube-mochi-pancakes",
    imageUrl: "/assets/receitas/OIP-3.jpg",
    description: "Panquecas roxas e sem glúten com textura chewy, feitas com ube e mochi – perfeitas para um brunch estético.",
    ingredients: [
      "2 xícaras de farinha de arroz glutinoso",
      "2 colheres de sopa de açúcar",
      "2 colheres de chá de fermento em pó",
      "½ colher de chá de sal",
      "1 xícara de leite de coco",
      "2 ovos",
      "2 colheres de chá de extrato de ube",
      "Ube halaya (opcional)",
      "Óleo ou manteiga para fritar"
    ],
    instructions: [
      "Misture a farinha, açúcar, fermento e sal.",
      "Adicione o leite de coco, ovos e extrato de ube até formar uma massa homogênea.",
      "Aqueça a frigideira e frite porções da massa até dourar dos dois lados.",
      "Sirva com frutas e xarope de bordo."
    ],
    sensations: ["chewy", "doce", "colorido", "gluten-free"],
    time: { prep: 5, cook: 20, total: 25 },
    servings: 6,
    category: "entrada",
    tags: ["ube", "mochi", "gluten-free", "viral"],
    available: true
  },



  {
  id: "air-fryer-pasta-chips",
  title: "Macarrão Chips na Air Fryer",
  slug: "air-fryer-pasta-chips",
  imageUrl: "/assets/receitas/OIP-4.webp",
  description: "Chips crocantes de macarrão feitos na air fryer em menos de 20 minutos. Um lanche irresistível, fácil, personalizável e perfeito para petiscar com molhos.",
  ingredients: [
    "2 xícaras de rigatoni ou farfalle (pode ser normal, integral, grão-de-bico ou sem glúten)",
    "1 a 2 colheres de sopa de azeite extravirgem",
    "1 colher de chá de tempero italiano",
    "1 colher de chá de alho em pó",
    "½ colher de chá de sal",
    "¼ colher de chá de pimenta-do-reino",
    "½ xícara de queijo parmesão ralado"
  ],
  instructions: [
    "Ferva água com sal e cozinhe o macarrão até ficar al dente. Escorra e transfira para uma tigela.",
    "Pré-aqueça a air fryer a 200 °C (380°F).",
    "Misture o macarrão cozido com azeite, tempero italiano, alho em pó, sal, pimenta e parmesão até ficar bem envolvido.",
    "Transfira o macarrão temperado para a cesta da air fryer em uma única camada.",
    "Cozinhe por 10 a 14 minutos, sacudindo a cesta na metade do tempo, até dourar e ficar crocante.",
    "Sirva imediatamente. Decore com mais parmesão e salsinha fresca, se desejar."
  ],
  sensations: ["crocante", "cheesy", "divertido", "inovador"],
  time: { prep: 10, cook: 10, total: 20 },
  servings: 4,
  category: "entrada",
  tags: [
    "snack",
    "macarrão crocante",
    "air fryer",
    "petisco rápido",
    "sem fritura",
    "receita fácil",
    "lanche saudável",
    "sem glúten",
    "viral"
  ],
  available: true
},

{
  id: "chickpea-tuna-salad",
  title: "Chickpea Tuna Salad Vegana",
  slug: "chickpea-tuna-salad",
  imageUrl: "/assets/receitas/OIP-5.jpg",
  description: "Salada vegana cremosa e proteica de grão-de-bico com nori – perfeita para sanduíches, wraps ou como acompanhamento.",
  ingredients: [
    "2 latas (15 oz cada) de grão-de-bico cozido, drenado e enxaguado",
    "1 folha de nori picada (ou 1 colher de chá de flocos de alga kelp)",
    "4 colheres de sopa de relish de picles de endro",
    "2 colheres de sopa de suco de limão fresco",
    "1 talo de aipo picado",
    "2 colheres de sopa de cebola roxa picada ou cebolinha",
    "½ xícara de maionese vegana",
    "½ a 1 colher de chá de sal (ou molho de soja)",
    "Pimenta-do-reino a gosto",
    "Opcional: 2 colheres de sopa de pimentões picados e 1 colher de chá de alcaparras picadas"
  ],
  instructions: [
    "Em uma tigela grande, amasse o grão-de-bico com um amassador de batatas ou um garfo até que esteja principalmente amassado, deixando alguns pedaços inteiros para textura.",
    "Adicione o nori picado (ou flocos de alga kelp), relish de picles, suco de limão, aipo, cebola roxa, maionese vegana, sal e pimenta. Misture bem até que todos os ingredientes estejam incorporados.",
    "Prove e ajuste o tempero, adicionando mais sal, pimenta ou suco de limão conforme necessário.",
    "Sirva imediatamente em sanduíches, wraps ou sobre uma cama de folhas verdes. Também pode ser armazenado na geladeira por até 4 dias em um recipiente hermético."
  ],
  sensations: ["cremoso", "refrescante", "proteico", "vegano", "saboroso"],
  time: { prep: 10, cook: 0, total: 10 },
  servings: 6,
  category: "vegano",
  tags: ["vegano", "rápido", "proteína", "para viagem", "sem glúten", "sem soja"],
  available: true
},

  {
    id: "vegan-mug-cake",
    title: "Vegan Mug Cake",
    slug: "vegan-mug-cake",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Bolo de caneca vegano, fofinho e molhadinho, pronto em menos de 2 minutos.",
    ingredients: [
      "4 tbsp farinha de trigo",
      "2 tbsp açúcar (ou mascavo)",
      "1/2 tsp fermento químico",
      "3 tbsp leite vegetal",
      "2 tbsp óleo vegetal",
      "1 tsp essência de baunilha"
    ],
    instructions: [
      "Misture todos os ingredientes na caneca até ficar homogêneo :contentReference[oaicite:16]{index=16}",
      "Leve ao micro-ondas por 90–120 segundos até crescer e firmar"
    ],
    sensations: ["rápido", "fofo", "confortante"],
    time: { prep: 5, cook: 2, total: 7 },
    servings: 1,
    category: "vegan",
    tags: ["vegano", "rápido", "sobremesa", "caneca"],
    available: true
  },
  {
    id: "homemade-oat-milk",
    title: "Homemade Oat Milk",
    slug: "homemade-oat-milk",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Leite de aveia caseiro, cremoso e econômico — ideal para lattes, bolos e cafés.",
    ingredients: [
      "1 cup aveia em flocos",
      "4 cups água fria",
      "¼ tsp sal",
      "Opcional: 1 tbsp xarope de bordo, pitada de canela"
    ],
    instructions: [
      "Bata aveia, água e sal por 20‑30 seg :contentReference[oaicite:17]{index=17}",
      "Coe com pano ou coador fino",
      "Armazene na geladeira por até 5 dias, agite antes de usar"
    ],
    sensations: ["cremoso", "suave", "econômico", "vegan"],
    time: { prep: 5, cook: 0, total: 5 },
    servings: 4,
    category: "vegano",
    tags: ["vegano", "leite vegetal", "econômico"],
    available: true
  },
  // 10. Tofu Scramble
  
];
