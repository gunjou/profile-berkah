import React from "react";

const OrganizationCard = ({ name, role, image, highlight = false }) => {
  return (
    <div
      className={`
        group relative p-8 rounded-3xl text-center
        bg-white dark:bg-[#111827]
        border border-gray-100 dark:border-white/5
        shadow-sm hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1
        ${highlight ? "ring-2 ring-red-600/70 dark:ring-red-500/60" : ""}
      `}
    >
      {/* Accent glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />

      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-5">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500 to-red-700 blur opacity-30" />
        <img
          src={image}
          alt={name}
          className="
            relative w-full h-full rounded-full object-cover
            border-4 border-white dark:border-[#0b1220]
          "
        />
      </div>

      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
        {name}
      </h4>

      <p className="text-sm font-semibold mt-1 text-red-600 dark:text-red-400">
        {role}
      </p>
    </div>
  );
};

export default OrganizationCard;
