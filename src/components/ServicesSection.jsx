import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Dummy images (bisa ganti ke path Anda)
import img1 from "../assets/img/maintenance_berkah.jpg";
import img2 from "../assets/img/mep_berkah.jpg";
import img3 from "../assets/img/welder_berkah.jpg";
import img4 from "../assets/img/scaffholding_berkah.jpg";

const services = [
  {
    title: "Maintenance & Service",
    desc: "Solusi perawatan dan perbaikan sipil, gedung, dan fasilitas operasional untuk memastikan keandalan infrastruktur.",
    img: img1,
  },
  {
    title: "MEP (Mechanical, Electrical & Plumbing)",
    desc: "Instalasi dan maintenance sistem mekanikal, elektrikal, panel, dan perpipaan sesuai standar industri.",
    img: img2,
  },
  {
    title: "Pabrikasi / Welding",
    desc: "Jasa pembuatan konstruksi metal, bracket, dudukan panel, serta perbaikan komponen mekanikal dengan kualitas tinggi.",
    img: img3,
  },
  {
    title: "Scaffolding",
    desc: "Sewa dan pemasangan scaffolding untuk berbagai kebutuhan konstruksi, perawatan, dan pekerjaan teknis.",
    img: img4,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="layanan"
      className="w-full py-24 bg-gradient-to-r from-black via-[#0c0003] to-[#60000d] dark:bg-[#111] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-angsana-merah text-sm font-semibold tracking-wider uppercase">
            Apa Yang Kami Tawarkan
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-white leading-tight mt-2">
            Layanan Terbaik Untuk Mendukung Kebutuhan Anda.
          </h2>

          <p className="text-gray-600 text-white dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Berkah Angsana berkomitmen memberikan layanan konstruksi dan
            teknikal berkualitas tinggi agar setiap proyek berjalan lancar,
            aman, dan efisien.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="
                bg-[#e5e5e5] dark:bg-[#1a1a1a]
                rounded-md overflow-hidden shadow-md 
                transition-all hover:-translate-y-1 hover:shadow-xl
                flex flex-col
              "
            >
              {/* Image Container — now on TOP */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={service.img}
                  alt={service.title}
                  className="
                    w-full h-full object-cover grayscale 
                    group-hover:grayscale-0 transition-all duration-500
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 bg-angsana-merah/0 
                    group-hover:bg-angsana-merah/20 
                    transition-all duration-500
                  "
                ></div>
              </div>

              {/* Text Content — now BELOW */}
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-teknika-hitam dark:text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 mt-6 text-angsana-merah font-semibold cursor-pointer">
                  <span>View More</span>
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-angsana-merah text-white px-10 py-4 rounded-md font-semibold hover:bg-red-700 transition flex items-center gap-3">
            OUR SERVICES <FiArrowUpRight />
          </button>
        </div>

        {/* Link Under */}
        <p className="text-center text-sm mt-6 text-gray-200">
          Ingin melihat layanan terbaik kami?{" "}
          <span className="text-angsana-merah cursor-pointer hover:underline">
            Klik di sini untuk lihat lebih banyak
          </span>
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
