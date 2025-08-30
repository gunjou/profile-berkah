import React from "react";
import Logo from "../assets/img/logo_large.png";
import { FiSearch } from "react-icons/fi"; // icon search

// Navbar component
export default function Navbar() {
  
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">

        {/* Logo & Nama Perusahaan */}
        <div className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="Logo" 
            className="object-contain w-8 h-8"
          />
          <div className="ml-2 text-xl font-bold font-poppins">PT. Berkah Angsana</div>
        </div>
        

        {/* Menu */}
        <ul className="hidden gap-6 text-sm font-medium md:flex">
          <li><a href="#about" className="hover:text-red-600 font-poppins">Tentang Kami</a></li>
          <li><a href="#customers" className="hover:text-red-600 font-poppins">Customer</a></li>
          <li><a href="#career" className="hover:text-red-600 font-poppins">Karir</a></li>
          <li><a href="#contact" className="hover:text-red-600 font-poppins">Kontak</a></li>

          {/* Icon Search */}
          <li>
            <button className="hover:text-red-600">
              <FiSearch size={18} />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden">☰</button>
      </div>
    </nav>
  );
}

