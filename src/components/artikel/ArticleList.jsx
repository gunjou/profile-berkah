import React from "react";
import { useNavigate } from "react-router-dom";
import articles from "../../data/articles";

const ArticleList = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {articles.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/artikel/${item.slug}`)}
            className="
              group cursor-pointer rounded-3xl overflow-hidden
              bg-gray-50 dark:bg-[#0b1220]
              hover:shadow-xl transition
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover group-hover:scale-105 transition"
            />

            <div className="p-6 space-y-3">
              <span className="text-sm text-red-600 dark:text-red-400">
                {item.date}
              </span>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleList;
