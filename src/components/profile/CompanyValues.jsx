import React from "react";
import { ShieldCheck, Users, Award, Target } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integritas",
    desc: "Menjunjung tinggi kejujuran dan etika dalam setiap pekerjaan.",
  },
  {
    icon: Users,
    title: "Profesionalisme",
    desc: "Bekerja dengan standar tinggi, disiplin, dan tanggung jawab.",
  },
  {
    icon: Award,
    title: "Kualitas",
    desc: "Mengutamakan mutu terbaik pada setiap detail pekerjaan.",
  },
  {
    icon: Target,
    title: "Ketepatan Waktu",
    desc: "Menyelesaikan proyek sesuai jadwal yang telah disepakati.",
  },
];

const CompanyValues = () => {
  return (
    <section className="relative py-24 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
            Budaya Kerja
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Nilai-Nilai Perusahaan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Prinsip yang menjadi dasar kami dalam memberikan layanan terbaik
            kepada setiap klien.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="
                  group relative p-8 rounded-3xl
                  bg-gray-50 dark:bg-[#111827]
                  border border-transparent
                  hover:border-red-500/30
                  shadow-sm hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 mb-6 rounded-2xl
                    bg-red-100 dark:bg-red-500/20
                    flex items-center justify-center
                    transition group-hover:scale-110
                  "
                >
                  <Icon size={28} className="text-red-600 dark:text-red-400" />
                </div>

                {/* Text */}
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
