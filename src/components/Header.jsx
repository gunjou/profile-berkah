import React, { useState, useEffect } from "react";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiArrowRight,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/berkahangsana.png";
import logoWhite from "../assets/berkahangsana_white.png";
import { useProjectFilter } from "../context/ProjectFilterContext";

const Header = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { setActiveCategory } = useProjectFilter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Menu Utama yang sudah diurutkan berdasarkan alur section di Home
  const primaryMenu = [
    { label: "Tentang", target: "tentang" },
    { label: "Layanan", target: "layanan" },
    {
      label: "Produk",
      target: "products",
      dropdown: [{ label: "Katalog", path: "/katalog" }],
    },
    { label: "Pengalaman", target: "timeline" },
    {
      label: "Proyek",
      target: "proyek",
      dropdown: [
        { label: "Semua Proyek", category: "SEMUA" },
        { label: "Maintenance", category: "Maintenance" },
        { label: "MEP", category: "MEP" },
        { label: "Scaffolding", category: "Scaffolding" },
        { label: "Pabrikasi", category: "Pabrikasi" },
      ],
    },
    { label: "Partner", target: "partner" },
  ];

  // Menu Halaman Statis/Legal
  const secondaryMenu = [
    { label: "Karir", path: "/karir" },
    { label: "FAQ", path: "/faq" },
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
    if (item.category) {
      setActiveCategory(item.category);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection("proyek"), 300);
      } else {
        scrollToSection("proyek");
      }
    } else if (item.path) {
      navigate(item.path);
    } else if (item.target) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(item.target), 300);
      } else {
        scrollToSection(item.target);
      }
    }
    setOpenMobile(false);
  };

  const isWhiteNeeded = isDark || (!scrolled && location.pathname === "/");

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "h-20 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-white/5"
          : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer select-none shrink-0 group mr-4"
        >
          <img
            src={isWhiteNeeded ? logoWhite : logo}
            alt="Logo"
            className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-105"
          />
          <h1
            className={`
            text-lg font-black uppercase tracking-tighter leading-none whitespace-nowrap transition-colors duration-300
            ${isWhiteNeeded ? "text-white" : "text-black"}
          `}
          >
            PT. Berkah{" "}
            <span
              className={
                !scrolled && location.pathname === "/"
                  ? "text-white"
                  : "text-angsana-merah"
              }
            >
              Angsana
            </span>
          </h1>
        </div>

        {/* DESKTOP NAVIGATION - Lega & Terurut */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8 mx-4">
          {primaryMenu.map((item, i) => (
            <div key={i} className="relative group py-2">
              <div
                onClick={() => handleMenuClick(item)}
                className={`
                  flex items-center gap-1 cursor-pointer text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap
                  ${isWhiteNeeded ? "text-white/80 hover:text-white" : "text-gray-600 dark:text-gray-400 hover:text-angsana-merah"}
                `}
              >
                {item.label}{" "}
                {item.dropdown && (
                  <FiChevronDown className="group-hover:rotate-180 transition-transform" />
                )}
              </div>

              {item.dropdown && (
                <div className="absolute left-0 mt-4 w-52 bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-sm p-1">
                  {item.dropdown.map((sub, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleMenuClick(sub)}
                      className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-angsana-merah hover:text-white transition-all cursor-pointer border-b border-gray-50 dark:border-white/5 last:border-0"
                    >
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Menu Lainnya - Hanya untuk Halaman Statis */}
          <div className="relative group py-2">
            <div
              className={`
              flex items-center gap-1 cursor-pointer text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap
              ${isWhiteNeeded ? "text-white hover:text-white" : "text-angsana-merah"}
            `}
            >
              Lainnya{" "}
              <FiChevronDown className="group-hover:rotate-180 transition-transform" />
            </div>
            <div className="absolute right-0 mt-4 w-52 bg-white dark:bg-[#161616] border border-gray-100 dark:border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 rounded-sm p-1">
              {secondaryMenu.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleMenuClick(item)}
                  className="px-4 py-3 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#222] hover:text-angsana-merah transition-all cursor-pointer border-b border-gray-50 dark:border-white/5 last:border-0"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 xl:gap-6 shrink-0">
          <button
            onClick={toggleDarkMode}
            className={`
              hidden sm:flex w-10 h-10 items-center justify-center border rounded-sm transition-all
              ${isWhiteNeeded ? "border-white/20 text-white hover:border-white" : "border-gray-200 text-black dark:text-white hover:border-angsana-merah"}
            `}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button
            onClick={() => navigate("/kontak")}
            className="bg-angsana-merah text-white text-[10px] xl:text-[11px] font-black uppercase tracking-[0.2em] px-5 xl:px-8 py-3 xl:py-4 rounded-sm hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 whitespace-nowrap flex items-center gap-3"
          >
            HUBUNGI KAMI <FiArrowRight className="hidden xs:block" />
          </button>

          <button
            className={`lg:hidden text-3xl ml-2 transition-colors ${isWhiteNeeded ? "text-white" : "text-black"}`}
            onClick={() => setOpenMobile(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white dark:bg-[#0f0f0f] z-[100] transition-transform duration-500 lg:hidden ${openMobile ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-10">
            <img
              src={isDark ? logoWhite : logo}
              alt="Logo"
              className="w-10 h-10"
            />
            <button
              onClick={() => setOpenMobile(false)}
              className="text-4xl text-black dark:text-white"
            >
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col gap-5 overflow-y-auto">
            {[...primaryMenu, ...secondaryMenu].map((item, i) => (
              <div
                key={i}
                onClick={() => handleMenuClick(item)}
                className="text-xl font-black uppercase tracking-tighter text-black dark:text-white border-b border-gray-100 dark:border-white/5 pb-3 flex justify-between items-center"
              >
                {item.label}
                <FiArrowRight className="text-angsana-merah opacity-30" />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
