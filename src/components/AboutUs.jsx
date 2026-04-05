import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const imgConstruction = "/images/about_1.jpg";
  const imgTeam = "/images/about_2.jpg";

  return (
    <section
      id="tentang"
      className="relative w-full py-12 md:py-20 bg-white dark:bg-[#0f0f0f] transition-colors overflow-hidden"
    >
      {/* 1. Ghost Text Background - Aksen Modern Industrial */}
      <div className="absolute top-10 left-[-5%] text-[18vw] font-black text-gray-50 dark:text-[#141414] select-none -z-0 leading-none opacity-80 dark:opacity-40">
        ABOUT
      </div>

      {/* 2. Decorative Diagonal Line - Menghubungkan alur visual dari atas */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 dark:bg-[#111] -skew-x-12 translate-x-20 -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Image Layering */}
        <div className="relative w-full lg:pr-12">
          {/* Main Image dengan Border Offset */}
          <div className="relative z-10">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-angsana-merah/20 dark:border-angsana-merah/10 -z-10"></div>
            <div className="p-2 bg-white dark:bg-[#1a1a1a] shadow-2xl">
              <img
                src={imgConstruction}
                alt="Konstruksi Berkah Angsana"
                className="w-full h-auto object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Secondary Image - Floating Card Style */}
          <div className="absolute -bottom-12 -right-6 md:right-0 w-48 md:w-72 p-2 bg-white dark:bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 hidden sm:block ">
            <img
              src={imgTeam}
              alt="Tim Lapangan Berkah Angsana"
              className="w-full h-auto object-cover"
            />
            <div className="p-3">
              <p className="text-[10px] font-black text-angsana-merah uppercase tracking-widest">
                In-House Team
              </p>
              <p className="text-[9px] text-gray-400 font-bold uppercase">
                Expertise & Safety First
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Content dengan Border Accent */}
        <div className="mt-12 lg:mt-0 border-l-0 lg:border-l-4 border-angsana-merah lg:pl-12 py-4">
          <p className="text-angsana-merah text-xs md:text-sm uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-angsana-merah hidden lg:block"></span>
            Profil Perusahaan
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-[1.1] mb-8 uppercase">
            Solusi Teknikal <br />
            <span className="text-angsana-merah">Terpercaya.</span>
          </h2>

          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium italic">
              "Kami bergerak di bidang Maintenance, MEP, Pabrikasi, dan
              Scaffolding untuk menjawab tantangan industri dan energi
              nasional."
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-loose">
              PT. Berkah Angsana Teknika bukan sekadar kontraktor. Kami adalah
              mitra strategis yang mengedepankan kualitas pengerjaan presisi,
              ketepatan waktu, dan standar keselamatan K3 yang ketat dalam
              setiap lingkup pekerjaan maintenance hingga infrastruktur energi.
            </p>
          </div>

          {/* Checkbox Features - Compact Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              "Skala Proyek Nasional",
              "Standar K3 Internasional",
              "Pengerjaan Presisi",
              "Kualitas Material Terjamin",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <FiCheckCircle className="text-angsana-merah text-xl flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="text-gray-800 dark:text-gray-200 font-bold text-xs uppercase tracking-tight">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          {/* <button
            onClick={() => navigate("/profil-perusahaan")}
            className="mt-12 group relative inline-flex items-center gap-4 bg-teknika-hitam dark:bg-white text-white dark:text-black px-10 py-5 rounded-sm text-[11px] font-black tracking-[0.2em] uppercase hover:bg-angsana-merah dark:hover:bg-angsana-merah dark:hover:text-white transition-all overflow-hidden"
          >
            Pelajari Selengkapnya
            <FiArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
