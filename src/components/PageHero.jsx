import React from "react";

const PageHero = ({ label, title, description }) => {
  return (
    <section
      className="
        pt-32 pb-24
        bg-gradient-to-br
        from-red-600 via-red-700 to-red-800
        dark:from-[#7f1d1d] dark:via-[#991b1b] dark:to-[#450a0a]
        text-white
        relative overflow-hidden
      "
    >
      {/* Decorative blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {label && (
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-red-200">
            {label}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{title}</h1>

        {description && (
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
