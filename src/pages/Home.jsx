// src/pages/Home.jsx

import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import StatsSection from "../components/StatsSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsCarousel from "../components/ClientsCarousel";
import PartnersSection from "../components/PartnersSection";
import { ProjectFilterProvider } from "../context/ProjectFilterContext";

const Home = () => {
  return (
    <ProjectFilterProvider>
      <div className="min-h-screen antialiased bg-white">
        <HeroSection />
        <AboutUs />
        <ClientsCarousel />
        <ServicesSection />
        <ProjectsSection />
        <PartnersSection />
      </div>
    </ProjectFilterProvider>
  );
};

export default Home;
