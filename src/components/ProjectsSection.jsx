import React, { useState } from "react";
import { FiSquare, FiArrowUpRight } from "react-icons/fi";

// Dummy images (ganti sesuai kebutuhan)
import img1 from "../assets/img/hero_bg.jpg";
import img2 from "../assets/img/maintenance.jpg";
import img3 from "../assets/img/mep.jpg";
import img4 from "../assets/img/welder.jpeg";
import img5 from "../assets/img/scaffolding.jpeg";
import img6 from "../assets/img/welder.jpeg";

const categories = ["All", "Maintenance", "MEP", "Welding", "Scaffolding"];

const projects = [
  {
    title: "Perawatan & Perbaikan Gedung",
    desc: "Proyek maintenance fasilitas operasional untuk menjaga keandalan infrastruktur.",
    category: "Maintenance",
    img: img1,
  },
  {
    title: "Instalasi Panel & Kelistrikan",
    desc: "Pemasangan sistem mekanikal dan elektrikal sesuai standar industri.",
    category: "MEP",
    img: img2,
  },
  {
    title: "Pabrikasi Dudukan Panel",
    desc: "Pembuatan struktur metal presisi untuk mendukung kegiatan industri.",
    category: "Welding",
    img: img3,
  },
  {
    title: "Pemasangan Scaffolding Proyek Industri",
    desc: "Penyediaan dan pemasangan scaffolding untuk pekerjaan konstruksi besar.",
    category: "Scaffolding",
    img: img4,
  },
  {
    title: "Peremajaan Sistem Kelistrikan",
    desc: "Upgrade sistem E-MEP untuk fasilitas industri manufaktur.",
    category: "MEP",
    img: img5,
  },
  {
    title: "Pembuatan Bracket Mekanikal",
    desc: "Kustom pabrikasi untuk mendukung proses produksi.",
    category: "Welding",
    img: img6,
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="w-full py-20 bg-white dark:bg-[#111] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <p className="text-angsana-merah text-sm font-semibold tracking-wider uppercase">
            Proyek Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white leading-tight mt-2">
            Jelajahi Proyek Berskala Besar.
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan konstruksi dan teknikal yang
            mencakup maintenance, MEP, pabrikasi metal, hingga scaffolding untuk
            skala industri maupun komersial.
          </p>

          {/* Divider */}
          <div className="relative w-full flex justify-center mt-10">
            <div className="h-[2px] bg-gray-300 dark:bg-gray-700 w-3/4"></div>
            <FiSquare className="absolute left-10 text-angsana-merah" />
            <FiSquare className="absolute right-10 text-angsana-merah" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive(cat)}
              className={`
                px-6 py-2 rounded-sm border text-sm font-bold tracking-wide
                transition-all
                ${
                  active === cat
                    ? "bg-angsana-merah text-white border-angsana-merah"
                    : "border-gray-600 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-md group shadow-md"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-all duration-700 
                group-hover:scale-105"
              />

              {/* Hover Overlay Fade In (top to bottom) */}
              <div
                className="
                  absolute inset-0 bg-gradient-to-b 
                  from-black/60 to-black/90 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-700
                "
              ></div>

              {/* Text Fade from Top */}
              <div
                className="
                  absolute top-5 left-5 opacity-0 translate-y-[-20px]
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-700
                "
              >
                <p className="text-angsana-merah text-sm font-semibold">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2 max-w-xs">
                  {project.desc}
                </p>
              </div>

              {/* Icon bottom right */}
              <div
                className="
                  absolute bottom-5 right-5 opacity-0 translate-y-5 
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-700
                "
              >
                <FiArrowUpRight className="text-white text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
