import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const AboutUs = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-[#1a1a1a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Images */}
        <div className="relative w-full">
          {/* Large image */}
          <div className="border-2 border-angsana-merah p-2 inline-block">
            <img
              src="https://picsum.photos/600/500?random=1"
              alt="Konstruksi"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Small image overlay */}
          <div className="absolute -bottom-10 left-14 w-64 border-2 border-angsana-merah p-2 bg-white dark:bg-[#1a1a1a]">
            <img
              src="https://picsum.photos/500/350?random=2"
              alt="Tim"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="mt-16 lg:mt-0">
          {/* Title */}
          <p className="text-angsana-merah text-sm uppercase tracking-widest font-semibold mb-2">
            TENTANG KAMI
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white leading-tight mb-6">
            Kami memiliki visi untuk masa depan konstruksi yang lebih baik.
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">
            Berkah Angsana berkomitmen menghadirkan layanan konstruksi terbaik
            dengan mengutamakan kualitas, efisiensi, dan keamanan. Kami
            menangani proyek dengan berbagai tingkat kompleksitas dan senantiasa
            menguasai teknologi terbaru untuk hasil yang lebih optimal.
          </p>

          {/* Certification and Features */}
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-angsana-merah text-xl" />
              <span>Insinyur Bersertifikat</span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-angsana-merah text-xl" />
              <span>Tim Profesional dan Berpengalaman</span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-angsana-merah text-xl" />
              <span>Hasil Pekerjaan Lebih Efektif & Terukur</span>
            </div>
          </div>

          {/* CTA */}
          <button
            className="
              mt-10 bg-angsana-merah text-white px-8 py-4 rounded-md text-lg
              font-semibold hover:bg-red-700 transition flex items-center gap-2
            "
          >
            PELAJARI LEBIH LANJUT →
          </button>

          {/* Signature */}
          <div className="flex items-center gap-4 mt-10">
            <img
              src="https://i.pravatar.cc/60?img=12"
              alt="Founder"
              className="w-14 h-14 rounded-full border-2 border-angsana-merah"
            />
            <div>
              <h4 className="text-lg font-bold text-teknika-hitam dark:text-white">
                Andi Firmansyah
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Direktur Utama Berkah Angsana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
