import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    /* min-h-screen: Memastikan kontainer setinggi layar.
       pt-20: Memberikan ruang agar konten tidak tertutup Header yang 'fixed'.
    */
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f0f0f] relative overflow-hidden px-6 pt-20">
      {/* Ghost Text Background - Tetap menggunakan style angka besar transparan */}
      <h1 className="absolute text-[18rem] md:text-[30rem] font-black text-gray-50 dark:text-[#161616] select-none z-0 leading-none">
        404
      </h1>

      <div className="relative z-10 text-center mb-10">
        {/* Label Atas */}
        <p className="text-angsana-merah text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Pemberitahuan Sistem
        </p>

        {/* Headline Utama */}
        <h2 className="text-4xl md:text-6xl font-black text-teknika-hitam dark:text-white mb-6 leading-tight">
          Halaman Tidak <br />
          <span className="text-angsana-merah">Ditemukan.</span>
        </h2>

        {/* Deskripsi Profesional */}
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-12 text-lg leading-relaxed">
          Mohon maaf, tautan yang Anda tuju tidak tersedia atau telah
          dipindahkan. Silakan periksa kembali alamat URL Anda atau gunakan
          navigasi di bawah ini.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
          >
            <FiArrowLeft size={18} /> Kembali ke Sebelumnya
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-angsana-merah text-white font-bold text-xs tracking-widest uppercase rounded-sm hover:bg-red-700 transition-all shadow-lg shadow-red-500/20"
          >
            <FiHome size={18} /> Ke Beranda Utama
          </button>
        </div>
      </div>

      {/* Indikator Scroll Halus di Bawah (Opsional) */}
      <div className="absolute bottom-10 flex flex-col items-center animate-bounce opacity-30">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
          Gulir
        </p>
        <div className="w-[1px] h-8 bg-gray-400"></div>
      </div>

      {/* Aksen Garis Gradasi di paling bawah kontainer screen */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-angsana-merah to-transparent opacity-30"></div>
    </div>
  );
};

export default NotFound;
