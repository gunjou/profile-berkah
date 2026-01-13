import React from "react";
import image from "../../assets/img/maintenance_berkah.jpg";

const AboutCompany = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold text-red-600 dark:text-red-400">
            Tentang Perusahaan
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Membangun Kepercayaan Melalui Kualitas
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            <strong className="text-gray-900 dark:text-white">
              Berkah Angsana
            </strong>{" "}
            adalah perusahaan yang bergerak di bidang konstruksi dan
            pengembangan proyek dengan fokus pada mutu, ketepatan waktu, serta
            keselamatan kerja.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Dengan pengalaman bertahun-tahun, kami telah dipercaya menangani
            berbagai proyek skala kecil hingga besar secara profesional,
            transparan, dan berorientasi pada kepuasan klien.
          </p>
        </div>

        {/* Image / Visual */}
        <div className="relative group">
          {/* Glow Accent */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-red-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition" />

          {/* Image Container */}
          <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg">
            {/* Image */}
            <img
              src={image}
              alt="Aktivitas Proyek Berkah Angsana"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
