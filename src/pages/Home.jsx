// src/pages/Home.jsx

import React from "react";
import Headers from "../components/Header"; // Pastikan path sesuai dengan struktur proyek Anda
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsCarousel from "../components/ClientsCarousel";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // Menggunakan `antialiased` dan latar belakang default putih
    <div className="min-h-screen antialiased bg-white">
      <Headers />
      <HeroSection />
      <AboutUs />
      <ClientsCarousel />
      <ServicesSection />
      <ProjectsSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Home;
