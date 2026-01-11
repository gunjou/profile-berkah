import React from "react";
import { FiUsers, FiAward, FiTool, FiBriefcase } from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers className="text-3xl text-angsana-merah" />,
    value: "150+",
    label: "Klien Puas",
  },
  {
    icon: <FiBriefcase className="text-3xl text-angsana-merah" />,
    value: "80+",
    label: "Proyek Berkualitas",
  },
  {
    icon: <FiAward className="text-3xl text-angsana-merah" />,
    value: "8",
    label: "Penghargaan",
  },
  {
    icon: <FiTool className="text-3xl text-angsana-merah" />,
    value: "20+",
    label: "Tahun Pengalaman",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-white dark:bg-[#1a1a1a]">
      <section className="w-full py-14 bg-transparent relative -mt-12">
        {/* Floating Stats Box */}
        <div
          className="
        max-w-5xl mx-auto 
        px-8 py-7 rounded-xl
        backdrop-blur-md
        
        /* Light Mode Smooth */
        bg-white/95 border border-gray-200 shadow-xl 
        
        /* Dark Mode Soft + More Blended */
        dark:bg-[#262626]/70 
        dark:border-[#333] 
        dark:shadow-[0_0_20px_rgba(0,0,0,0.4)]
        transition-all
      "
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                {/* Icon */}
                {item.icon}

                {/* Value */}
                <h3 className="text-2xl font-bold text-angsana-merah">
                  {item.value}
                </h3>

                {/* Label */}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsSection;
