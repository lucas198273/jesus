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

import { AffiliateCoursePage } from "./pages/AffiliateCoursePage";
import AffiliateSection from "./components/AffiliateSection/AffiliateSection";
import AffiliateDetailPage from "./pages/PostDetailPage";

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

              <section className="px-4 overflow-x-hidden">
                <AffiliateSection />
              </section>
              <BenefitsSpiritual />

          


   
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
