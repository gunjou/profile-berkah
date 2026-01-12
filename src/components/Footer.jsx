import React from "react";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

// Ganti dengan path logo proyek Anda
import Logo from "../assets/img/logo_white.png";

const Footer = () => {
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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
            <h2 className="text-xl font-bold">PT. Berkah Angsana Teknika</h2>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            PT. Berkah Angsana Teknika menyediakan layanan Maintenance &
            Service, MEP (Mechanical, Electrical & Plumbing), Pabrikasi &
            Welding, dan Scaffolding. Partner resmi Arita Indonesia dan
            Hydromart Utama Indonesia untuk wilayah Lombok.
          </p>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h3 className="text-lg font-bold mb-4">Menu Cepat</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Tentang Kami</li>
            <li className="hover:text-white cursor-pointer">Layanan</li>
            <li className="hover:text-white cursor-pointer">Proyek</li>
            <li className="hover:text-white cursor-pointer">Partner</li>
            <li className="hover:text-white cursor-pointer">Hubungi Kami</li>
          </ul>
        </div>

        {/* OFFICE INFO */}
        <div>
          <h3 className="text-lg font-bold mb-4">Alamat Kantor</h3>
          <p className="text-sm text-gray-300 flex items-start gap-2">
            <FiMapPin className="mt-1" />
            Ruko Bukit Citra Kencana No.6, Jl. Pengsong Raya, Desa Perampuan,
            Labuapi, Lombok Barat, NTB. 83361
          </p>

          <h3 className="text-lg font-bold mt-6 mb-2">Kontak</h3>
          <p className="text-sm text-gray-300 flex items-center gap-2">
            <FiPhone /> 0370 785 3692
          </p>
          <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
            <FiMail /> sales@berkahangsana.com
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>

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

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-white/20 pt-5 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} PT. Berkah Angsana Teknika | Semua hak
        dilindungi.
        <div className="mt-2 flex justify-center gap-6 text-xs">
          <span className="hover:text-white cursor-pointer">
            Kebijakan Privasi
          </span>
          <span className="hover:text-white cursor-pointer">
            Syarat & Ketentuan
          </span>
          <span className="hover:text-white cursor-pointer">Kontak</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
