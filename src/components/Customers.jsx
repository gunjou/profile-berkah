import React from "react";

const customers = [
  { name: "Mandiri Sekuritas", logo: "mandiri-sekuritas.png" },
  { name: "Amartha", logo: "amartha.png" },
  { name: "Paxel", logo: "paxel.png" },
  { name: "Wahyoo", logo: "wahyoo.png" },
  { name: "Cisco", logo: "cisco.png" },
  { name: "Hubble", logo: "hubble.png" },
  { name: "Legoas", logo: "legoas.png" },
  { name: "CBN", logo: "cbn.png" },
  { name: "Ciputra", logo: "ciputra.png" },
  { name: "NTUC Income", logo: "ntuc-income.png" },
  { name: "Lazada", logo: "lazada-co-id.png" },
  { name: "Univesitas Airlanga", logo: "ua-logo.png" },
  { name: "Jawa Pos", logo: "jawa-pos.png" },
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
            <div key={index} className="flex items-center justify-center">
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
