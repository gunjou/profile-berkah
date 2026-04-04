import React, { useState, useEffect } from "react";
import { FiChevronDown, FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/berkahangsana.png";
import logoWhite from "../assets/berkahangsana_white.png";
import { useProjectFilter } from "../context/ProjectFilterContext";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { setActiveCategory } = useProjectFilter();

  // Load dark mode
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
    { label: "Tentang", target: "tentang" },
    // { label: "Klien", target: "clients" },
    { label: "Layanan", target: "layanan" },
    { label: "Pengalaman", target: "timeline" },
    {
      label: "Proyek",
      target: "proyek", // Klik label utama Proyek akan scroll ke section
      dropdown: [
        { label: "Semua Proyek", category: "SEMUA" },
        { label: "Maintenance", category: "Maintenance" },
        { label: "MEP", category: "MEP" },
        { label: "Scaffolding", category: "Scaffolding" },
        { label: "Pabrikasi", category: "Pabrikasi" },
      ],
    },
    { label: "Partner", target: "partner" },
    {
      label: "Halaman",
      dropdown: [
        { label: "Karir", path: "/karir" },
        // { label: "Struktur Organisasi", path: "/struktur-organisasi" },
        { label: "FAQ", path: "/faq" },
      ],
    },
    // { label: "Karir", path: "/karir" },
    { label: "Kontak", path: "/kontak" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleMenuClick = (item) => {
    // Aksi untuk filter kategori proyek
    if (item.category) {
      setActiveCategory(item.category);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection("proyek"), 300);
      } else {
        scrollToSection("proyek");
      }
      setOpenMobile(false);
      return;
    }

    // Route navigation
    if (item.path) {
      navigate(item.path);
      setOpenMobile(false);
      return;
    }

    // Scroll section
    if (item.target) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          scrollToSection(item.target);
        }, 300);
      } else {
        scrollToSection(item.target);
      }
      setOpenMobile(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-sm bg-white dark:bg-[#1a1a1a] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img
            src={isDark ? logoWhite : logo}
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Berkah Angsana
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, i) => (
            <div key={i} className="relative group">
              <div
                onClick={() => handleMenuClick(item)}
                className="flex items-center gap-1 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {item.label}
                {item.dropdown && <FiChevronDown />}
              </div>

              {/* Dropdown */}
              {item.dropdown && (
                <div
                  className="
                    absolute left-0 mt-4 w-52 p-4 rounded-2xl border
                    bg-white/80 dark:bg-[#2a2a2a]/80 backdrop-blur-xl shadow-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    translate-y-4 group-hover:translate-y-0
                    transition-all duration-300
                  "
                >
                  {item.dropdown.map((sub, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation(); // Mencegah klik ganda
                        handleMenuClick(sub);
                      }}
                      className="
                        px-3 py-2 rounded-lg cursor-pointer
                        text-gray-700 dark:text-gray-300
                        hover:bg-red-600 hover:text-white
                        transition
                      "
                    >
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-black dark:text-white"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => navigate("/kontak")}
            className="bg-red-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 transition"
          >
            Hubungi Kami →
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-3xl text-black dark:text-white"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="lg:hidden bg-white dark:bg-[#1a1a1a] px-6 py-4 flex flex-col gap-4 shadow-md overflow-y-auto max-h-screen">
          <div className="flex justify-end p-2">
            <button
              onClick={toggleDarkMode}
              className="text-2xl text-black dark:text-white"
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>
          </div>
          {menuItems.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => handleMenuClick(item)}
                className="py-2 font-medium text-gray-800 dark:text-gray-200 border-b cursor-pointer"
              >
                {item.label}
              </div>

              {item.dropdown && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {item.dropdown.map((sub, idx) => (
                    <span
                      key={idx}
                      onClick={() => handleMenuClick(sub)}
                      className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer py-1"
                    >
                      {sub.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => {
              navigate("/kontak");
              setOpenMobile(false);
            }}
            className="mt-4 bg-red-600 text-white font-semibold px-6 py-3 rounded-md"
          >
            Hubungi Kami →
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
