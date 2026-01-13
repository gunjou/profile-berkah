import React from "react";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import events from "../../data/events";

const EventSidebar = () => {
  const navigate = useNavigate();
  const { slug } = useParams(); // slug aktif

  // Ambil 3 event terbaru
  const recentEvents = events.slice(0, 3);

  return (
    <aside className="space-y-10 sticky top-28">
      {/* Recent Events */}
      <div
        className="
          p-6 rounded-3xl
          bg-gray-50 dark:bg-[#0b1220]
          border border-gray-200 dark:border-white/10
        "
      >
        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
          Event Terbaru
        </h3>

        <ul className="space-y-3 text-left">
          {recentEvents.map((item) => {
            const isActive = item.slug === slug;

            return (
              <li
                key={item.id}
                onClick={() => navigate(`/event/${item.slug}`)}
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

                <div className="leading-snug">
                  <span>{item.title}</span>

                  <div className="flex items-center gap-1 text-xs mt-1 text-gray-500 dark:text-gray-400">
                    <FiMapPin size={12} />
                    {item.location}
                  </div>
                </div>
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
        <h3 className="text-xl font-bold mb-3">Ikuti Event Kami</h3>
        <p className="text-red-100 mb-4">
          Dapatkan informasi terbaru seputar kegiatan dan proyek Berkah Angsana.
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

export default EventSidebar;
