// src/components/RecipeCarouselSection.tsx

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { recipes } from "../../data/recipes"; // apenas recipes

interface RecipeCarouselSectionProps {
  category?: string;
  title: string;
}

export default function RecipeCarouselSection({ category, title }: RecipeCarouselSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filtered = category
    ? recipes.filter(r => r.category === category)
    : recipes;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="mb-16 px-4">
      <h3 className="text-3xl font-semibold text-center text-[#4E2A14] mb-6 capitalize" data-aos="fade-up">
        {title}
      </h3>

      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-4 px-2">
            {filtered.map((r, idx) => (
              <div
                key={r.id}
                className="flex-none w-[70%] sm:w-1/2 md:w-1/3 lg:w-1/4"
                data-aos="fade-up"
                data-aos-delay={idx * 50}
              >
                <div className="relative rounded-xl overflow-hidden h-[320px] shadow-lg transition-transform duration-300 ease-out hover:-translate-y-2">
                  <Link to={`/receitas/${r.slug}`} className="block w-full h-full">
                    <img
                      src={r.imageUrl}
                      alt={r.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-90 flex justify-between items-center">
                    <Link
                      to={`/receitas/${r.slug}`}
                      className="px-4 py-2 rounded-md font-semibold bg-[#A67C4D] text-white shadow hover:bg-[#8B5B2A] transition"
                    >
                      Ver Receita
                    </Link>
                    <span className="text-sm text-[#6B3E1F] line-clamp-1">{r.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#4E2A14] text-white p-2 rounded-full z-10 hover:bg-[#6B3E1F]"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#4E2A14] text-white p-2 rounded-full z-10 hover:bg-[#6B3E1F]"
          aria-label="Próximo"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
