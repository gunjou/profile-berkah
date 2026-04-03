import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useProjectFilter } from "../context/ProjectFilterContext";

const services = [
  {
    title: "Maintenance & Service",
    desc: "Pekerjaan maintenance dan perbaikan fasilitas industri, termasuk peralatan, gedung, dan sistem pendukung operasional.",
    img: "/images/maintenance_berkah.jpg",
    category: "Maintenance",
  },
  {
    title: "MEP (Mechanical, Electrical & Plumbing)",
    desc: "Instalasi dan perawatan sistem mekanikal, elektrikal, perpipaan, serta pekerjaan pendukung di lingkungan industri dan energi.",
    img: "/images/mep_berkah.jpg",
    category: "MEP",
  },
  {
    title: "Pabrikasi / Workshop",
    desc: "Fabrikasi komponen metal, pipa, dan struktur pendukung untuk kebutuhan proyek industri dengan pengerjaan presisi.",
    img: "/images/pabrikasi_berkah.jpg",
    category: "Pabrikasi",
  },
  {
    title: "Scaffolding",
    desc: "Penyediaan dan pemasangan scaffolding untuk mendukung pekerjaan maintenance, inspeksi, dan perbaikan di area industri.",
    img: "/images/scaffolding_berkah.jpg",
    category: "Scaffolding",
  },
];

const ServicesSection = () => {
  const { setActiveCategory } = useProjectFilter();

  const goToProjects = (category) => {
    setActiveCategory(category);
    setTimeout(() => {
      document.getElementById("proyek")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section
      id="layanan"
      className="w-full py-12 bg-white dark:bg-[#0f0f0f] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-angsana-merah text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Layanan Utama Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white leading-tight">
            Solusi Teknikal Terintegrasi.
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 max-w-2xl mx-auto">
            Didukung pengalaman dalam berbagai proyek industri, energi, dan
            infrastruktur di Indonesia.
          </p>

          <div className="w-20 h-1 bg-angsana-merah mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay Merah saat Hover */}
                <div className="absolute inset-0 bg-angsana-merah/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-teknika-hitam dark:text-white mb-4 group-hover:text-angsana-merah transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* View More Link */}
                <button
                  onClick={() => goToProjects(service.category)}
                  className="mt-auto flex items-center gap-2 text-angsana-merah font-bold text-xs tracking-widest uppercase hover:gap-4 transition-all"
                >
                  LIHAT PROYEK <FiArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Bottom */}
        <div className="flex justify-center mt-20">
          <button
            onClick={() => goToProjects("All")}
            className="bg-angsana-merah text-white px-12 py-4 rounded-sm text-xs font-bold tracking-[0.2em] hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 flex items-center gap-4 uppercase"
          >
            Jelajahi Semua Layanan <FiArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
