// src/pages/Home.jsx

import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsCarousel from "../components/ClientsCarousel";
import PartnersSection from "../components/PartnersSection";
import { ProjectFilterProvider } from "../context/ProjectFilterContext";
import ExperienceSection from "../components/ExperienceSection";

const Home = () => {
  return (
    <ProjectFilterProvider>
      <div className="min-h-screen antialiased bg-white">
        <HeroSection />
        <AboutUs />
        <ClientsCarousel />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <PartnersSection />
      </div>
    </ProjectFilterProvider>
  );
};

export default Home;
