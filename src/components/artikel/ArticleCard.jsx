import React from "react";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

const ArticleCard = ({ title, excerpt, date, image }) => {
  return (
    <div
      className="
        group rounded-3xl overflow-hidden
        bg-white dark:bg-[#0f172a]
        border border-gray-200 dark:border-white/10
        hover:shadow-xl transition
      "
    >
      {/* Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FiCalendar />
          {date}
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {excerpt}
        </p>

        <div className="pt-4">
          <span
            className="
              inline-flex items-center gap-2
              text-red-600 dark:text-red-400
              font-semibold
              group-hover:gap-3 transition-all
            "
          >
            Baca Selengkapnya
            <FiArrowUpRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
