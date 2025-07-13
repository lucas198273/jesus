// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostCarouselSection from "./components/PostCarouselSection/PostCarouselSection";
import BlogPage from "./pages/BlogPage";
import PostDetailPage from "./pages/PostDetailPage";
import SearchPage from "./components/SearchPage/SearchPage";
import { SearchProviderWrapper } from "./components/SearchProviderWrapper/SearchProviderWrapper";
import Hero from "./components/Hero/Hero";
import { PostSection } from "./components/PostSection/PostSection";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";
import ContactPage from "./pages/ContactPage";
import Brindes from "./pages/Brindes";

// HelmetProvider no topo
import { HelmetProvider } from 'react-helmet-async';
import Politicas from "./pages/Politicas";
import Amazon from "./pages/Amazon";

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F23] text-[#EAEAEA]">
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={
          <main className="pt-20 min-h-screen flex flex-col">
            <Hero />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Últimos Posts</h2>
            </div>
            <section className="py-10">
              <PostCarouselSection title="Posts em Destaque" />
            </section>
            <PostSection />
            <section className="py-10">
              <PostCarouselSection category="review" title="Reviews Recentes" />
            </section> 
            <section className="py-10">
              <PostCarouselSection category="news" title="Notícias do Mundo dos Games" />
            </section>
          </main>
        } />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/posts/:slug" element={<PostDetailPage />} />
        <Route path="/busca" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/brindes" element={<Brindes />} />
        <Route path="/politicas" element={<Politicas />} />
        <Route path="/afiliados" element={<Amazon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <HelmetProvider> {/* AQUI está a mudança principal */}
        <SearchProviderWrapper>
          <Header />
          <AppContent />
        </SearchProviderWrapper>
      </HelmetProvider>
    </Router>
  );
}
