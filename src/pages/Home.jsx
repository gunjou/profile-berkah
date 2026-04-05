import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsCarousel from "../components/ClientsCarousel";
import PartnersSection from "../components/PartnersSection";
import ExperienceSection from "../components/ExperienceSection";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <div className="min-h-screen antialiased bg-white">
      <HeroSection />
      <ClientsCarousel />
      <AboutUs />
      <ServicesSection />
      <ProductSection />
      <ExperienceSection />
      <ProjectsSection />
      <PartnersSection />
    </div>
  );
};

export default Home;
