import React from "react";

const admins = [
  { name: "Andre", role: "Admin 1", img: "https://via.placeholder.com/150" },
  { name: "Wulan", role: "Admin 2", img: "https://via.placeholder.com/150" },
  { name: "Niken", role: "Admin 2", img: "https://via.placeholder.com/150" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-white bg-gradient-to-r from-black to-red-900">
      <div className="px-6 mx-auto text-center max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold">Hubungi Kami</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {admins.map((admin, index) => (
            <div key={index} className="flex flex-col items-center">
              <img 
                src={admin.img} 
                alt={admin.name} 
                className="object-cover mb-4 border-4 border-white rounded-full w-28 h-28"
              />
              <h3 className="font-bold">{admin.name}</h3>
              <p>{admin.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
