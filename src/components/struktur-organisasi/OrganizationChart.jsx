import React from "react";
import OrganizationCard from "./OrganizationCard";

// ❌ HAPUS IMPORT INI (Sebab menyebabkan error Module Not Found)
// import ceo from "..//image/logo_arita.png";

const OrganizationChart = () => {
  // ✅ Gunakan path string langsung ke folder public/images
  // Jika Anda nanti punya foto asli (misal: ahmad.jpg), cukup ganti string ini
  const dummyPhoto = "/images/logo_arita.png";

  return (
    <section className="py-28 bg-gray-50 dark:bg-[#0f0f0f] transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-angsana-merah text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Struktur Organisasi
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-teknika-hitam dark:text-white">
            Tim Manajemen & Operasional
          </h2>
          <div className="w-20 h-1 bg-angsana-merah mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {/* Level 1: Direktur Utama */}
          <div className="flex justify-center">
            <OrganizationCard
              name="Ahmad Fauzi"
              role="Direktur Utama"
              image={dummyPhoto}
              highlight
            />
          </div>

          {/* Garis Konektor Tengah */}
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Level 2: Managers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OrganizationCard
              name="Siti Rahma"
              role="Manajer Operasional"
              image={dummyPhoto}
            />
            <OrganizationCard
              name="Budi Santoso"
              role="Manajer Proyek"
              image={dummyPhoto}
            />
            <OrganizationCard
              name="Dewi Lestari"
              role="Manajer Keuangan"
              image={dummyPhoto}
            />
          </div>

          {/* Garis Konektor Bawah (Opsional) */}
          <div className="hidden md:flex justify-around px-20">
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
            <div className="w-px h-8 bg-gray-200 dark:bg-gray-800" />
          </div>

          {/* Level 3: Staff/Field Team */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <OrganizationCard
              name="Andi"
              role="Site Engineer"
              image={dummyPhoto}
            />
            <OrganizationCard
              name="Rina"
              role="Admin Proyek"
              image={dummyPhoto}
            />
            <OrganizationCard
              name="Agus"
              role="Supervisor Lapangan"
              image={dummyPhoto}
            />
            <OrganizationCard
              name="Lina"
              role="Quality Control"
              image={dummyPhoto}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
