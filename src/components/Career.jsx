import React from "react";

export default function Career() {
  return (
    <section id="career" className="py-16 bg-gray-100">
      <div className="grid items-center gap-8 px-6 mx-auto max-w-7xl md:grid-cols-2">
        <img src="https://via.placeholder.com/400x250" alt="Career" className="shadow-lg rounded-xl" />
        <div>
          <h2 className="mb-4 text-3xl font-bold">Karir</h2>
          <p className="mb-6">
            Bergabunglah bersama kami untuk mengembangkan karir Anda dalam bidang teknologi.
          </p>
          <button className="px-6 py-2 text-white bg-red-700 rounded-lg hover:bg-red-800">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}
