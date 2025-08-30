import React from "react";

const customers = [
  { name: "Mandiri Sekuritas", logo: "../assets/img/logo_mandiri.png" },
  { name: "Amartha", logo: "../assets/img/logo_mandiri.png" },
  { name: "Paxel", logo: "../assets/img/logo_mandiri.png" },
  { name: "Wahyoo", logo: "../assets/img/logo_mandiri.png" },
  { name: "Cisco", logo: "../assets/img/logo_mandiri.png" },
  { name: "Hubble", logo: "../assets/img/logo_mandiri.png" },
  { name: "Legoas", logo: "../assets/img/logo_mandiri.png" },
  { name: "CBN", logo: "../assets/img/logo_mandiri.png" },
  { name: "Ciputra", logo: "../assets/img/logo_mandiri.png" },
  { name: "NTUC Income", logo: "../assets/img/logo_mandiri.png" },
  { name: "Lazada", logo: "../assets/img/logo_mandiri.png" },
  { name: "Univesitas Airlanga", logo: "../assets/img/logo_mandiri.png" },
  { name: "Jawa Pos", logo: "../assets/img/logo_mandiri.png" },
];

export default function Customers() {
  return (
    <section id="customers" className="py-16 bg-white">
      <div className="max-w-6xl px-6 mx-auto text-center">
        
        {/* Title */}
        <h2 className="mb-12 text-2xl font-bold text-red-800 md:text-3xl font-poppins">
          Customer Kami
        </h2>

        {/* Logo Grid */}
        <div className="grid justify-center grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 item-center">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition grayscale hover:grayscale-0"
            >
              <img 
                src={customer.logo}
                alt={customer.name}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="px-6 py-2 text-white transition bg-red-800 rounded-md hover:bg-red-900 font-poppins">
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}
