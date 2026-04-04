import React from "react";
import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

const partners = [
  {
    name: "Arita Indonesia",
    logo: "/images/logo_arita.webp",
    desc: `Arita merupakan salah satu produsen valve dan fitting industri terbesar di Indonesia. 
           Kami bekerja sama sebagai partner resmi wilayah Lombok untuk penyediaan, instalasi, 
           dan maintenance valve industri.`,
    badge: "Partner Resmi • Region Lombok",
    url: "https://www.arita.co.id/",
  },
  {
    name: "Hydromart Utama Indonesia",
    logo: "/images/logo_hydromart.webp",
    desc: `Hydromart adalah penyedia solusi water treatment dan equipment pendukung instalasi air 
           untuk sektor industri & fasilitas. Mendukung kebutuhan plumbing, RO, dan instalasi teknikal.`,
    badge: "Partner Resmi • Hydromart",
    url: "https://www.hydromart.co.id",
  },
];

const PartnersSection = () => {
  return (
    <section
      id="partner"
      className="w-full py-12 bg-gray-50 dark:bg-[#0f0f0f] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-angsana-merah text-sm font-bold tracking-[0.2em] uppercase mb-3">
          Partner Strategis
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white leading-tight">
          Sinergi Bersama Mitra Industri
        </h2>

        {/* Divider */}
        <div className="w-20 h-1 bg-angsana-merah mx-auto mt-6 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-base leading-relaxed">
          Kami berkolaborasi dengan produsen dan penyedia solusi teknikal
          terkemuka untuk memastikan setiap proyek didukung oleh material dan
          teknologi terbaik.
        </p>

        {/* Partner Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="
                bg-white dark:bg-[#1a1a1a]
                rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800
                p-10 flex flex-col items-center text-center
                hover:shadow-xl hover:-translate-y-2
                transition-all duration-500 group
              "
            >
              {/* Logo Container */}
              <div className="w-32 h-32 bg-gray-50 dark:bg-[#222] rounded-2xl flex items-center justify-center p-6 mb-6 transition-colors">
                <img
                  src={p.logo}
                  alt={`${p.name} Logo`}
                  className="max-w-full max-h-full object-contain transition-all duration-500"
                />
              </div>

              {/* Text Info */}
              <h3 className="text-2xl font-bold text-teknika-hitam dark:text-white">
                {p.name}
              </h3>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-red-50 dark:bg-red-950/30 text-angsana-merah rounded-full font-bold text-[10px] tracking-wider uppercase">
                <FiCheckCircle />
                <span>{p.badge}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-6 leading-relaxed max-w-sm">
                {p.desc}
              </p>

              {/* Button */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8 inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest
                  bg-angsana-merah hover:bg-red-700 uppercase
                  px-8 py-3.5 rounded-sm transition-all shadow-lg hover:shadow-red-500/30
                "
              >
                Kunjungi Situs <FiArrowUpRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
