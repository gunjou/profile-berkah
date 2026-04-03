import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const imgConstruction = "/images/about_1.jpg";
  const imgTeam = "/images/about_2.jpg";

  return (
    <section
      id="tentang"
      className="w-full py-12 bg-white dark:bg-[#1a1a1a] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative w-full">
          <div className="border-2 border-angsana-merah p-2 inline-block shadow-xl">
            <img
              src={imgConstruction}
              alt="Konstruksi Berkah Angsana"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <div className="absolute -bottom-10 right-4 lg:left-14 w-64 border-2 border-angsana-merah p-2 bg-white dark:bg-[#1a1a1a] shadow-2xl hidden md:block">
            <img
              src={imgTeam}
              alt="Tim Lapangan Berkah Angsana"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="mt-16 lg:mt-0">
          <p className="text-angsana-merah text-sm uppercase tracking-widest font-bold mb-3">
            TENTANG KAMI
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white leading-tight mb-6">
            Solusi Teknik untuk Industri & Energi
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl text-lg">
            PT. Berkah Angsana Teknika bergerak di bidang Maintenance, MEP,
            Pabrikasi, dan Scaffolding untuk kebutuhan industri dan energi.
          </p>

          {/* Highlight kecil untuk trust */}
          <p className="text-sm text-gray-500 mb-8">
            Berpengalaman dalam berbagai proyek maintenance, perbaikan
            fasilitas, instalasi sistem, hingga pekerjaan fabrikasi dan
            scaffolding di lingkungan industri.
          </p>

          {/* Features List */}
          <div className="space-y-5">
            {[
              "Berpengalaman dalam proyek industri & energi",
              "Pengerjaan maintenance dan perbaikan fasilitas secara menyeluruh",
              "Penerapan standar keselamatan kerja (K3) di setiap proyek",
              "Komitmen terhadap kualitas dan ketepatan waktu",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0">
                  <FiCheckCircle className="text-angsana-merah text-2xl group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/profil-perusahaan")}
            className="
              mt-12 bg-angsana-merah text-white px-10 py-4 rounded-sm text-sm
              font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20
              flex items-center gap-3 tracking-widest
            "
          >
            LIHAT PROFIL & PENGALAMAN KAMI <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
