import React, { useEffect, useState } from "react";
import bgHero from "../assets/img/maintenance_berkah.jpg";

const taglines = [
  "Membangun Masa Depan dengan Kualitas Terbaik.",
  "Solusi Konstruksi Andal untuk Berbagai Proyek.",
  "Komitmen pada Keamanan, dan Ketepatan.",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative w-full h-screen flex items-center"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap agar teks lebih terlihat */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-left">
        {/* Kategori kecil */}
        <p className="text-angsana-merah uppercase tracking-widest text-sm font-semibold mb-4">
          BERKAH ANGSANA CONSTRUCTION
        </p>

        {/* Tagline berubah */}
        <h1
          className={`
            text-white text-5xl md:text-6xl font-extrabold max-w-3xl leading-tight
            transition-all duration-700 ease-out
            ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
        >
          {taglines[index]}
        </h1>

        {/* Tombol Get in Touch */}
        <button className="mt-8 bg-angsana-merah text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-red-700 transition flex items-center gap-2">
          GET IN TOUCH →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
