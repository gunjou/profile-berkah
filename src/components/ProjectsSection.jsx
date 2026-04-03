import React, { useState, useEffect } from "react";
import { FiSquare, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useProjectFilter } from "../context/ProjectFilterContext";
import { projects } from "../data/projects";

const categories = ["SEMUA", "Maintenance", "MEP", "Scaffolding", "Pabrikasi"];

const ProjectsSection = () => {
  const { activeCategory, setActiveCategory } = useProjectFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const [displayProjects, setDisplayProjects] = useState([]);

  useEffect(() => {
    let filtered = [];
    if (activeCategory === "SEMUA" || activeCategory === "All") {
      filtered = [...projects].sort(() => Math.random() - 0.5);
    } else {
      filtered = projects.filter((p) => p.category === activeCategory);
    }
    setDisplayProjects(filtered);
    setCurrentPage(1);
  }, [activeCategory]);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = displayProjects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );
  const totalPages = Math.ceil(displayProjects.length / projectsPerPage);

  return (
    <section
      id="proyek"
      className="w-full py-12 bg-white dark:bg-[#111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
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
        {/* Menggunakan grid-rows-none dan items-start agar kontainer tidak memaksa tinggi jika item sedikit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl group bg-gray-50 dark:bg-[#1a1a1a] isolate"
            >
              {/* Gambar dengan Rasio Aspek Tetap (4:3) */}
              {/* Ini memastikan gambar tidak memanjang meskipun hanya ada 3 proyek */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Content - Sekarang berada DI DALAM aspek gambar */}
                {/* Tanpa padding bawah tambahan, menyatu sempurna dengan round corner */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <p className="text-angsana-merah text-[10px] font-bold mb-1 uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs line-clamp-3 italic leading-relaxed">
                    "{project.desc}"
                  </p>
                </div>
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
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border font-bold transition-all
                    ${
                      i + 1 === currentPage
                        ? "bg-angsana-merah text-white border-angsana-merah"
                        : "border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600"
                    }`}
                >
                  {i + 1}
                </button>
              ))}
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
