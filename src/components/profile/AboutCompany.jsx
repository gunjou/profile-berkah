import React from "react";

const AboutCompany = () => {
  const companyImg = "/images/maintenance_berkah.jpg";

  return (
    <section className="relative py-24 bg-white dark:bg-[#0f0f0f] transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <span className="inline-block mb-4 text-xs font-bold tracking-[0.2em] text-angsana-merah uppercase">
            Tentang Perusahaan
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white mb-8 leading-tight">
            Membangun Kepercayaan Melalui Kualitas Kerja.
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <strong className="text-teknika-hitam dark:text-white font-bold">
                PT Berkah Angsana
              </strong>{" "}
              adalah mitra strategis yang bergerak di bidang konstruksi,
              maintenance, dan solusi teknikal industri dengan fokus utama pada
              aspek mutu, ketepatan waktu, serta standar keselamatan kerja yang
              ketat.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Berbekal pengalaman teknis yang mendalam, kami telah dipercaya
              menangani berbagai proyek skala industri maupun komersial secara
              profesional. Pendekatan kami yang transparan dan berorientasi pada
              hasil menjadikan kami solusi andal bagi kebutuhan infrastruktur
              Anda.
            </p>
          </div>

          {/* Quick Stats atau Poin Tambahan (Opsional untuk mempercantik) */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-gray-100 dark:border-gray-800 pt-10">
            <div>
              <h4 className="text-2xl font-bold text-angsana-merah">100%</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Komitmen Keamanan
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-angsana-merah">Tepat</h4>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                Waktu Pelaksanaan
              </p>
            </div>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative group order-1 md:order-2">
          {/* Dekorasi Bingkai Belakang */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-angsana-merah/20 rounded-tr-3xl transition-all group-hover:scale-110" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-angsana-merah/20 rounded-bl-3xl transition-all group-hover:scale-110" />

          {/* Image Container */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={companyImg}
              alt="Aktivitas Proyek PT Berkah Angsana"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
