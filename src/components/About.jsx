import React from "react";
import About from "../assets/img/about_us.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="bg-gradient-to-b from-black via-[#2c0d13] to-black py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Gambar kiri */}
        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <img
            src={About}
            alt="Tentang Kami"
            className="object-cover w-full h-auto"
          />
          <div className="absolute px-4 py-2 font-semibold text-black bg-white rounded shadow top-3 right-3 font-poppins">
            Tentang Kami
          </div>
        </div>

        {/* Konten kanan */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-left md:text-3xl font-poppins">PT. Berkah Angsana</h2>
          
          <div className="space-y-6 text-gray-300 font-poppins">
            <div>
              <h3 className="font-semibold text-left text-white">Tentang Kami</h3>
              <p className="mb-4 text-sm leading-relaxed text-left">
                Berdiri sejak tahun 2020, PT. Berkah Angsana Teknika telah berkembang menjadi perusahaan yang bergerak di empat bidang utama: MEP, Sipil, Steel Fabricator, dan Trading.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-left">
                Berbasis di Kabupaten Lombok Barat, Nusa Tenggara Barat, kami tergabung dalam Asosiasi GAPENSI dan telah terpercaya sebagai vendor resmi PLN serta mengantongi sertifikasi ISO.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-left">
                Komitmen kami sederhana namun kuat: memberikan hasil maksimal, dengan standar mutu terbaik, serta menjaga integritas dalam setiap pekerjaan.
              </p>
               <p className="text-sm leading-relaxed text-left">
                Kami percaya bahwa setiap proyek bukan hanya tentang membangun atau menyediakan barang, tetapi juga tentang membangun kepercayaan dan hubungan jangka panjang dengan mitra kami.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Layanan tambahan */}
      <div className="grid items-center gap-12 mt-20 md:grid-cols-2 font-poppins">
        <div className="p-8 text-black bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-bold">Melayani Berbagai Service</h3>
          <p className="mb-6 text-gray-700">
            Berbagai customer yang kami handle baik dalam segi teknis, pemasaran, dll.
          </p>
          <button className="px-6 py-2 text-white transition bg-red-700 rounded-md hover:bg-red-800">
            Info Selengkapnya
          </button>
        </div>
        
        {/* Gambar kanan */}
        <div>
          <img
            src={About}
            alt="Service"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
