import React, { useState } from "react";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";

const faqData = [
  {
    question: "Apa saja bidang layanan utama PT. Berkah Angsana Teknika?",
    answer:
      "Kami melayani empat pilar utama: Maintenance & Service industri, MEP (Mechanical, Electrical, Plumbing), Pabrikasi & Welding, serta Scaffolding. Selain itu, kami memiliki divisi Trading untuk pengadaan barang dan material teknik sesuai kebutuhan spesifik klien.",
  },
  {
    question:
      "Apakah PT. Berkah Angsana Teknika melayani proyek di luar wilayah Lombok?",
    answer:
      "Ya, jangkauan layanan kami berskala nasional. Kami memiliki rekam jejak proyek di berbagai wilayah Indonesia, termasuk Nias dan Riau, serta bekerja sama secara profesional dengan mitra strategis seperti PLN Batam dan instansi lainnya di luar NTB.",
  },
  {
    question: "Bagaimana dengan pengadaan material dan suku cadang?",
    answer:
      "Melalui layanan Trading kami, kami menyediakan material dan suku cadang dari berbagai brand sesuai request atau kebutuhan teknis di lapangan. Meskipun kami bermitra dengan Arita dan Hydromart, kami tetap fleksibel dalam menyediakan suplai dari manufaktur lain demi kepuasan klien.",
  },
  {
    question: "Siapa saja klien yang telah bekerja sama dengan perusahaan?",
    answer:
      "Klien kami mencakup sektor pemerintahan dan swasta, termasuk berbagai unit PLN (seperti PLN Batam, PLN IP), sektor perhotelan, hingga fasilitas publik dan industri manufaktur di berbagai wilayah Indonesia.",
  },
  {
    question: "Bagaimana prosedur untuk permintaan pengadaan barang (Trading)?",
    answer:
      "Anda dapat mengirimkan Request for Quotation (RFQ) atau daftar spesifikasi barang yang dibutuhkan melalui tim Sales kami. Kami akan memberikan penawaran harga terbaik dengan estimasi waktu pengiriman yang kompetitif.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-28 pb-12 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-angsana-merah text-[10px] font-black uppercase tracking-[0.3em] mb-3">
            Pusat Bantuan
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-teknika-hitam dark:text-white uppercase leading-tight">
            Pertanyaan <span className="text-angsana-merah">Umum</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-4 max-w-xl mx-auto font-medium leading-relaxed">
            Informasi mengenai jangkauan proyek nasional, layanan pengadaan
            barang (Trading), dan dukungan teknis PT. Berkah Angsana Teknika.
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-100 dark:border-gray-800 rounded-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-5 flex items-center justify-between bg-gray-50 dark:bg-[#161616] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition-colors text-left"
              >
                <span className="text-sm md:text-base font-bold text-teknika-hitam dark:text-white pr-4">
                  {item.question}
                </span>
                <div className="shrink-0 text-angsana-merah">
                  {activeIndex === index ? (
                    <FiMinus size={20} />
                  ) : (
                    <FiPlus size={20} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#111]">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
            Butuh informasi lebih detail?
          </p>
          <a
            href="/kontak"
            className="inline-flex items-center gap-2 text-xs font-black text-angsana-merah hover:underline uppercase tracking-widest"
          >
            <FiMessageCircle size={16} /> Hubungi Sales / Technical Support
          </a>
        </div>
      </div>

      {/* Ghost Text Background */}
      <div className="absolute -bottom-10 -left-10 text-[20vw] font-black text-gray-50 dark:text-[#121212] -z-0 select-none leading-none opacity-30">
        FAQ
      </div>
    </div>
  );
};

export default FAQPage;
