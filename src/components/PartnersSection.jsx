import React from "react";
import { FiCheckCircle, FiArrowUpRight, FiLink } from "react-icons/fi";

const partners = [
  {
    name: "Arita Indonesia",
    logo: "/images/logo_arita.webp",
    desc: "Produsen valve dan fitting industri terbesar di Indonesia. Kami adalah partner resmi wilayah Lombok untuk penyediaan dan maintenance.",
    badge: "Official Partner • Lombok",
    url: "https://www.arita.co.id/",
  },
  {
    name: "Hydromart Utama Indonesia",
    logo: "/images/logo_hydromart.webp",
    desc: "Penyedia solusi water treatment dan equipment teknikal. Mendukung kebutuhan plumbing, RO, dan instalasi industri.",
    badge: "Official Partner • Hydromart",
    url: "https://www.hydromart.co.id",
  },
];

const PartnersSection = () => {
  return (
    <section
      id="partner"
      /* Perubahan BG ke gray-50 */
      className="relative w-full py-12 bg-gray-50 dark:bg-[#0c0c0c] transition-colors overflow-hidden"
    >
      {/* Ghost Text Background - Disesuaikan agar kontras di BG gray-50 & Dark Mode */}
      <div className="absolute bottom-10 left-[-5%] text-[15vw] font-black text-white dark:text-[#1a1a1a] select-none -z-0 leading-none opacity-100 dark:opacity-40">
        NETWORK
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Asymmetrical Alignment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-l-4 border-angsana-merah pl-6">
          <div className="max-w-2xl">
            <p className="text-angsana-merah text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
              Partner Strategis
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-tight uppercase">
              SINERGI BERSAMA <br />
              <span className="text-angsana-merah">MITRA INDUSTRI.</span>
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-medium max-w-xs md:text-right leading-relaxed">
            Berkolaborasi dengan produsen terkemuka untuk memastikan kualitas
            material terbaik di setiap proyek.
          </p>
        </div>

        {/* Partner Cards - Diubah ke bg-white agar pop di atas gray-50 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 md:p-10 border border-gray-200 dark:border-white/5 rounded-sm flex flex-col md:flex-row items-center md:items-start gap-8 hover:border-angsana-merah/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Logo Container - Menggunakan bg-gray-50 agar kontras di dalam kartu putih */}
              <div className="w-32 h-32 bg-gray-50 dark:bg-[#0f0f0f] p-6 flex items-center justify-center shrink-0 border border-gray-100 dark:border-gray-800 group-hover:border-angsana-merah/20 transition-all">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-w-full max-h-full object-contain transition-all duration-500"
                />
              </div>

              {/* Info Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 mb-3 text-angsana-merah">
                  <FiCheckCircle size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-teknika-hitam dark:text-white uppercase tracking-tight mb-4 group-hover:text-angsana-merah transition-colors">
                  {p.name}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                  {p.desc}
                </p>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 dark:text-gray-600 hover:text-angsana-merah uppercase tracking-widest transition-all"
                >
                  <FiLink /> Kunjungi Website <FiArrowUpRight />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Tag */}
        <div className="mt-16 text-center border-t border-gray-200 dark:border-gray-800 pt-10">
          {/* <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
            Supporting Your Engineering Excellence Since 2021
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
