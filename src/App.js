import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProfilPerusahaan from "./pages/ProfilePerusahaan";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import FAQPage from "./pages/FAQPage";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetail from "./pages/ArticleDetail";
import Pengumuman from "./pages/Pengumuman";
import PengumumanDetail from "./pages/PengumumanDetail";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";
import { ProjectFilterProvider } from "./context/ProjectFilterContext";

import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProjectFilterProvider>
          {" "}
          {/* Bungkus Header dan Routes di sini */}
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil-perusahaan" element={<ProfilPerusahaan />} />
            <Route
              path="/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/artikel" element={<ArticlePage />} />
            <Route path="/artikel/:slug" element={<ArticleDetail />} />
            <Route path="/pengumuman" element={<Pengumuman />} />
            <Route path="/pengumuman/:slug" element={<PengumumanDetail />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/event/:slug" element={<EventDetailPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </ProjectFilterProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
