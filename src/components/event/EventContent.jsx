import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const EventContent = ({ event }) => {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
          {event.title}
        </h1>

        <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
          <span className="flex items-center gap-2">
            <FiCalendar /> {event.date}
          </span>
          <span className="flex items-center gap-2">
            <FiMapPin /> {event.location}
          </span>
        </div>
      </header>

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[420px] object-cover rounded-3xl"
      />

      <div className="text-lg text-left leading-relaxed whitespace-pre-line text-gray-800 dark:text-white">
        {event.content}
      </div>
    </article>
  );
};

export default EventContent;
