import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Customers from "../components/Customers";
import About from "../components/About";
import Career from "../components/Career";
import Location from "../components/Location";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 App">
      <Navbar />
      <Hero />
      <About />
      <Customers />
      <Contact />
      <Career />
      <Location />
      <Footer />
    </div>
  );
};

export default Home;
