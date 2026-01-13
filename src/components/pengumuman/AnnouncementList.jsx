import React from "react";
import { useNavigate } from "react-router-dom";
import announcements from "../../data/announcements";
import AnnouncementCard from "./AnnouncementCard";

const AnnouncementList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {announcements.map((item) => (
          <AnnouncementCard
            key={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
            onClick={() => navigate(`/pengumuman/${item.slug}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default AnnouncementList;
