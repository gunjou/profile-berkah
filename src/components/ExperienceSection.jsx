import React from "react";

const dataRiwayat = [
  {
    tahun: "2025",
    total: "Rp 11.3M+",
    proyek: "35+ Paket Pekerjaan",
    fokus: "Spesialis Teknis & Skala Besar",
    highlight:
      "Pembersihan Tungku & Pendukung Boiler Unit 3, Sistem Pemadam Kebakaran Area Pompa Utama",
  },
  {
    tahun: "2024",
    total: "Rp 6.7M+",
    proyek: "28+ Paket Pekerjaan",
    fokus: "Ekspansi Infrastruktur",
    highlight:
      "Pemasangan Scaffolding Unit 2, Perbaikan Bingkai Slag Conveyor Unit 1, Pengadaan Gas Lab",
  },
  {
    tahun: "2023",
    total: "Rp 2.0M+",
    proyek: "22+ Paket Pekerjaan",
    fokus: "Mekanikal & Fabrikasi",
    highlight:
      "Pemeliharaan Sistem Kontrol, Fabrikasi Komponen Mekanikal PLTU, Optimalisasi Fasilitas",
  },
  {
    tahun: "2022",
    total: "Rp 1.2M+",
    proyek: "18+ Paket Pekerjaan",
    fokus: "Pemeliharaan Fasilitas",
    highlight:
      "Sistem Pengolahan Air (WTP), Perbaikan Pompa Diesel Pemadam, Rehabilitasi Gedung CCR",
  },
  {
    tahun: "2021",
    total: "Rp 950Jt+",
    proyek: "15+ Paket Pekerjaan",
    fokus: "Fondasi Awal",
    highlight:
      "Pemasangan Pompa Takaran Mixer, Shelter EDG, Tangga Pengukuran Emisi Jeranjang",
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="timeline"
      /* Mengurangi py-24 menjadi py-16 */
      className="relative w-full py-12 bg-gray-50 dark:bg-[#0c0c0c] transition-colors overflow-hidden"
    >
      {/* Ghost Text Background - Mengecilkan ukuran font */}
      <div className="absolute top-6 right-[-2%] text-[14vw] font-black text-gray-100 dark:text-[#141414] select-none -z-0 leading-none opacity-50">
        HISTORY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - Mengurangi mb-20 menjadi mb-12 */}
        <div className="max-w-3xl mb-12 border-l-4 border-angsana-merah pl-5 md:pl-8">
          <p className="text-angsana-merah text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2">
            Rekam Jejak Teruji
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-teknika-hitam dark:text-white leading-tight uppercase">
            PERJALANAN & <br />
            <span className="text-angsana-merah">NILAI PROYEK.</span>
          </h2>
        </div>

        {/* Kontainer Timeline */}
        <div className="relative">
          {/* Garis Horizontal Industrial - Posisi disesuaikan dengan tinggi padding baru */}
          <div className="absolute top-[50px] left-0 w-full h-[1.5px] bg-gray-200 dark:bg-gray-800"></div>

          {/* Area Scrollable */}
          <div className="overflow-x-auto pb-8 no-scrollbar cursor-grab active:cursor-grabbing">
            <div className="flex min-w-max">
              {dataRiwayat.map((item, index) => (
                <div
                  key={index}
                  /* Mengurangi lebar dari 320px ke 280px dan pt-24 ke pt-16 */
                  className="w-[280px] relative pt-16 pr-10 group"
                >
                  {/* Angka Tahun Transparan - Mengecilkan text-8xl ke text-6xl */}
                  <span className="text-6xl font-black text-gray-200/50 dark:text-[#1a1a1a] absolute top-2 left-0 z-0 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-red-100/50 dark:group-hover:text-red-900/20 select-none">
                    {item.tahun}
                  </span>

                  {/* Titik Indikator Custom */}
                  <div className="absolute top-[46px] left-0 w-3 h-3 bg-white dark:bg-[#0c0c0c] border-2 border-gray-300 dark:border-gray-700 z-20 transition-all duration-300 group-hover:border-angsana-merah group-hover:rotate-45 group-hover:scale-110"></div>

                  {/* Konten Utama */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-angsana-merah font-black text-lg tracking-tighter">
                        {item.tahun}
                      </h3>
                      <span className="text-[8px] font-black px-1.5 py-0.5 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-700 rounded-sm uppercase tracking-widest shadow-sm">
                        {item.proyek}
                      </span>
                    </div>

                    {/* Mengecilkan text-3xl ke text-2xl */}
                    <div className="text-2xl font-black text-teknika-hitam dark:text-white mb-4 tracking-tight">
                      {item.total}
                    </div>

                    <div className="space-y-3">
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
                          Fokus Strategis
                        </p>
                        <p className="text-xs font-bold text-gray-800 dark:text-gray-200 leading-tight">
                          {item.fokus}
                        </p>
                      </div>

                      {/* Mengurangi padding-top 5 ke 3 */}
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-800 relative">
                        <div className="absolute top-0 left-0 w-0 h-[2px] bg-angsana-merah transition-all duration-500 group-hover:w-8"></div>
                        <p className="text-[11px] leading-relaxed text-gray-500 dark:text-gray-400 italic font-medium">
                          "{item.highlight}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Timeline Info - Mengurangi mt-12 ke mt-6 */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-900 gap-4">
          <p className="text-[9px] text-gray-400 font-black tracking-[0.3em] uppercase">
            Data Historis Pekerjaan 2021 — 2025
          </p>
          <div className="flex items-center gap-3 group">
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest group-hover:text-angsana-merah transition-colors">
              Geser Eksplorasi
            </span>
            <div className="w-12 h-[2px] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-angsana-merah animate-geser-hint"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes geser-hint {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-geser-hint {
          animation: geser-hint 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
