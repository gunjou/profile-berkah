import React from "react";

const FAQHero = () => {
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

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest uppercase text-red-200">
            Help Center
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-red-100/90 text-lg leading-relaxed">
            Temukan jawaban atas pertanyaan yang sering diajukan mengenai
            layanan, proses kerja, dan kerja sama dengan Berkah Angsana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
