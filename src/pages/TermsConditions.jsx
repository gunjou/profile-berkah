import React from "react";
import {
  FiCheckCircle,
  FiBriefcase,
  FiAlertCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";

const termSections = [
  {
    title: "Lingkup Layanan",
    desc: "Layanan mencakup MEP, Scaffolding, Pabrikasi, dan Maintenance sesuai dengan spesifikasi yang disepakati dalam Surat Perintah Kerja (SPK) atau Kontrak.",
    icon: <FiBriefcase />,
  },
  {
    title: "Standar Keselamatan",
    desc: "Kami menjamin seluruh pekerjaan dilaksanakan sesuai standar K3 (Kesehatan dan Keselamatan Kerja) industri yang berlaku untuk melindungi personel dan aset.",
    icon: <FiShield />,
  },
  {
    title: "Ketentuan Pembayaran",
    desc: "Pembayaran dilakukan berdasarkan termin yang disepakati. Seluruh tagihan akan diproses setelah Berita Acara Serah Terima (BAST) ditandatangani.",
    icon: <FiCheckCircle />,
  },
  {
    title: "Batasan Tanggung Jawab",
    desc: "Kami bertanggung jawab atas kualitas pekerjaan sesuai kontrak. Namun, kami tidak bertanggung jawab atas kerusakan akibat kelalaian operasional di luar kendali kami.",
    icon: <FiAlertCircle />,
  },
];

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="mb-12 border-angsana-merah pl-6">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Dokumen Hukum
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white uppercase leading-tight">
            Syarat & <span className="text-angsana-merah">Ketentuan.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 font-medium italic">
            Harap baca ketentuan penggunaan layanan kami untuk memastikan
            kerjasama yang transparan dan profesional antara PT. Berkah Angsana
            Teknika dan mitra kerja.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid md:grid-cols-2 gap-4">
          {termSections.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gray-50 dark:bg-[#161616] rounded-sm hover:bg-white dark:hover:bg-[#1a1a1a] border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-all shadow-sm flex items-start gap-5"
            >
              <div className="w-10 h-10 shrink-0 bg-white dark:bg-[#0f0f0f] flex items-center justify-center text-angsana-merah shadow-sm text-xl transition-transform group-hover:rotate-12">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm font-black text-teknika-hitam dark:text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note Footer */}
        <div className="mt-12 p-6 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 text-gray-400">
            <FiClock size={16} />
            <p className="text-[11px] font-bold uppercase tracking-widest">
              Berlaku Sejak: 01 Januari 2024
            </p>
          </div>
          {/* <button
            onClick={() => window.print()}
            className="text-[11px] font-black text-angsana-merah hover:underline uppercase tracking-widest"
          >
            Cetak Dokumen
          </button> */}
        </div>
      </div>

      {/* Ghost Text Background */}
      <div className="absolute bottom-4 right-4 text-[12vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-40 uppercase">
        Terms
      </div>
    </div>
  );
};

export default TermsConditions;
