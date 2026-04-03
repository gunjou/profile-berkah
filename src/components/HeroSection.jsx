import React, { useEffect, useState } from "react";

const taglines = [
  "Solusi Maintenance & Teknik untuk Industri.",
  "Ahli MEP, Pabrikasi & Scaffolding Industri.",
  "Partner Teknis untuk Proyek Energi & Industri.",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const bgHero = "/images/hero_bg.jpg";

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
      className="relative w-full h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap agar teks lebih kontras */}
      <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left">
        {/* Kategori kecil dengan aksen garis */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-[2px] bg-angsana-merah"></div>
          <p className="text-angsana-merah uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
            PT BERKAH ANGSANA TEKNIKA
          </p>
        </div>

        {/* Tagline dengan animasi Fade & Slide */}
        <div className="min-h-[160px] md:min-h-[200px]">
          <h1
            className={`
              text-white text-4xl md:text-6xl lg:text-7xl font-extrabold max-w-4xl leading-[1.1]
              transition-all duration-700 ease-in-out
              ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
            `}
          >
            {taglines[index]}
          </h1>
          <p className="text-white/80 mt-4 max-w-xl text-sm">
            Berpengalaman dalam berbagai proyek industri dan energi di
            Indonesia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <button className="bg-angsana-merah text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/40 flex items-center gap-3 tracking-widest">
            HUBUNGI KAMI <span>→</span>
          </button>

          <button className="border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-sm text-sm font-bold hover:bg-white hover:text-black transition-all tracking-widest">
            LIHAT PROYEK
          </button>
        </div>
      </div>

      {/* Indikator Slide (Opsional untuk mempercantik) */}
      <div className="absolute bottom-10 left-6 flex gap-2">
        {taglines.map((_, i) => (
          <div
            key={i}
            className={`h-1 transition-all duration-500 ${i === index ? "w-8 bg-angsana-merah" : "w-4 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
