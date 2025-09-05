import React from "react";

const admins = [
  { name: "Andre", role: "Admin 1", img: "andre.jpg" },
  { name: "Wulan", role: "Admin 2", img: "wulan.jpg" },
  { name: "Niken", role: "Admin 2", img: "niken.png" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-r from-black via-black to-[#3c0a14]"
    >
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-white font-poppins">
          Hubungi Kami
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {admins.map((admin, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={admin.img}
                alt={admin.name}
                className="object-cover mb-4 border-4 border-white rounded-full w-28 h-28"
              />
              <h3 className="font-bold text-white">{admin.name}</h3>
              <p className="text-white">{admin.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
