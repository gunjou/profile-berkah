import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import announcements from "../../data/announcements";

const AnnouncementSidebar = ({ activeSlug }) => {
  const navigate = useNavigate();

  return (
    <aside className="space-y-8 sticky top-28">
      {/* Recent Announcements */}
      <div
        className="
          p-6 rounded-3xl
          bg-gray-50 dark:bg-[#0b1220]
          border border-gray-200 dark:border-white/10
        "
      >
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
          Pengumuman Terbaru
        </h3>

        <ul className="space-y-3 text-left">
          {announcements.map((item) => {
            const isActive = item.slug === activeSlug;

            return (
              <li
                key={item.id}
                onClick={() => navigate(`/pengumuman/${item.slug}`)}
                className={`
                  flex items-start gap-2 cursor-pointer transition
                  ${
                    isActive
                      ? "text-red-600 dark:text-red-400 font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                  }
                `}
              >
                <FiArrowRight className="mt-1 shrink-0" />
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
        <h3 className="text-xl font-bold mb-3">Butuh Informasi?</h3>
        <p className="text-red-100 mb-4">
          Hubungi kami untuk informasi lebih lanjut terkait pengumuman ini.
        </p>

        <button
          onClick={() => navigate("/kontak")}
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

export default AnnouncementSidebar;
