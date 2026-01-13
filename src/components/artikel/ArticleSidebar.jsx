import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import articles from "../../data/articles";

const ArticleSidebar = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // ← ambil slug aktif

  // Ambil 3 artikel terbaru
  const recentArticles = articles.slice(0, 3);

  return (
    <aside className="space-y-10 sticky top-28">
      {/* Recent Articles */}
      <div
        className="
          p-6 rounded-3xl
          bg-gray-50 dark:bg-[#0b1220]
          border border-gray-200 dark:border-white/10
        "
      >
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
          Artikel Terbaru
        </h3>

        <ul className="space-y-3 text-left">
          {recentArticles.map((item) => {
            const isActive = item.slug === slug;

            return (
              <li
                key={item.id}
                onClick={() => navigate(`/artikel/${item.slug}`)}
                className={`
                  flex items-start gap-2 cursor-pointer transition
                  ${
                    isActive
                      ? "text-red-600 dark:text-red-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  }
                `}
              >
                <FiArrowRight
                  className={`
                    mt-1 shrink-0
                    ${isActive ? "text-red-600 dark:text-red-400" : ""}
                  `}
                />
                <span className="leading-snug">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA */}
      <div
        className="
          p-6 rounded-3xl
          bg-gradient-to-br from-red-600 to-red-700
          text-white
        "
      >
        <h3 className="text-xl font-bold mb-3">Punya Proyek?</h3>
        <p className="text-red-100 mb-4">
          Konsultasikan kebutuhan konstruksi Anda bersama tim profesional kami.
        </p>

        <button
          className="
            w-full bg-white text-red-600
            font-semibold py-3 rounded-xl
            hover:bg-gray-100 transition
          "
        >
          Hubungi Kami
        </button>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
