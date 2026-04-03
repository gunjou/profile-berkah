import React from "react";
import { FiShield, FiLock, FiFileText, FiUserCheck } from "react-icons/fi";

const policySections = [
  {
    title: "Pengumpulan Data",
    desc: "Kami mengumpulkan informasi yang Anda berikan secara sukarela saat menghubungi kami melalui formulir kontak atau email untuk keperluan korespondensi bisnis.",
    icon: <FiFileText />,
  },
  {
    title: "Penggunaan Informasi",
    desc: "Data Anda digunakan semata-mata untuk menanggapi permintaan layanan, memproses kontrak kerja, dan memberikan pembaruan terkait proyek yang sedang berjalan.",
    icon: <FiUserCheck />,
  },
  {
    title: "Kerahasiaan Data",
    desc: "PT. Berkah Angsana Teknika tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan tertulis dari Anda.",
    icon: <FiShield />,
  },
  {
    title: "Keamanan Sistem",
    desc: "Kami menerapkan standar keamanan teknis untuk melindungi data Anda dari akses yang tidak sah, perubahan, atau penghapusan yang tidak semestinya.",
    icon: <FiLock />,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-24 pb-12 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="mb-12 border-angsana-merah pl-6">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Legalitas & Privasi
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white uppercase leading-tight">
            Kebijakan <span className="text-angsana-merah">Privasi.</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 font-medium">
            PT. Berkah Angsana Teknika berkomitmen untuk melindungi privasi
            Anda. Kebijakan ini menjelaskan bagaimana kami mengelola informasi
            yang kami terima.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {policySections.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 bg-gray-50 dark:bg-[#161616] rounded-sm hover:bg-white dark:hover:bg-[#1a1a1a] border border-transparent hover:border-gray-100 dark:hover:border-gray-800 transition-all shadow-sm flex items-start gap-5"
            >
              <div className="w-10 h-10 shrink-0 bg-white dark:bg-[#0f0f0f] flex items-center justify-center text-angsana-merah shadow-sm text-xl transition-transform group-hover:scale-110">
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
        <div className="mt-12 p-6 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest italic">
            * Terakhir diperbarui:{" "}
            {new Date().toLocaleDateString("id-ID", {
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-[11px] font-medium text-gray-500 dark:text-gray-400">
            Ada pertanyaan?{" "}
            <a
              href="mailto:sales@berkahangsana.com"
              className="text-angsana-merah font-bold underline"
            >
              Hubungi Tim Legal Kami
            </a>
          </p>
        </div>
      </div>

      {/* Ghost Text Background - Seperti gaya Kontak/NotFound */}
      <div className="absolute bottom-4 right-4 text-[12vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-40">
        PRIVACY
      </div>
    </div>
  );
};

export default PrivacyPolicy;
