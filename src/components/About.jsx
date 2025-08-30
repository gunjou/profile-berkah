import React from "react";
import About from "../assets/img/about_us.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="bg-gradient-to-b from-black via-[#2c0d13] to-black py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="grid items-center gap-12 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Gambar kiri */}
        <div className="relative">
          <img
            src={About}
            alt="Tentang Kami"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute px-4 py-2 font-semibold text-black bg-white rounded-md shadow top-4 left-4 font-poppins">
            Tentang Kami
          </div>
        </div>

        {/* Konten kanan */}
        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl font-poppins">PT. Berkah Angsana</h2>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-semibold text-white font-poppins">Mobile Application</h3>
              <p className="text-sm font-poppins">
                Building mobile applications is never easy. From logistics app to e-commerce app,
                we’ve done them all. Done them all well. Done them fast.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white font-poppins">Web Application</h3>
              <p className="text-sm font-poppins">
                We can build any web application you need. Company profile? E-commerce?
                Custom features? We’ve got you covered with a strong team of web developers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white font-poppins">UI/UX Design</h3>
              <p className="text-sm font-poppins">
                All things are designed & few things are designed well. 
                We try to elevate your ideas with great UI/UX design suited to your taste.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Layanan tambahan */}
      <div className="grid items-center gap-12 mt-20 md:grid-cols-2">
        <div className="p-8 text-black bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-bold font-poppins">Melayani Berbagai Service</h3>
          <p className="mb-6 text-gray-700 font-poppins">
            Berbagai customer yang kami handle baik dalam segi teknis, pemasaran, dll.
          </p>
          <button className="px-6 py-2 text-white transition bg-red-700 rounded-md hover:bg-red-800 font-poppins">
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
