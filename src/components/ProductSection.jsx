import React from "react";
import { FiArrowRight, FiBox, FiSettings, FiShield } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    name: "Metering Dosing Pumps",
    brand: "Arita / Milton Roy",
    desc: "Pompa presisi tinggi untuk injeksi bahan kimia dan pengolahan air dengan akurasi debit yang ketat.",
    image: "/images/products/metering_pump_obl.jpg", // Sesuaikan path foto 1
    category: "Precision Pumping",
  },
  {
    name: "Progressive Cavity Pumps",
    brand: "Netzsch / Seepex Standard",
    desc: "Solusi pemindahan cairan kental (viskositas tinggi) dan abrasif untuk kebutuhan operasional manufaktur.",
    image: "/images/products/green_cavity_pump.jpg", // Sesuaikan path foto 2
    category: "Transfer System",
  },
  {
    name: "Heavy Duty Centrifugal Pumps",
    brand: "Ebara / Grundfos Industrial",
    desc: "Pompa sirkulasi skala besar untuk sistem pendingin, pemadam kebakaran, dan distribusi air industri.",
    image: "/images/products/centrifugal_pump_service.jpg", // Sesuaikan path foto 3
    category: "MEP Infrastructure",
  },
];

const ProductSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="products"
      /* Ganti ke bg-white */
      className="py-12 bg-white dark:bg-[#0f0f0f] relative overflow-hidden transition-colors"
    >
      {/* Background Decor - Ghost Text SUPPLY untuk konsistensi Asymmetrical Layering */}
      <div className="absolute top-10 left-[-2%] text-[18vw] font-black text-gray-50 dark:text-[#141414] select-none -z-0 leading-none opacity-80">
        SUPPLY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl border-l-4 border-angsana-merah pl-6">
            <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-3">
              Supply & Trading
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white leading-tight uppercase">
              Pengadaan Barang <br />
              <span className="text-angsana-merah">& Material Teknik.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-6 text-sm font-medium leading-relaxed">
              Kami menyediakan suplai komponen industri berkualitas tinggi untuk
              mendukung operasional MEP dan Maintenance proyek Anda di seluruh
              Indonesia.
            </p>
          </div>

          <button
            onClick={() => navigate("/katalog")}
            className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-teknika-hitam dark:text-white border-b-2 border-angsana-merah pb-2 hover:text-angsana-merah transition-all mb-2"
          >
            Lihat Katalog Lengkap{" "}
            <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Mini Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              /* Card menggunakan bg-gray-50 agar kontras di atas bg-white */
              className="group bg-gray-50 dark:bg-[#161616] rounded-sm overflow-hidden border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:bg-white dark:hover:bg-[#1a1a1a] transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-[#0c0c0c]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-0 right-0">
                  <span className="px-4 py-2 bg-angsana-merah text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  {product.brand}
                </p>
                <h3 className="text-xl font-bold text-teknika-hitam dark:text-white mb-4 group-hover:text-angsana-merah transition-colors uppercase tracking-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-8 font-medium italic">
                  "{product.desc}"
                </p>

                <div className="flex items-center gap-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    <FiShield className="text-angsana-merah text-sm" /> Original
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    <FiSettings className="text-angsana-merah text-sm" />{" "}
                    Certified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Tambahan - Ramping & Modern */}
        <div className="mt-20 p-8 bg-teknika-hitam dark:bg-black rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8 border-b-4 border-angsana-merah">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white dark:bg-[#1a1a1a] text-angsana-merah flex items-center justify-center shrink-0 shadow-xl">
              <FiBox size={28} />
            </div>
            <div>
              <h4 className="text-white font-black uppercase text-sm tracking-widest">
                Kebutuhan Khusus (Custom)?
              </h4>
              <p className="text-gray-400 text-[11px] mt-1 font-medium uppercase tracking-tight">
                Melayani pengadaan material teknis sesuai spesifikasi khusus
                proyek Anda.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/kontak")}
            className="w-full lg:w-auto px-10 py-4 bg-white text-black font-black text-[11px] uppercase tracking-[0.2em] hover:bg-angsana-merah hover:text-white transition-all shadow-lg"
          >
            Minta Penawaran
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
