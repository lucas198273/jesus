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
  // 1. Cloud Bread 2.0
  {
  id: "cloud-bread-2-0",
  title: "Cloud Bread 2.0 (Pão Nuvem Proteico)",
  slug: "cloud-bread-2-0",
  imageUrl: "/assets/receitas/OIP-1.webp",
  description:
    "Pão nuvem fofo, baixo carbo e alto em proteínas, feito com claras e iogurte grego.",
  ingredients: [
    "4 claras em temperatura ambiente",
    "½ tsp cream of tartar ou 1 tsp suco de limão",
    "3 tbsp iogurte grego",
    "1 pitada de sal",
    "Opcional: sementes de gergelim"
  ],
  instructions: [
    "Pré-aqueça o forno a 150 °C e forre uma assadeira com papel manteiga.",
    "Bata claras com sal e cream of tartar até picos firmes (~4‑5 min).",
    "Misture iogurte e o restante dos ingredientes, depois incorpore as claras delicadamente.",
    "Modele discos (~10 cm) e leve ao forno por 25‑30 min até dourar.",
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
  description:
    "Hambúrguer prensado direto na tortilha e grelhado até ficar crocante. Coberto com queijo derretido, picles e molho especial.",
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
    "Misture carne, sal e pimenta em uma tigela média.",
    "Disponha as tortilhas e espalhe a carne por cima formando uma camada fina.",
    "Pré-aqueça uma frigideira com um pouco de óleo.",
    "Coloque as tortilhas com o lado da carne voltado para baixo e pressione com uma espátula.",
    "Grelhe 1-2 minutos por lado, vire, adicione o queijo e tampe até derreter.",
    "Finalize com alface, cebola, picles e molho. Sirva quente."
  ],
  sensations: ["crocante", "suculento", "cheio de sabor", "hamburgão reinventado"],
  time: { prep: 10, cook: 5, total: 15 },
  servings: 6,
  category: "prato principal",
  tags: ["taco", "hamburguer", "bigmac", "americano", "jantar rápido"],
  available: true
},
  // 4. Ube Mochi Pancakes
  {
    id: "ube-mochi-pancakes",
    title: "Ube Mochi Pancakes",
    slug: "ube-mochi-pancakes",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Panquecas roxas, chewy e sem glúten, feitas com ube e mochi – perfeitas para brunch estético.",
    ingredients: [
      "2 cups farinha de arroz glutinoso",
      "2 tbsp açúcar",
      "2 tsp bicarbonato de sódio",
      "½ tsp sal",
      "1 cup leite de coco",
      "2 ovos",
      "2 tsp extrato de ube",
      "Óleo/butter para fritar"
    ],
    instructions: [
      "Misture farinha, açúcar, bicarbonato e sal",
      "Adicione coco, ovos e ube, bata até homogêneo :contentReference[oaicite:12]{index=12}",
      "Aqueça frigideira, unte e coloque porções, cozinhe ~2‑3 min de cada lado até firmar"
    ],
    sensations: ["chewy", "doce", "colorido", "gluten-free"],
    time: { prep: 5, cook: 20, total: 25 },
    servings: 6,
    category: "sobremesa",
    tags: ["ube", "mochi", "gluten-free", "viral"],
    available: true
  },
  // 5. Miso Caramel Brownies
  {
    id: "miso-caramel-brownies",
    title: "Miso Caramel Brownies",
    slug: "miso-caramel-brownies",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Brownies intensos com camada de caramelo de miso salgado — combinação inusitada e sofisticada.",
    ingredients: [
      "200 g açúcar",
      "60 g água",
      "2 tbsp xarope de milho claro",
      "2 tbsp manteiga com sal",
      "120 ml heavy cream",
      "1 tbsp miso branco",
      "Massa de brownie de chocolate escuro"
    ],
    instructions: [
      "Faça o caramelo: açúcar, água e xarope até dourar; adicione manteiga, cream e miso, misture até homogêneo :contentReference[oaicite:13]{index=13}",
      "Prepare brownies conforme receita e adicione caramelo antes de assar",
      "Asse conforme indicado na receita base"
    ],
    sensations: ["intenso", "fudgy", "doce e salgado"],
    time: { prep: 15, cook: 30, total: 45 },
    servings: 9,
    category: "sobremesa",
    tags: ["brownie", "miso", "gourmet", "viral"],
    available: true
  },
  // 6. Air‑Fryer Pasta Chips
  {
    id: "air-fryer-pasta-chips",
    title: "Air‑Fryer Pasta Chips",
    slug: "air-fryer-pasta-chips",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Chips crocantes de macarrão preparados na air‑fryer – snack inusitado e viciante.",
    ingredients: [
      "2 cups rigatoni ou farfalle cozido e escorrido",
      "1‑2 tbsp azeite",
      "½ cup queijo parmesão ralado",
      "1 tsp alho em pó",
      "1 tsp tempero italiano",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Pré‑aqueça a air‑fryer a 200 °C",
      "Misture o macarrão com azeite e temperos :contentReference[oaicite:14]{index=14}",
      "Distribua na cesta em camada única, frite por 10‑15 min virando na metade do tempo"
    ],
    sensations: ["crocante", "cheesy", "divertido", "snack"],
    time: { prep: 15, cook: 10, total: 25 },
    servings: 4,
    category: "entrada",
    tags: ["snack", "air-fryer", "viral"],
    available: true
  },
  // 7. Chickpea Tuna Salad
  {
    id: "chickpea-tuna-salad",
    title: "Chickpea Tuna Salad (Vegana)",
    slug: "chickpea-tuna-salad",
    imageUrl: "/assets/receitas/OIP.webp",
    description: "Salada cremosa e proteica de grão-de-bico com nori – perfeito para sanduíches ou wraps.",
    ingredients: [
      "1,5 cups grão-de-bico cozido (ou 1 lata)",
      "½ cup cebola picada",
      "½ cup aipo picado",
      "½ cup salsinha fina",
      "2 tbsp alcaparras",
      "½ cup maionese vegetal",
      "1 sheet nori picada",
      "1 tbsp mostarda Dijon",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Amasse grão-de-bico deixando alguns pedaços :contentReference[oaicite:15]{index=15}",
      "Misture cebola, aipo, salsinha, alcaparras, nori, maionese e mostarda",
      "Tempere com sal/pimenta e sirva em wraps, sanduíches ou saladas"
    ],
    sensations: ["cremoso", "refrescante", "proteônico", "vegano"],
    time: { prep: 10, cook: 0, total: 10 },
    servings: 6,
    category: "vegano",
    tags: ["vegano", "rápido", "proteína", "pra viagem"],
    available: true
  },
  // 8. Vegan Mug Cake
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
  // 9. Homemade Oat Milk
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
  {
    id: "tofu-scramble",
    title: "Tofu Scramble",
    slug: "tofu-scramble",
    imageUrl: "/assets/receitas/receitas/tofu-scramble.webp",
    description: "‘Ovo’ mexido vegano, nutritivo e colorido, ideal para café da manhã reforçado.",
    ingredients: [
      "200 g tofu firme ou sedimentado",
      "½ tsp turmeric",
      "¼ tsp sal negro (kala namak)",
      "1 tbsp óleo vegetal",
      "Cebola e pimentão picados",
      "Opcional: vegetais variados e ervas"
    ],
    instructions: [
      "Desfie tofu com garfo ou mãos",
      "Aqueça óleo, refogue cebola/pimentão",
      "Adicione tofu, cúrcuma, sal negro e outros temperos :contentReference[oaicite:18]{index=18}",
      "Cozinhe até aquecer e levemente dourar"
    ],
    sensations: ["salgado", "nutritivo", "vegan", "colorido"],
    time: { prep: 5, cook: 10, total: 15 },
    servings: 2,
    category: "vegano",
    tags: ["vegano", "proteína", "café da manhã", "sem queijo"],
    available: true
  }
];
