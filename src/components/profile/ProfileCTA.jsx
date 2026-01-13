import React from "react";
import { ArrowRight } from "lucide-react";

const ProfileCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-red-600 to-red-700 dark:from-red-700 dark:to-red-900 text-white">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Siap Mewujudkan Proyek Anda?
        </h2>

        <p className="max-w-2xl mx-auto text-red-100 text-lg mb-10">
          Percayakan kebutuhan konstruksi Anda kepada tim profesional yang
          berkomitmen pada kualitas, ketepatan waktu, dan hasil terbaik.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="
              inline-flex items-center justify-center gap-3
              px-8 py-4 rounded-xl font-semibold
              bg-white text-red-600
              hover:bg-gray-100
              transition
            "
          >
            Hubungi Kami
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfileCTA;
