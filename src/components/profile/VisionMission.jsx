import React from "react";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
            Arah & Tujuan
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Visi & Misi Perusahaan
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div
            className="
              relative p-10 rounded-3xl
              bg-white/80 dark:bg-[#111827]/80
              backdrop-blur-xl
              shadow-lg hover:shadow-2xl
              transition
            "
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <Eye className="text-red-600 dark:text-red-400" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Visi
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Menjadi perusahaan konstruksi terpercaya yang unggul dalam
              kualitas, inovasi, dan keberlanjutan untuk mendukung pembangunan
              masa depan.
            </p>
          </div>

          {/* Mission */}
          <div
            className="
              relative p-10 rounded-3xl
              bg-white/80 dark:bg-[#111827]/80
              backdrop-blur-xl
              shadow-lg hover:shadow-2xl
              transition
            "
          >
            <div className="w-12 h-12 mb-6 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
              <Target className="text-red-600 dark:text-red-400" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Misi
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-red-600 dark:text-red-400">•</span>
                Memberikan hasil kerja berkualitas tinggi dan tepat waktu
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 dark:text-red-400">•</span>
                Mengutamakan keselamatan kerja dan profesionalisme
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 dark:text-red-400">•</span>
                Membangun hubungan jangka panjang dengan klien dan mitra
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
