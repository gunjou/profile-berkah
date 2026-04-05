import React from "react";
import { FiBriefcase, FiMapPin, FiSend, FiInfo } from "react-icons/fi";

const jobVacancies = [
  //   {
  //     title: "Technician MEP",
  //     location: "Lombok / National",
  //     type: "Full-time",
  //     description:
  //       "Melakukan instalasi dan pemeliharaan sistem mekanikal, elektrikal, dan plumbing pada proyek industri/komersial.",
  //     requirements: [
  //       "Minimal SMK/D3 Teknik Elektro/Mesin",
  //       "Pengalaman min. 2 tahun",
  //       "Bersedia ditugaskan ke luar kota",
  //     ],
  //   },
  //   {
  //     title: "Project Coordinator",
  //     location: "Lombok Barat (HQ)",
  //     type: "Full-time",
  //     description:
  //       "Mengkoordinasikan jadwal proyek, tenaga kerja, dan material untuk memastikan proyek selesai tepat waktu.",
  //     requirements: [
  //       "S1 Teknik Sipil/Industri/Mesin",
  //       "Memiliki jiwa kepemimpinan",
  //       "Mahir menggunakan Ms. Project/AutoCAD",
  //     ],
  //   },
  //   {
  //     title: "Welder / Fabricator",
  //     location: "Pabrikasi Workshop",
  //     type: "Contract",
  //     description:
  //       "Melakukan pengelasan dan perakitan struktur besi/baja sesuai dengan gambar teknik yang diberikan.",
  //     requirements: [
  //       "Memiliki sertifikat Welder aktif",
  //       "Paham gambar teknik (Shop Drawing)",
  //       "Disiplin pada standar K3",
  //     ],
  //   },
  //   {
  //     title: "Sales Engineer",
  //     location: "National / Trading Div.",
  //     type: "Full-time",
  //     description:
  //       "Melakukan penetrasi pasar untuk layanan trading material teknik dan pengadaan barang industri.",
  //     requirements: [
  //       "Background teknik lebih disukai",
  //       "Kemampuan negosiasi yang baik",
  //       "Memiliki networking di industri/PLN",
  //     ],
  //   },
];

const CareerPage = () => {
  const hasJobs = jobVacancies.length > 0;

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-28 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Ghost Text Background */}
      <div className="absolute -top-10 -right-10 text-[22vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-40 uppercase">
        {hasJobs ? "Jobs" : "Join"}
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="mb-12 pl-6">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Peluang Karir
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white uppercase leading-tight">
            Membangun <span className="text-angsana-merah">Masa Depan.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 font-medium">
            Jadilah bagian dari tim profesional kami dalam membangun
            infrastruktur dan layanan teknis terbaik di seluruh penjuru
            Indonesia.
          </p>
        </div>

        {/* LOGIKA CONDITIONAL RENDERING */}
        {hasJobs ? (
          /* TAMPILKAN LIST JIKA ADA LOWONGAN */
          <div className="grid md:grid-cols-2 gap-4">
            {jobVacancies.map((job, idx) => (
              <div
                key={idx}
                className="group p-6 bg-gray-50 dark:bg-[#161616] rounded-sm border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:bg-white dark:hover:bg-[#1a1a1a] transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white dark:bg-[#0f0f0f] text-angsana-merah shadow-sm">
                      <FiBriefcase size={20} />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-gray-200 dark:bg-[#222] text-gray-600 dark:text-gray-400 uppercase tracking-widest rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-teknika-hitam dark:text-white uppercase mb-2">
                    {job.title}
                  </h3>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 mb-4">
                    <FiMapPin className="text-angsana-merah" /> {job.location}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>
                <a
                  href="mailto:hrd@berkahangsana.com"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-teknika-hitam dark:bg-black text-white text-[10px] font-black uppercase tracking-widest hover:bg-angsana-merah transition-all rounded-sm"
                >
                  <FiSend size={12} /> Lamar Sekarang
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* TAMPILKAN EMPTY STATE JIKA KOSONG */
          <div className="p-12 bg-gray-50 dark:bg-[#161616] border border-dashed border-gray-200 dark:border-gray-800 rounded-sm text-center">
            <div className="w-16 h-16 bg-white dark:bg-[#0f0f0f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gray-300">
              <FiInfo size={32} />
            </div>
            <h3 className="text-xl font-bold text-teknika-hitam dark:text-white uppercase mb-2">
              Belum Ada Lowongan Aktif
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 font-medium">
              Saat ini kami belum membuka posisi spesifik. Namun, kami selalu
              mencari talenta berbakat untuk bergabung dalam Talent Pool kami.
            </p>
            {/* <a
              href="mailto:hrd@berkahangsana.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-angsana-merah text-white font-black text-xs uppercase tracking-widest rounded-sm hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
            >
              <FiMail size={16} /> Kirim CV ke Talent Pool
            </a> */}
          </div>
        )}

        {/* Talent Pool Footer Note (Hanya muncul jika ada lowongan, agar tidak double) */}
        {hasJobs && (
          <div className="mt-12 p-6 bg-angsana-merah/5 border border-angsana-merah/20 rounded-sm text-center">
            <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
              Tidak menemukan posisi yang sesuai?{" "}
              <a
                href="mailto:hrd@berkahangsana.com"
                className="text-angsana-merah underline ml-2"
              >
                Kirim CV Anda ke Talent Pool
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerPage;
