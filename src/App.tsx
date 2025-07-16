import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { SearchProviderWrapper } from "./components/SearchProviderWrapper/SearchProviderWrapper";
import Hero from "./components/Hero/Hero";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";
import BenefitsSection from "./components/BenefitsSection/BenefitsSection";
import BenefitsSpiritual from "./components/BenefitsSpiritual/BenefitsSpiritual";
import { HelmetProvider } from "react-helmet-async";
import Amazon from "./pages/Amazon";
import AdvancedCourse from "./components/AdvancedCourse/AdvancedCourse";
import { AffiliateCoursePage } from "./pages/AffiliateCoursePage";
import AffiliateSection from "./components/AffiliateSection/AffiliateSection";
import AffiliateDetailPage from "./pages/PostDetailPage";
import TheologyImpactPost from "./components/TheologyImpactPost/TheologyImpactPost.tsx";
import CallToAction from "./components/CallToAction/CallToAction.tsx";
function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg- text-[#BFA875] overflow-x-hidden">
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20 min-h-screen flex flex-col overflow-x-hidden">
              <Hero />
              {/* Substituído <div className="container"> */}
              

              <BenefitsSection />
                <AdvancedCourse
      title="Teologia Sem Mistério"
      description="O curso avançado para aprofundar seu conhecimento bíblico, com conteúdos exclusivos e estrutura completa para transformar sua mente e fé."
      salesPageUrl="https://go.hotmart.com/O100869293N?dp=1"
      imageUrl="https://static-media.hotmart.com/Ef_HIjsQ0a8YbXIPIabh6a44jNc=/300x300/smart/filters:format(webp):background_color(white)/hotmart/product_pictures/3206c33d-ca9a-468a-b067-3e4df74cf059/50DESCONTO.png?w=920"
    />

              <section className="px-4 overflow-x-hidden">
                <AffiliateSection />
              </section>
              <BenefitsSpiritual />
              
             
              <AffiliateCoursePage />
              <section className="px-4 overflow-x-hidden">
              <TheologyImpactPost />;

              </section>
              <CallToAction/>
          



          


   
            </main>
          }
        />
        <Route path="/produtos" element={<Amazon />} />
        <Route path="/cursos" element={<AffiliateCoursePage />} />
        <Route path="/detalhe/:slug" element={<AffiliateDetailPage />} />
        <Route path="/produto/:slug" element={<AffiliateDetailPage />} />
        <Route path="/curso/:slug" element={<AffiliateDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <HelmetProvider>
        <SearchProviderWrapper>
          <Header />
          <AppContent />
        </SearchProviderWrapper>
      </HelmetProvider>
    </Router>
  );
}
