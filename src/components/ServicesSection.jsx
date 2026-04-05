import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useProjectFilter } from "../context/ProjectFilterContext";

const services = [
  {
    number: "01",
    title: "Maintenance & Service",
    desc: "Pekerjaan maintenance dan perbaikan fasilitas industri, termasuk peralatan, gedung, dan sistem pendukung operasional.",
    img: "/images/maintenance_berkah.jpg",
    category: "Maintenance",
  },
  {
    number: "02",
    title: "MEP Specialist",
    desc: "Instalasi dan perawatan sistem mekanikal, elektrikal, perpipaan, serta pekerjaan pendukung di lingkungan industri dan energi.",
    img: "/images/mep_berkah.jpg",
    category: "MEP",
  },
  {
    number: "03",
    title: "Pabrikasi / Workshop",
    desc: "Fabrikasi komponen metal, pipa, dan struktur pendukung untuk kebutuhan proyek industri dengan pengerjaan presisi.",
    img: "/images/pabrikasi_berkah.jpg",
    category: "Pabrikasi",
  },
  {
    number: "04",
    title: "Scaffolding System",
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
      /* Perubahan BG ke gray-50 */
      className="relative w-full py-12 bg-gray-50 dark:bg-[#0c0c0c] transition-colors overflow-hidden"
    >
      {/* Ghost Text Background - Disesuaikan agar kontras di Dark Mode */}
      <div className="absolute top-20 right-[-5%] text-[15vw] font-black text-white dark:text-[#1a1a1a] select-none -z-0 leading-none opacity-100 dark:opacity-40">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-angsana-merah text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-angsana-merah"></span> Layanan
            Utama
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-tight uppercase">
            Solusi Teknikal <br />
            <span className="text-angsana-merah">Terintegrasi.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              /* Card dibuat tetap Putih (di layar terang) agar 'pop' di atas BG gray-50 */
              className="group relative bg-white dark:bg-[#161616] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col border border-gray-100 dark:border-white/5"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Badge Nomor Urut - Re-activated with Asymmetrical Style */}
                {/* <div className="absolute top-0 right-0 bg-angsana-merah text-white text-[10px] font-black py-2 px-4 shadow-lg uppercase tracking-tighter">
                  {service.number}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col relative">
                {/* Decorative Line saat Hover */}
                <div className="absolute top-0 left-8 w-0 h-[3px] bg-angsana-merah group-hover:w-20 transition-all duration-500"></div>

                <h3 className="text-lg font-black text-teknika-hitam dark:text-white mb-4 group-hover:text-angsana-merah transition-colors uppercase tracking-tight leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>

                {/* View More Link */}
                <button
                  onClick={() => goToProjects(service.category)}
                  className="mt-auto flex items-center gap-2 text-angsana-merah font-black text-[10px] tracking-[0.2em] uppercase hover:gap-4 transition-all"
                >
                  JELAJAHI PROYEK <FiArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-10 border-t border-gray-200 dark:border-gray-800 gap-6">
          <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest italic">
            * Seluruh pengerjaan didukung tenaga ahli bersertifikat.
          </p>
          <button
            onClick={() => goToProjects("SEMUA")}
            className="bg-teknika-hitam dark:bg-white text-white dark:text-black px-10 py-5 rounded-sm text-[10px] font-black tracking-[0.2em] hover:bg-angsana-merah dark:hover:bg-angsana-merah dark:hover:text-white transition-all uppercase flex items-center gap-3 shadow-lg"
          >
            Semua Layanan <FiArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
