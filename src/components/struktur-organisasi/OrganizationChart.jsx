import React from "react";
import OrganizationCard from "./OrganizationCard";

import ceo from "../../assets/img/logo_arita.png";
import manager from "../../assets/img/logo_arita.png";
import staff from "../../assets/img/logo_arita.png";

const OrganizationChart = () => {
  return (
    <section className="py-28 bg-gray-50 dark:bg-[#0b1220]">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Direktur */}
        <div className="text-center">
          <OrganizationCard
            name="Ahmad Fauzi"
            role="Direktur Utama"
            image={ceo}
            highlight
          />
        </div>

        {/* Garis pemisah */}
        <div className="flex justify-center">
          <div className="w-px h-16 bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Managers */}
        <div className="grid md:grid-cols-3 gap-12">
          <OrganizationCard
            name="Siti Rahma"
            role="Manajer Operasional"
            image={manager}
          />
          <OrganizationCard
            name="Budi Santoso"
            role="Manajer Proyek"
            image={manager}
          />
          <OrganizationCard
            name="Dewi Lestari"
            role="Manajer Keuangan"
            image={manager}
          />
        </div>

        {/* Staff */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <OrganizationCard name="Andi" role="Site Engineer" image={staff} />
          <OrganizationCard name="Rina" role="Admin Proyek" image={staff} />
          <OrganizationCard
            name="Agus"
            role="Supervisor Lapangan"
            image={staff}
          />
          <OrganizationCard name="Lina" role="Quality Control" image={staff} />
        </div>
      </div>
    </section>
  );
};

export default OrganizationChart;
