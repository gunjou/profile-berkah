import React from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiLinkedin,
} from "react-icons/fi";

const contactDepts = [
  {
    name: "General & Sales",
    person: "Sales Department",
    phone: "0370 785 3692",
    email: "sales@berkahangsana.com",
  },
  {
    name: "MEP Specialist",
    person: "Jayadi",
    phone: "+62 813-8480-0091",
    email: "sales@berkahangsana.com",
  },
  {
    name: "Scaffolding Division",
    person: "Desti",
    phone: "+62 852-3809-4256",
    email: "scaffolding@berkahangsana.com",
  },
  {
    name: "Fabrication & Welding",
    person: "Saliman",
    phone: "+62 853-3304-2242",
    email: "pabrikasi@berkahangsana.com",
  },
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-24 pb-8 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Header Section - Lebih Pendek */}
        <div className="mb-12">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            Kontak
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-tight">
            HUBUNGI <span className="text-angsana-merah">TIM KAMI.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Informasi Inti (Compact) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-[#161616] rounded-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <FiMapPin className="text-angsana-merah" /> Alamat Kantor
              </h3>
              <p className="text-base font-bold text-teknika-hitam dark:text-white leading-relaxed">
                Perumahan Bukit Citra Kencana, <br />
                Blok B No. 35, Labuapi, Lombok Barat.
              </p>
            </div>

            <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-sm">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <FiClock className="text-angsana-merah" /> Jam Kerja
              </h3>
              <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300 font-bold">
                <p className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-1">
                  <span>Senin - Sabtu</span> <span>08:00 - 17:00</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="https://id.linkedin.com/company/berkah-angsana"
                target="_blank"
                className="p-4 bg-gray-100 dark:bg-[#1a1a1a] text-teknika-hitam dark:text-white rounded-sm hover:bg-angsana-merah hover:text-white transition-all"
                rel="noreferrer"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:sales@berkahangsana.com"
                className="flex-grow p-4 bg-angsana-merah text-white rounded-sm font-black text-[10px] flex items-center justify-center tracking-[0.2em] hover:bg-red-700 transition-all uppercase"
              >
                Email Sekarang
              </a>
            </div>
          </div>

          {/* Kolom Kanan: List Kontak Departemen (Vertical Compact) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {contactDepts.map((dept, idx) => (
              <div
                key={idx}
                className="group p-5 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-sm hover:border-angsana-merah transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-angsana-merah transition-colors shrink-0">
                    <FiMessageSquare size={16} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-angsana-merah text-[9px] font-black uppercase tracking-widest mb-0.5">
                      {dept.name}
                    </h4>
                    <h3 className="text-lg font-bold text-teknika-hitam dark:text-white mb-3 truncate">
                      {dept.person}
                    </h3>
                    <div className="space-y-1.5 border-t border-gray-50 dark:border-gray-800 pt-3">
                      <a
                        href={`tel:${dept.phone}`}
                        className="flex items-center gap-2 text-[11px] font-bold text-gray-500 dark:text-gray-400 hover:text-angsana-merah transition-colors"
                      >
                        <FiPhone size={12} className="text-gray-300" />{" "}
                        {dept.phone}
                      </a>
                      <a
                        href={`mailto:${dept.email}`}
                        className="flex items-center gap-2 text-[10px] font-medium text-gray-400 dark:text-gray-500 hover:text-angsana-merah transition-colors truncate"
                      >
                        <FiMail size={12} className="text-gray-300" />{" "}
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ghost Text Background - Diperkecil dan dipindahkan */}
      <div className="absolute bottom-4 right-4 text-[12vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-40">
        BS.
      </div>
    </div>
  );
};

export default ContactPage;
