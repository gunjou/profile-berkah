import React from "react";
import { useParams, Navigate } from "react-router-dom";

import announcements from "../data/announcements";
import AnnouncementDetail from "../components/pengumuman/AnnouncementDetail";
import { Pen } from "lucide-react";
import AnnouncementSidebar from "../components/pengumuman/AnnouncementSidebar";

const PengumumanDetail = () => {
  const { slug } = useParams();

  const announcement = announcements.find((item) => item.slug === slug);

  if (!announcement) {
    return <Navigate to="/pengumuman" replace />;
  }

  return (
    <>
      <section className="pt-32 pb-24 bg-white dark:bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Content */}
          <div className="lg:col-span-2">
            <AnnouncementDetail announcement={announcement} />
          </div>

          {/* Sidebar */}
          <AnnouncementSidebar activeSlug={slug} />
        </div>
      </section>
    </>
  );
};

export default PengumumanDetail;
