import React from "react";

const dataRiwayat = [
  {
    tahun: "2025",
    total: "Rp 3.8M+",
    proyek: "35+ Paket Pekerjaan",
    fokus: "Spesialis Teknis & Skala Besar",
    highlight:
      "Pembersihan Tungku & Pendukung Boiler Unit 3, Sistem Pemadam Kebakaran Area Pompa Utama",
  },
  {
    tahun: "2024",
    total: "Rp 2.4M+",
    proyek: "28+ Paket Pekerjaan",
    fokus: "Ekspansi Infrastruktur",
    highlight:
      "Pemasangan Scaffolding Unit 2, Perbaikan Bingkai Slag Conveyor Unit 1, Pengadaan Gas Lab",
  },
  {
    tahun: "2023",
    total: "Rp 1.9M+",
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
      className="w-full py-12 bg-gray-50 dark:bg-[#0f0f0f] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Konsisten dengan identitas desain Anda */}
        <div className="text-center mb-12">
          <p className="text-angsana-merah text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Rekam Jejak Teruji
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white">
            Perjalanan & Nilai Proyek
          </h2>
          <div className="h-1 w-16 bg-angsana-merah mx-auto mt-6"></div>
        </div>

        {/* Kontainer Timeline */}
        <div className="relative mt-6">
          {/* Garis Horizontal - Warna disesuaikan agar kontras di atas gray-50 */}
          <div className="absolute top-[60px] left-0 w-full h-[1px] bg-gray-300 dark:bg-gray-800"></div>

          {/* Area Scrollable */}
          <div className="overflow-x-auto pb-12 no-scrollbar">
            <div className="flex min-w-max px-4">
              {dataRiwayat.map((item, index) => (
                <div
                  key={index}
                  className="w-[320px] relative pt-24 pr-12 group"
                >
                  {/* Angka Tahun Transparan - Warna diubah ke gray-200 agar terlihat di bg-gray-50 */}
                  <span className="text-6xl font-black text-gray-200 dark:text-[#1a1a1a] absolute top-4 left-4 z-0 transition-all duration-300 group-hover:-translate-y-3 group-hover:text-red-100 dark:group-hover:text-red-950 select-none">
                    {item.tahun}
                  </span>

                  {/* Titik Indikator pada Garis */}
                  <div className="absolute top-[56px] left-0 w-3 h-3 rounded-full bg-gray-50 border-2 border-angsana-merah z-20 group-hover:scale-150 group-hover:bg-angsana-merah transition-all duration-300"></div>

                  {/* Konten Utama */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-angsana-merah font-bold text-lg">
                        {item.tahun}
                      </h3>
                      {/* Badge Proyek - Warna disesuaikan agar lebih menonjol */}
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-white dark:bg-gray-800 text-gray-600 border border-gray-200 dark:border-gray-700 rounded-full uppercase tracking-tighter shadow-sm">
                        {item.proyek}
                      </span>
                    </div>

                    <div className="text-2xl font-black text-teknika-hitam dark:text-white mb-4">
                      {item.total}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                          Fokus Utama
                        </p>
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 leading-snug">
                          {item.fokus}
                        </p>
                      </div>

                      {/* Garis pemisah disesuaikan */}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 italic">
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

        {/* Footer Informasi & Indikator Scroll */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 border-t border-gray-200 dark:border-gray-900 pt-6 gap-4">
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
            Data Berdasarkan Laporan Riwayat Pekerjaan 2021—2025
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Geser
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
          animation: geser-hint 2s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
