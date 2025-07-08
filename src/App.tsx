import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import SocialMediaSection from "./components/SocialMidia/SocialMIdia";
import RecipeInfoSection from "./components/RecipeInfoSection/RecipeInfoSection";
import ProductPage from "./pages/ProductPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";
import RecipeDetailPage from "./pages/RecipeDetailPage"; // Novo componente de receitas
import RecipeCarouselSection from "./components/RecipeCarouselSection/RecipeCarouselSection";// Novo componente de carrossel

function AppContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTopOnRouteChange />
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 min-h-screen flex flex-col">
              <Hero />
              <section className="bg-white py-10">
                <RecipeCarouselSection category="vegano" title="Receitas Veganas" />
              </section>
              <section className="bg-white py-10">
                <RecipeCarouselSection category="entrada" title="Entradas Deliciosas" />
              </section>
      
              <section className="bg-white py-10">
                <RecipeCarouselSection category="sobremesa" title="Sobremesas Irresistíveis" />
              </section>
              <RecipeInfoSection />
              <SocialMediaSection />
            </main>
          }
        />
        <Route path="/receitas" element={<ProductPage />} />
        <Route path="/receitas/:slug" element={<RecipeDetailPage />} /> {/* Nova rota para receitas */}
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}