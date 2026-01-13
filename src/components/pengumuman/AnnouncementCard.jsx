import React from "react";

const AnnouncementCard = ({ title, date, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        group cursor-pointer rounded-3xl overflow-hidden
        bg-gray-50 dark:bg-[#0b1220]
        border border-gray-200 dark:border-white/10
        hover:shadow-xl transition
      "
    >
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover group-hover:scale-105 transition"
      />

      <div className="p-6 space-y-3">
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default AnnouncementCard;
