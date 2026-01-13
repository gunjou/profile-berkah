import React from "react";
import { FiCalendar, FiUser } from "react-icons/fi";

const ArticleContent = ({ article }) => {
  return (
    <article className="space-y-10">
      {/* Header */}
      <header className="space-y-4">
        <span className="text-sm font-semibold text-red-600 dark:text-red-400">
          Artikel
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <FiCalendar /> {article.date}
          </div>
          <div className="flex items-center gap-2">
            <FiUser /> {article.author}
          </div>
        </div>
      </header>

      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="
          w-full h-[420px] object-cover rounded-3xl
          border border-gray-200 dark:border-white/10
        "
      />

      {/* CONTENT — FIX DI SINI */}
      <div
        className="
          text-lg leading-relaxed whitespace-pre-line
          text-left
          text-gray-800
          dark:text-white
        "
      >
        {article.content}
      </div>
    </article>
  );
};

export default ArticleContent;
