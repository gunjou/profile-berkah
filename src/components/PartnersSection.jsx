import React from "react";
import { FiCheckCircle, FiArrowUpRight } from "react-icons/fi";

// Logos
import aritaLogo from "../assets/img/logo_arita.png";
import hydromartLogo from "../assets/img/hydromart-logo.png";

const partners = [
  {
    name: "Arita Indonesia",
    logo: aritaLogo,
    desc: `Arita merupakan salah satu produsen valve dan fitting industri terbesar di Indonesia. 
           Kami bekerja sama sebagai partner resmi wilayah Lombok untuk penyediaan, instalasi, 
           dan maintenance valve industri.`,
    badge: "Partner Resmi • Region Lombok",
    url: "https://www.arita.co.id/",
  },
  {
    name: "Hydromart Utama Indonesia",
    logo: hydromartLogo,
    desc: `Hydromart adalah penyedia solusi water treatment dan equipment pendukung instalasi air 
           untuk sektor industri & fasilitas. Mendukung kebutuhan plumbing, RO, dan instalasi teknikal.`,
    badge: "Partner Resmi • Hydromart",
    url: "https://www.hydromart.co.id",
  },
];

const PartnersSection = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#111] transition-colors">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Subtitle */}
        <p className="text-angsana-merah text-sm font-semibold tracking-wider uppercase">
          Partner Kami
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-teknika-hitam dark:text-white mt-2">
          Partner & Rekan Kerja Sama
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto text-sm">
          Bekerja sama dengan partner terpercaya untuk mendukung layanan
          konstruksi, teknikal, dan kebutuhan industri.
        </p>

        {/* Partner Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="
                bg-[#f7f7f7] dark:bg-[#1b1b1b]
                rounded-xl shadow-md p-8
                flex flex-col items-center text-center
                hover:shadow-lg hover:-translate-y-1
                transition-all
              "
            >
              {/* Logo */}
              <div className="w-28 h-28 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img
                  src={p.logo}
                  alt={`${p.name} Logo`}
                  className="w-20 h-auto object-contain"
                />
              </div>

              {/* Text Info */}
              <h3 className="text-xl font-bold text-teknika-hitam dark:text-white mt-5">
                {p.name}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm mt-3 leading-relaxed max-w-sm">
                {p.desc}
              </p>

              {/* Badge */}
              <div className="flex items-center gap-2 mt-4 text-angsana-merah font-medium text-sm">
                <FiCheckCircle className="text-lg" />
                <span>{p.badge}</span>
              </div>

              {/* Button */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5 inline-flex items-center gap-2 text-white text-sm
                  bg-angsana-merah hover:bg-red-700
                  px-5 py-2.5 rounded-md transition
                "
              >
                Kunjungi Partner <FiArrowUpRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
