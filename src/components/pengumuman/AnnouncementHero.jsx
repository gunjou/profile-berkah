import React from "react";

const AnnouncementHero = () => {
  return (
    <section
      className="
        pt-32 pb-24
        bg-gradient-to-br
        from-red-600 via-red-700 to-red-800
        dark:from-[#7f1d1d] dark:via-[#991b1b] dark:to-[#450a0a]
        text-white
        relative overflow-hidden
      "
    >
      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-red-200">
          Informasi Resmi
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Pengumuman</h1>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          Informasi dan pemberitahuan resmi dari Berkah Angsana terkait
          operasional, rekrutmen, dan kegiatan perusahaan.
        </p>
      </div>
    </section>
  );
};

export default AnnouncementHero;
