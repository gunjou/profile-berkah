import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiPhone, FiLinkedin, FiInstagram } from "react-icons/fi";
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
          <h3 className="text-[11px] font-black uppercase tracking-[0.3em] mb-5 border-b border-white/10 pb-1 inline-block">
            Contact Directory
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            {/* Kolom Kiri: General & MEP */}
            <div className="space-y-5">
              {/* 1. General / Sales */}
              <div className="flex flex-col">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  General / Sales
                </p>
                <p className="text-[14px] font-bold text-white italic leading-none mb-2">
                  Sales Department
                </p>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiPhone size={11} className="text-red-500" />
                    </div>
                    0370 785 3692
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 tracking-wider lowercase">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiMail size={11} className="text-red-500" />
                    </div>
                    sales@berkahangsana.com
                  </div>
                </div>
              </div>

              {/* 2. MEP Specialist */}
              <div className="pt-4 border-t border-white/5 flex flex-col">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  MEP Specialist
                </p>
                <p className="text-[14px] font-bold text-white italic leading-none mb-2">
                  Taqi
                </p>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiPhone size={11} className="text-red-500" />
                    </div>
                    +62 819-0764-7544
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 tracking-wider lowercase">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiMail size={11} className="text-red-500" />
                    </div>
                    mep@berkahangsana.com
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Scaffolding & Pabrikasi */}
            <div className="space-y-5">
              {/* 3. Scaffolding */}
              <div className="flex flex-col">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  Scaffolding
                </p>
                <p className="text-[14px] font-bold text-white italic leading-none mb-2">
                  Desti
                </p>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiPhone size={11} className="text-red-500" />
                    </div>
                    +62 852-3809-4256
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 tracking-wider lowercase">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiMail size={11} className="text-red-500" />
                    </div>
                    scaffolding@berkahangsana.com
                  </div>
                </div>
              </div>

              {/* 4. Pabrikasi */}
              <div className="pt-4 border-t border-white/5 flex flex-col">
                <p className="text-[9px] font-black text-red-500 uppercase tracking-widest mb-1">
                  Pabrikasi / Welding
                </p>
                <p className="text-[14px] font-bold text-white italic leading-none mb-2">
                  Saliman
                </p>
                <div className="flex flex-col gap-0">
                  <div className="flex items-center gap-2 text-[12px] text-gray-300">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiPhone size={11} className="text-red-500" />
                    </div>
                    +62 853-3304-2242
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-300 tracking-wider lowercase">
                    <div className="w-5 h-5 flex items-center justify-center bg-white/5 rounded-sm shrink-0">
                      <FiMail size={11} className="text-red-500" />
                    </div>
                    pabrikasi@berkahangsana.com
                  </div>
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
            <div className="flex justify-center gap-3">
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
              <a
                href="https://www.instagram.com/berkahangsana.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="
            w-10 h-10 flex items-center justify-center 
            bg-white/10 hover:bg-white/20 
            rounded-md border border-white/20 
            transition
            "
              >
                <FiInstagram className="text-xl" />
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
