import React from "react";
import { Building2, Briefcase, Award, TrendingUp } from "lucide-react";

const timeline = [
  {
    year: "2018",
    title: "Pendirian Perusahaan",
    desc: "Berkah Angsana resmi berdiri dan mulai fokus pada proyek konstruksi skala kecil.",
    icon: Building2,
  },
  {
    year: "2020",
    title: "Ekspansi Proyek",
    desc: "Mulai menangani proyek menengah dengan peningkatan tim dan peralatan.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "Kepercayaan Klien",
    desc: "Dipercaya mengerjakan berbagai proyek strategis dengan standar mutu tinggi.",
    icon: Award,
  },
  {
    year: "2024",
    title: "Pertumbuhan Berkelanjutan",
    desc: "Berkomitmen pada inovasi, efisiensi, dan konstruksi berkelanjutan.",
    icon: TrendingUp,
  },
];

const CompanyTimeline = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
            Perjalanan Kami
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Timeline Perusahaan
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Perjalanan Berkah Angsana dalam membangun kepercayaan dan kualitas
            dari waktu ke waktu.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-red-500/30 -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`
                      w-full md:w-[46%] p-8 rounded-3xl
                      bg-white dark:bg-[#111827]
                      shadow-md hover:shadow-xl
                      transition
                    `}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-500/20 flex items-center justify-center">
                        <Icon className="text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-1/2 w-5 h-5 bg-red-600 rounded-full -translate-x-1/2 border-4 border-white dark:border-[#0b1220]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;
