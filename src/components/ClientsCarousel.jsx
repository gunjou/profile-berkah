import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import logo_plnbatam from "../assets/img/logo_plnbatam.png";
// import logo_plnbatam from "../assets/img/hero_bg.jpg";

// Dummy logo path (bisa diganti ke local image)
const logos = [
  logo_plnbatam,
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/Indosat_Ooredoo_Hutchison_logo.svg",
  "https://upload.wikimedia.org/wikipedia/id/5/55/Lintasarta.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/21/LINE_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Samsung_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d7/Intel_logo_%282020%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/25/Lenovo_logo_2015.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/9e/Xl-axiata_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Kominfo_logo_2022.svg",
  "https://upload.wikimedia.org/wikipedia/commons/7/72/Bangkit_logo.svg",
];

const ClientsCarousel = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-[#111] transition-colors">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-teknika-hitam dark:text-white mb-12">
          Telah dipercaya oleh
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center h-24 px-6 py-4 bg-gray-100 dark:bg-[#1c1c1c] rounded-md shadow-md hover:scale-105 transition-transform">
                <img
                  src={logo}
                  alt={`client-${idx}`}
                  className="max-h-12 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsCarousel;
