import React from "react";

const customers = [
  { name: "Mandiri Sekuritas", logo: "logo_mandiri_sekuritas.png" },
  { name: "Amartha", logo: "logo_amartha.png" },
  { name: "Paxel", logo: "logo_amartha.png" },
  { name: "Wahyoo", logo: "logo_amartha.png" },
  { name: "Cisco", logo: "logo_amartha.png" },
  { name: "Hubble", logo: "logo_amartha.png" },
  { name: "Legoas", logo: "logo_amartha.png" },
  { name: "CBN", logo: "logo_amartha.png" },
  { name: "Ciputra", logo: "logo_amartha.png" },
  { name: "NTUC Income", logo: "logo_amartha.png" },
  { name: "Lazada", logo: "logo_amartha.png" },
  { name: "Univesitas Airlanga", logo: "logo_amartha.png" },
  { name: "Jawa Pos", logo: "logo_amartha.png" },
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
