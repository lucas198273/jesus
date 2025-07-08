// src/pages/RecipeDetailPage.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useRecipeData } from "../hooks/UseRecipeData"; // Hook para buscar receita
import { useSEO } from "../hooks/UseSEO"; // Hook para SEO
import { recipes } from "../data/recipes";

const RecipeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const { recipe } = useRecipeData(slug); // Removido isLoading

  // SEO Hook
  useSEO(
    recipe ? `${recipe.title} - Receitas Deliciosas e Fáceis` : "Receita",
    recipe ? `${recipe.description} - Aprenda como fazer ${recipe.title} em ${recipe.time.total} minutos.` : ""
  );

  if (!recipe) {
    return (
      <div className="py-20 text-center text-[#4E2A14]">
        Receita não encontrada...
      </div>
    );
  }

  // Sugestões de receitas relacionadas
  const relatedRecipes = recipes
    .filter((r) => r.slug !== slug && (r.category === recipe.category || r.tags?.some((t) => recipe.tags?.includes(t))))
    .slice(0, 3);

  // Função para lidar com o clique nas sensações
  const handleSensationClick = (sensation: string) => {
    navigate(`/busca?sensacao=${encodeURIComponent(sensation)}`);
  };

  return (
    <div className="pt-24 bg-white text-[#4E2A14] min-h-screen">
      <article className="px-4 max-w-3xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
          <img
            src={recipe.imageUrl}
            alt={`${recipe.title} - Receita de ${recipe.category}`}
            className="w-full rounded-lg shadow-lg mb-6 object-cover"
            loading="lazy"
            onError={(e) => console.error(`Erro ao carregar imagem: ${recipe.imageUrl}`, e)}
          />
          <p className="text-lg text-[#6B3E1F]">{recipe.description}</p>
        </header>

        {/* Tempo e Porções */}
        <section className="grid grid-cols-2 gap-4 text-center text-[#8B5B2A]">
          <div><strong>Preparo:</strong> {recipe.time.prep} min</div>
          <div><strong>Cozimento:</strong> {recipe.time.cook} min</div>
          <div><strong>Total:</strong> {recipe.time.total} min</div>
          <div><strong>Rendimento:</strong> {recipe.servings}</div>
        </section>

        {/* Sensações */}
        {recipe.sensations?.length ? (
          <section className="flex flex-wrap gap-2 justify-center mt-4" aria-label="Sensações da receita">
            {recipe.sensations.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-[#A67C4D] text-white rounded-full text-sm shadow hover:bg-[#8B5B2A] transition-colors cursor-pointer"
                title={`A receita ${recipe.title} é ${s.toLowerCase()}`}
                onClick={() => handleSensationClick(s)}
              >
                {s}
              </span>
            ))}
          </section>
        ) : null}

        {/* Ingredientes */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
          <ul className="list-disc list-inside space-y-1 text-[#6B3E1F]">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </section>

        {/* Preparo */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Modo de Preparo</h2>
          <ol className="list-decimal list-inside space-y-2 text-[#6B3E1F]">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Receitas Relacionadas */}
        {relatedRecipes.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Receitas Relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedRecipes.map((r) => (
                <Link
                  to={`/receitas/${r.slug}`}
                  key={r.id}
                  className="block bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
                >
                  <img
                    src={r.imageUrl}
                    alt={`${r.title} - Receita`}
                    className="w-full h-24 object-cover rounded"
                    onError={(e) => console.error(`Erro ao carregar imagem relacionada: ${r.imageUrl}`, e)}
                  />
                  <p className="mt-2 text-sm font-medium">{r.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Botões */}
        <section className="flex justify-between mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-[#4E2A14] text-white rounded-md hover:bg-[#6B3E1F] transition"
          >
            Voltar
          </button>
          <button
            onClick={() => navigate("/receitas")}
            className="px-6 py-2 bg-[#A67C4D] text-white rounded-md hover:bg-[#8B5B2A] transition"
          >
            Ver mais receitas
          </button>
        </section>
      </article>
    </div>
  );
};

export default RecipeDetailPage;
