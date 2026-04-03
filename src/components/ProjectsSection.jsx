import React, { useState, useMemo } from "react";
import { FiSquare, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useProjectFilter } from "../context/ProjectFilterContext";

const categories = ["All", "Maintenance", "MEP", "Scaffolding", "Pabrikasi"];

const projects = [
  {
    title: "Pemeliharaan Rutin Fasilitas",
    desc: "Layanan maintenance berkala untuk menjaga efisiensi operasional industri.",
    category: "Maintenance",
    img: "/images/maintenance/1.jpg",
  },
  {
    title: "Instalasi Sistem MEP",
    desc: "Pengerjaan Mechanical, Electrical, dan Plumbing pada gedung komersial.",
    category: "MEP",
    img: "/images/mep/1.jpg",
  },
  {
    title: "Pabrikasi Struktur Baja",
    desc: "Proses workshop untuk pembuatan komponen konstruksi baja berkualitas.",
    category: "Pabrikasi",
    img: "/images/pabrikasi/1.jpg",
  },
  {
    title: "Pemasangan Scaffolding Ringlock",
    desc: "Solusi perancah aman untuk pengerjaan konstruksi di ketinggian.",
    category: "Scaffolding",
    img: "/images/scaffolding/1.jpg",
  },
  {
    title: "Sistem Kelistrikan Industri",
    desc: "Instalasi dan pengujian panel listrik tegangan menengah.",
    category: "MEP",
    img: "/images/mep/2.jpg",
  },
  {
    title: "Maintenance Gardu Hubung",
    desc: "Pengecekan teknis pada komponen gardu listrik industri.",
    category: "Maintenance",
    img: "/images/maintenance/2.jpg",
  },
  {
    title: "Ereksi Scaffolding Proyek",
    desc: "Layanan bongkar pasang scaffolding profesional.",
    category: "Scaffolding",
    img: "/images/scaffolding/2.jpg",
  },
  {
    title: "Pengelasan Konstruksi",
    desc: "Jasa pabrikasi pengelasan bersertifikat untuk industri.",
    category: "Pabrikasi",
    img: "/images/pabrikasi/2.jpg",
  },
  {
    title: "Integrasi Plumbing Gedung",
    desc: "Perancangan dan instalasi sistem perpipaan modern.",
    category: "MEP",
    img: "/images/mep/3.jpg",
  },
];

const ProjectsSection = () => {
  const { activeCategory, setActiveCategory } = useProjectFilter();

  // State untuk Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects berdasarkan kategori
  const filteredProjects = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    // Reset ke halaman 1 setiap kali kategori berubah
    setCurrentPage(1);
    return filtered;
  }, [activeCategory]);

  // Logika hitung pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section
      id="proyek"
      className="w-full py-12 bg-white dark:bg-[#111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="text-angsana-merah text-sm font-semibold tracking-wider uppercase">
            Proyek Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white mt-2">
            Portofolio Pekerjaan.
          </h2>
          <div className="relative w-full flex justify-center mt-10">
            <div className="h-[2px] bg-gray-200 dark:bg-gray-800 w-3/4"></div>
            <FiSquare className="absolute left-10 text-angsana-merah bg-white dark:bg-[#111] px-1" />
            <FiSquare className="absolute right-10 text-angsana-merah bg-white dark:bg-[#111] px-1" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full border text-xs font-bold tracking-widest transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-angsana-merah text-white border-angsana-merah shadow-lg shadow-red-500/20"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-angsana-merah"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl group bg-gray-50 dark:bg-[#1a1a1a]"
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p className="text-angsana-merah text-xs font-bold mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-16 gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 disabled:opacity-30 hover:bg-angsana-merah hover:text-white transition-all"
            >
              <FiChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) =>
                i + 1 === currentPage ? (
                  <span
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-angsana-merah text-white font-bold"
                  >
                    {i + 1}
                  </span>
                ) : (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {i + 1}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-3 rounded-full border border-gray-200 dark:border-gray-800 disabled:opacity-30 hover:bg-angsana-merah hover:text-white transition-all"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
