import React from "react";
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
  const isCarousel = clients.length > 4;

  const ClientCard = ({ client }) => (
    <div className="group flex flex-col items-center justify-center w-full">
      {/* Logo Container - Menggunakan -translate-y-4 agar lebih terlihat */}
      <div className="w-full h-32 flex items-center justify-center p-6 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-500 group-hover:shadow-2xl group-hover:border-angsana-merah/30 group-hover:-translate-y-4">
        <img
          src={client.logo}
          alt={client.name}
          className="max-h-16 w-auto object-contain transition-all duration-500"
        />
      </div>

      <p className="mt-3 text-[11px] md:text-xs font-bold text-gray-500 dark:text-gray-400 group-hover:text-angsana-merah transition-colors duration-300 text-center uppercase tracking-tight leading-tight px-2">
        {client.name}
      </p>
    </div>
  );

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-[#0f0f0f] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-angsana-merah text-sm font-bold tracking-widest uppercase mb-3">
            Mitra Terpercaya Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-teknika-hitam dark:text-white">
            Telah Dipercaya Oleh Instansi Ternama
          </h2>
          <div className="w-24 h-1 bg-angsana-merah mx-auto mt-5 rounded-full"></div>
        </div>

        {isCarousel ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
            /* 
               PENTING: 
               - pt-10 memberikan ruang di atas agar hover tidak terpotong.
               - !overflow-visible memaksa swiper tidak memotong elemen yang keluar sedikit dari garis.
            */
            className="pb-10 pt-10 px-4 !overflow-visible"
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 pb-10 pt-10">
            {clients.map((client, idx) => (
              <div key={idx} className="w-[140px] sm:w-[180px] md:w-[220px]">
                <ClientCard client={client} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsCarousel;
