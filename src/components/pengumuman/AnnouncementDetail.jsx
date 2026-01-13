import React from "react";
import { FiCalendar } from "react-icons/fi";

const AnnouncementDetail = ({ announcement }) => {
  return (
    <article className="space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-red-600 dark:text-red-400">
            Pengumuman Resmi
          </span>

          {announcement.important && (
            <span
              className="
                text-xs font-bold px-3 py-1 rounded-full
                bg-red-600 text-white
              "
            >
              PENTING
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {announcement.title}
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
          <FiCalendar />
          {announcement.date}
        </div>
      </header>

      {/* Image */}
      {announcement.image && (
        <img
          src={announcement.image}
          alt={announcement.title}
          className="
            w-full h-[380px] object-cover rounded-3xl
            border border-gray-200 dark:border-white/10
          "
        />
      )}

      {/* Content */}
      <div
        className="
          whitespace-pre-line
          text-lg leading-relaxed
          text-gray-800 dark:text-white
        "
      >
        {announcement.content}
      </div>
    </article>
  );
};

export default AnnouncementDetail;
