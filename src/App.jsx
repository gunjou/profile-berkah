import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-gray-900 font-poppins App">
      <Navbar />
      <Hero />
      <About />
      <Customers />
      <Contact />
      <Careers />
      <Location />
      <Footer />
    </div>
  );
}
