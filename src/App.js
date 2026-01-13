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

import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* menu halaman */}
          <Route path="/profil-perusahaan" element={<ProfilPerusahaan />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* menu berita */}
          <Route path="/artikel" element={<ArticlePage />} />
          <Route path="/artikel/:slug" element={<ArticleDetail />} />

          {/* menu pengumuman */}
          <Route path="/pengumuman" element={<Pengumuman />} />
          <Route path="/pengumuman/:slug" element={<PengumumanDetail />} />

          {/* Menu event */}
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:slug" element={<EventDetailPage />} />

          {/* 404 Fallback */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
