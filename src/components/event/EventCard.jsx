import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const EventCard = ({ event, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer group rounded-3xl overflow-hidden
        bg-gray-50 dark:bg-[#0b1220]
        border border-gray-200 dark:border-white/10
        hover:shadow-xl transition
      "
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-56 w-full object-cover group-hover:scale-105 transition"
      />

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {event.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <FiCalendar /> {event.date}
          </span>
          <span className="flex items-center gap-1">
            <FiMapPin /> {event.location}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {event.excerpt}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
