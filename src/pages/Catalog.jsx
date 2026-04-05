import React, { useState } from "react";
import { products, productCategories } from "../data/products";
import {
  FiSearch,
  FiArrowRight,
  FiPackage,
  FiShield,
  FiTag,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("SEMUA");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCatalog = products.filter((item) => {
    const matchesTab = activeTab === "SEMUA" || item.category === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-28 pb-20 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section - Tetap Konsisten */}
        <div className="text-left mb-12 border-l-4 border-angsana-merah pl-6">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-3">
            Product Supply & Trading
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white uppercase leading-none">
            Katalog <span className="text-angsana-merah">Material Teknik</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-4 max-w-2xl font-medium leading-relaxed">
            Daftar komponen mekanikal dan elektrikal standar industri untuk
            operasional maintenance dan proyek MEP nasional.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex flex-wrap gap-2">
            {productCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm
                  ${
                    activeTab === cat
                      ? "bg-angsana-merah text-white shadow-lg"
                      : "bg-gray-50 dark:bg-[#161616] text-gray-500 hover:text-angsana-merah"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative group">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="CARI PRODUK..."
              className="bg-gray-50 dark:bg-[#161616] pl-10 pr-4 py-2 text-[10px] font-bold tracking-widest outline-none border-b border-transparent focus:border-angsana-merah transition-all w-48 md:w-64 uppercase"
            />
          </div>
        </div>

        {/* Product Grid - Diubah menjadi 4 Kolom (LG) & Gambar Lebih Kecil */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredCatalog.map((product, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-[#161616] border border-gray-100 dark:border-gray-800 rounded-sm overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Box - Aspect Ratio lebih rapat (3:2) agar gambar kecil */}
              <div className="relative aspect-[3/2] overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
                {/* Tag Kecil di atas Gambar */}
                <div className="absolute top-2 left-2">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-tighter">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Info Box - Lebih Compact */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 mb-1 text-angsana-merah">
                  <FiTag size={10} />
                  <p className="text-[8px] font-black uppercase tracking-widest leading-none">
                    {product.brand}
                  </p>
                </div>

                <h3 className="text-xs font-black text-teknika-hitam dark:text-white uppercase mb-2 group-hover:text-angsana-merah transition-colors line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-snug font-medium line-clamp-2 mb-4 italic">
                  {product.desc}
                </p>

                {/* Footer Card - Ramping */}
                <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-200/50 dark:border-gray-800/50">
                  <div className="flex gap-2">
                    <FiShield className="text-angsana-merah" size={12} />
                    <FiPackage className="text-gray-400" size={12} />
                  </div>
                  <button
                    onClick={() => navigate("/kontak")}
                    className="text-[9px] font-black text-teknika-hitam dark:text-white uppercase tracking-widest flex items-center gap-1 hover:text-angsana-merah transition-all"
                  >
                    RFQ <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info - Ukuran disesuaikan agar tidak terlalu dominan */}
        <div className="mt-16 p-6 md:p-10 bg-teknika-hitam dark:bg-black border-l-4 border-angsana-merah rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
              Kebutuhan Material Khusus?
            </h4>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.15em] leading-relaxed">
              Kami melayani pengadaan material teknis sesuai spesifikasi khusus
              (Custom RFQ) di luar daftar katalog ini untuk mendukung site
              operasional Anda.
            </p>
          </div>
          <button
            onClick={() => navigate("/kontak")}
            className="px-8 py-3 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] hover:bg-angsana-merah hover:text-white transition-all shadow-lg"
          >
            Minta Penawaran
          </button>
        </div>
      </div>

      {/* Ghost Text Background */}
      <div className="absolute -bottom-10 right-[-5%] text-[15vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-40">
        CATALOG
      </div>
    </div>
  );
};

export default Catalog;
