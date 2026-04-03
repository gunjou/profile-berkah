import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsCarousel from "../components/ClientsCarousel";
import PartnersSection from "../components/PartnersSection";
import ExperienceSection from "../components/ExperienceSection";

const Home = () => {
  return (
    <div className="min-h-screen antialiased bg-white">
      <HeroSection />
      <AboutUs />
      <ClientsCarousel />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
