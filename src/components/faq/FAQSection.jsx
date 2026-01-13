import React, { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    q: "Apa layanan utama Berkah Angsana?",
    a: "Kami bergerak di bidang konstruksi, pengembangan proyek, dan maintenance dengan fokus pada kualitas, keselamatan, dan ketepatan waktu.",
  },
  {
    q: "Bagaimana proses kerja sama dimulai?",
    a: "Klien dapat menghubungi kami melalui halaman kontak. Tim kami akan melakukan diskusi awal, survey lapangan, dan penawaran resmi.",
  },
  {
    q: "Apakah Berkah Angsana menerima proyek skala kecil?",
    a: "Ya, kami melayani proyek skala kecil hingga besar dengan standar profesional yang sama.",
  },
  {
    q: "Apakah tersedia garansi pekerjaan?",
    a: "Setiap proyek dilengkapi dengan garansi sesuai kesepakatan kontrak untuk menjamin kualitas hasil pekerjaan.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0b1220]">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {faqs.map((item, index) => (
          <FAQItem
            key={index}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
