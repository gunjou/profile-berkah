import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const clients = [
  { name: "Institut Pertanian Bogor", logo: "/images/logo/logo_ipb.jpg" },
  { name: "PLN Batam", logo: "/images/logo/logo_pln_batam.jpg" },
  { name: "PLN IP (PLTU Jeranjang)", logo: "/images/logo/logo_pln_ip.jpg" },
  { name: "PLN UPK Lombok", logo: "/images/logo/logo_pln.jpg" },
];

const ClientsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isCarousel = clients.length > 4;

  // Logic untuk mendeteksi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Munculkan jika scroll lebih dari 100px (bisa disesuaikan)
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const ClientCard = ({ client }) => (
    <div className="group flex flex-col items-center justify-center w-full px-2">
      <div className="w-full h-24 md:h-28 flex items-center justify-center p-5 bg-white rounded-sm shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:shadow-xl group-hover:border-angsana-merah/40 group-hover:-translate-y-2">
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-12 md:max-h-14 w-auto object-contain transition-all duration-500 filter group-hover:brightness-100"
        />
      </div>
      <p className="mt-3 text-[9px] md:text-[10px] font-black text-gray-400 dark:text-gray-500 group-hover:text-angsana-merah transition-colors duration-300 text-center uppercase tracking-widest leading-tight">
        {client.name}
      </p>
    </div>
  );

  return (
    <section
      id="clients"
      /* - Logic Animasi: 
         - Jika isVisible true: opacity-100 & posisi normal
         - Jika false: opacity-0 & bergeser ke bawah (translate-y-10)
      */
      className={`
        relative z-20 -mt-16 md:-mt-24 pb-2 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-10 invisible"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/80 dark:bg-[#0f0f0f]/90 backdrop-blur-xl rounded-sm p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-black text-teknika-hitam dark:text-white uppercase tracking-tight">
                Mitra <span className="text-angsana-merah">Terpercaya</span>
              </h2>
              <div className="w-12 h-1 bg-angsana-merah mt-2 rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] text-center md:text-right max-w-[200px]">
              Telah Dipercaya Oleh Instansi Ternama di Indonesia
            </p>
          </div>

          {isCarousel ? (
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 15 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {clients.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <ClientCard client={client} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {clients.map((client, idx) => (
                <ClientCard key={idx} client={client} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
