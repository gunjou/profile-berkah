import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://picsum.photos/1600/600?random=1",
    title: "Membangun dengan Kualitas, Menyediakan dengan Integritas",
    desc: "PT. Berkah Angsana Teknika adalah mitra terpercaya dalam bidang MEP, Sipil, Fabrikasi Baja, dan Trading.",
  },
  {
    id: 2,
    image: "https://picsum.photos/1600/600?random=2",
    title: "Membangun dengan Kualitas, Menyediakan dengan Integritas",
    desc: "Kami hadir untuk mendukung sektor energi, infrastruktur, dan industri dengan layanan yang terintegrasi dan produk berkualitas.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto play setiap 8 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h2 className="mb-4 text-4xl font-bold md:text-6xl font-poppins">{slide.title}</h2>
            <p className="mb-6 text-lg font-poppins">{slide.desc}</p>
          </div>
        </div>
      ))}

      {/* Navigasi Panah */}
      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute p-3 text-white -translate-y-1/2 rounded-full left-5 top-1/2 bg-black/40 hover:bg-black/60"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute p-3 text-white -translate-y-1/2 rounded-full right-5 top-1/2 bg-black/40 hover:bg-black/60"
      >
        ❯
      </button>

      {/* Indicator Bullets */}
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-red-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
