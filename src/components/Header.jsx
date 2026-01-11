import React, { useState, useEffect } from "react";
import {
  FiChevronDown,
  FiGrid,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import LogoLight from "../assets/img/logo_large.png";
import LogoDark from "../assets/img/logo_white.png";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load dark mode from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";
    setIsDark(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const menuItems = [
    { label: "Beranda" },
    { label: "Tentang" },
    {
      label: "Layanan",
      dropdown: ["Konstruksi Bangunan", "Renovasi Rumah", "Perencanaan Proyek"],
    },
    {
      label: "Halaman",
      dropdown: ["Profil Perusahaan", "Struktur Organisasi", "FAQ"],
    },
    {
      label: "Berita",
      dropdown: ["Artikel", "Pengumuman", "Event"],
    },
    { label: "Kontak" },
  ];

  return (
    <header
      className="
        w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-sm
        bg-white transition-colors
        dark:bg-[#1a1a1a]      /* Hitam lembut */
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 select-none">
          <img
            src={isDark ? LogoDark : LogoLight}
            alt="Logo"
            className="w-10 h-10 object-contain transition-all"
          />
          <h1 className="text-2xl font-bold text-black dark:text-white transition-colors">
            Berkah Angsana
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition">
                  {item.label}
                </span>
                {item.dropdown && (
                  <FiChevronDown className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />
                )}
              </div>

              {/* Dropdown modern */}
              {item.dropdown && (
                <div
                  className="
                  absolute left-0 mt-4 p-4 w-52 rounded-2xl border
                  bg-white/80 dark:bg-[#2a2a2a]/80 
                  backdrop-blur-xl shadow-lg
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  translate-y-4 group-hover:translate-y-0
                  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                "
                >
                  {item.dropdown.map((sub, idx) => (
                    <div
                      key={idx}
                      className="
                        px-3 py-2 rounded-lg cursor-pointer
                        text-gray-700 dark:text-gray-300
                        hover:bg-red-500 hover:text-white
                        transition
                      "
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition">
            Hubungi Kami →
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-black dark:text-white transition cursor-pointer"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          {/* Grid Icon */}
          <FiGrid className="text-2xl cursor-pointer text-black dark:text-white" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-black dark:text-white"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="lg:hidden bg-white dark:bg-[#1a1a1a] shadow-md px-6 py-4 flex flex-col gap-4 transition-colors">
          {menuItems.map((item, i) => (
            <div key={i} className="flex flex-col">
              <span className="py-2 border-b text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700">
                {item.label}
              </span>

              {item.dropdown && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {item.dropdown.map((sub, idx) => (
                    <span
                      key={idx}
                      className="text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 py-1 text-sm"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md mt-4">
            Hubungi Kami →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
