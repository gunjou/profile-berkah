import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft, FiPlus } from "react-icons/fi";
import { useProjectFilter } from "../context/ProjectFilterContext";
import { projects } from "../data/projects";

const categories = ["SEMUA", "Maintenance", "MEP", "Pabrikasi", "Scaffolding"];

const ProjectsSection = () => {
  const { activeCategory, setActiveCategory } = useProjectFilter();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const [displayProjects, setDisplayProjects] = useState([]);

  useEffect(() => {
    let filtered = [];
    if (activeCategory === "SEMUA") {
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
      className="relative w-full py-12 bg-white dark:bg-[#0f0f0f] transition-colors overflow-hidden"
    >
      {/* Ghost Text Background */}
      <div className="absolute top-10 left-[-2%] text-[18vw] font-black text-gray-50 dark:text-[#141414] select-none -z-0 leading-none opacity-70">
        WORKS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-angsana-merah text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              <span className="w-10 h-[2px] bg-angsana-merah"></span> Portofolio
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-tight uppercase">
              REKAM JEJAK <br />
              <span className="text-angsana-merah">PEKERJAAN KAMI.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-sm text-[10px] font-black tracking-widest transition-all duration-300 uppercase
                  ${
                    activeCategory === cat
                      ? "bg-angsana-merah text-white shadow-lg shadow-red-500/20"
                      : "bg-gray-50 dark:bg-[#1a1a1a] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#222]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-50 dark:bg-[#161616] rounded-sm overflow-hidden border border-gray-100 dark:border-white/5 transition-all duration-500"
            >
              <div className="relative rounded-sm aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teknika-hitam via-transparent to-transparent opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-angsana-merah text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0">
                  <FiPlus size={18} />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-angsana-merah text-[10px] font-black mb-2 uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md inline-block px-2 py-1">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-black text-white mb-3 leading-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs line-clamp-2 italic font-medium">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEW INTEGRATED NAVIGATION */}
        {totalPages > 1 && (
          <div className="mt-20 flex flex-col items-center">
            {/* Progress Bar Label */}
            <div className="flex items-center gap-4 mb-6 w-full max-w-xs">
              <div className="h-[2px] bg-gray-100 dark:bg-gray-800 flex-1 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-angsana-merah transition-all duration-700 ease-in-out"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                ></div>
              </div>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                {String(currentPage).padStart(2, "0")} /{" "}
                {String(totalPages).padStart(2, "0")}
              </span>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-14 h-14 flex items-center justify-center text-teknika-hitam dark:text-white disabled:opacity-10 hover:text-angsana-merah transition-all"
              >
                <FiChevronLeft size={24} />
              </button>

              <div className="flex gap-2 mx-4">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 text-[11px] font-black transition-all border-b-2 
                      ${
                        currentPage === i + 1
                          ? "text-angsana-merah border-angsana-merah"
                          : "text-gray-300 dark:text-gray-700 border-transparent hover:text-teknika-hitam dark:hover:text-white"
                      }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="w-14 h-14 flex items-center justify-center text-teknika-hitam dark:text-white disabled:opacity-10 hover:text-angsana-merah transition-all"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
