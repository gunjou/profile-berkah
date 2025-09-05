import React from "react";

export default function Location() {
  return (
    <section className="bg-gradient-to-r from-black via-black to-[#3c0a14] py-16 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-xl font-bold text-left text-white">
          Location
        </h2>

        {/* Map */}
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3799978259893!2d112.7378262743108!3d-7.316614872088016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbd356fa5f9d%3A0x7a2343f6e90a5f6!2sJl.%20Kayoon%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1693728495000!5m2!1sen!2sid"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PT. Berkah Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
