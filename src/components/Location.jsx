import React from "react";

export default function Location() {
  return (

    <section className="bg-gradient-to-r from-black via-black to-[#3c0a14] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid items-center gap-12 mx-auto text-white max-w-7xl md:grid-cols-2">
        {/* Kolom Kiri */}
        <div>
          <h2 className="mb-4 text-xl font-bold text-left font-poppins">
            LOKASI
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.1991272661799!2d116.08763504446159!3d-8.639293806780671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdb966634dc72f%3A0x65525efd036767e2!2sPT.%20Berkah%20Angsana%20Teknika!5e1!3m2!1sen!2sid!4v1758211091335!5m2!1sen!2sid"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT. Berkah Location"
          ></iframe>
        </div>

        {/* Kolom Kanan */}
        <div className="text-left">
          <p className="mb-6 text-sm text-gray-300 md:text-base font-poppins">
            Jl. Raya pengsong Raya Ruko Bukit Citra Kencana No.14A, Perampuan, Kec. Labuapi, Kabupaten Lombok Barat, Nusa Tenggara Barat. 83362
          </p>
        </div>
      </div>
    </section>
  );
}
