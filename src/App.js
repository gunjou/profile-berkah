import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQPage from "./pages/FAQPage";
import { ProjectFilterProvider } from "./context/ProjectFilterContext";

import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CareerPage from "./pages/CareerPage";
import Catalog from "./pages/Catalog";

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
            <Route path="/katalog" element={<Catalog />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/karir" element={<CareerPage />} />
            <Route path="/kontak" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
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
