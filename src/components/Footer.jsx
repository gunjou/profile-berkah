import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

import logoWhite from "../assets/berkahangsana_white.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      id="footer"
      className="
        w-full pt-20 pb-10 
        bg-gradient-to-r from-black via-[#0c0003] to-[#60000d]
        dark:from-black dark:via-[#0c0003] dark:to-[#60000d]
        text-white
      "
    >
      {/* Grid disesuaikan menjadi 6 kolom untuk pembagian 2-2-1-1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        {/* 1. COMPANY INFO (MENGAMBIL 2 KOLOM) */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img src={logoWhite} alt="Logo" className="w-12 h-12" />
            <h2 className="text-xl font-bold leading-tight">
              PT. Berkah Angsana Teknika
            </h2>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
            PT. Berkah Angsana Teknika menyediakan layanan Maintenance &
            Service, MEP (Mechanical, Electrical & Plumbing), Pabrikasi &
            Welding, dan Scaffolding. Partner resmi Arita Indonesia dan
            Hydromart Utama Indonesia untuk wilayah Lombok.
          </p>
        </div>

        {/* 2 & 3. KONTAK DEPARTEMEN (MENGAMBIL 2 KOLOM) */}
        <div className="lg:col-span-2">
          <h3 className="text-md font-bold mb-4 uppercase tracking-wider border-b border-white/10 pb-1 inline-block">
            Kontak Departemen
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Kolom Kiri: General & Scaffolding */}
            <div className="space-y-4">
              {/* General */}
              <div>
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  General / Sales
                </p>
                <p className="text-[13px] font-bold text-white italic">
                  Sales Department
                </p>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                  <p className="flex items-center gap-1.5">
                    <FiPhone size={10} /> 0370 785 3692
                  </p>
                  <p className="flex items-center gap-1.5 mt-0.5">
                    <FiMail size={10} /> sales@berkahangsana.com
                  </p>
                </div>
              </div>

              {/* Scaffolding (Pindah ke Sini) */}
              <div className="pt-3 border-t border-white/5">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  Scaffolding
                </p>
                <p className="text-[13px] font-bold text-white italic">Desti</p>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                  <p className="flex items-center gap-1.5">
                    <FiPhone size={10} /> +62 852-3809-4256
                  </p>
                  <p className="flex items-center gap-1.5 mt-0.5">
                    <FiMail size={10} /> scaffolding@berkahangsana.com
                  </p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: MEP & Pabrikasi */}
            <div className="space-y-4">
              {/* MEP (Pindah ke Sini) */}
              <div>
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  MEP
                </p>
                <p className="text-[13px] font-bold text-white italic">
                  Jayadi
                </p>
                <p className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <FiPhone size={10} /> +62 813-8480-0091
                </p>
                <p className="flex items-center flex items-center gap-1.5 mt-0.5 text-gray-400/0">
                  .
                </p>
              </div>

              {/* Pabrikasi */}
              <div className="border-t border-white/5">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  Pabrikasi
                </p>
                <p className="text-[13px] font-bold text-white italic">
                  Saliman
                </p>
                <div className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                  <p className="flex items-center gap-1.5">
                    <FiPhone size={10} /> +62 853-3304-2242
                  </p>
                  <p className="flex items-center gap-1.5 mt-0.5">
                    <FiMail size={10} /> pabrikasi@berkahangsana.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. OFFICE INFO (1 KOLOM) */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-6">Alamat Kantor</h3>
          <p className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
            <MdLocationPin className="text-xl text-red-500 flex-shrink-0" />
            <p className="text-xs text-gray-300 flex items-start gap-2 text-left">
              Perumahan Bukit Citra Kencana, <br /> Blok B No. 35, Jl. Pengsong
              Raya, Desa Perampuan, Labuapi, <br />
              Lombok Barat, NTB. 83361
            </p>
          </p>
        </div>

        {/* 5. SOCIAL (1 KOLOM) */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold mb-6">Ikuti Kami</h3>
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <a
                href="https://id.linkedin.com/company/berkah-angsana"
                target="_blank"
                rel="noopener noreferrer"
                className="
            w-10 h-10 flex items-center justify-center 
            bg-white/10 hover:bg-white/20 
            rounded-md border border-white/20 
            transition
            "
              >
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-gray-400 text-[11px] font-medium tracking-widest uppercase">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} PT. Berkah Angsana Teknika. Seluruh Hak
            Dilindungi.
          </p>
          <div className="flex gap-6">
            <span
              onClick={() => navigate("/privacy-policy")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privasi
            </span>
            <span
              onClick={() => navigate("/terms-conditions")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Ketentuan
            </span>
            <span
              onClick={() => navigate("/kontak")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Kontak
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
