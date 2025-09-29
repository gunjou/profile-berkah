import React from "react";

export default function CareerSection() {
  return (
    <section className="bg-gradient-to-r from-black via-black to-[#3c0a14] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid items-center gap-12 mx-auto text-white max-w-7xl md:grid-cols-2">
        {/* Kolom Kiri */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-left font-poppins">
            KARIR
          </h2>
          <img
            src="group-photo.png"
            alt="Karir"
            className="w-full max-w-md rounded-md shadow-lg"
          />
        </div>

        {/* Kolom Kanan */}
        <div className="text-left font-poppins">
          <p className="mb-6 text-sm text-gray-300 md:text-base">
            Ingin berkarir bersama kami? klik tautan berikut untuk melihat peluang karir yang tersedia.
          </p>
          <button className="px-6 py-2 text-white transition bg-gray-800 rounded-md hover:bg-gray-900">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
