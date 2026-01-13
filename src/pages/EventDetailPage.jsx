import React from "react";
import { useParams } from "react-router-dom";
import events from "../data/events";
import EventContent from "../components/event/EventContent";
import EventSidebar from "../components/event/EventSidebar";

const EventDetailPage = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) return null;

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <EventContent event={event} />
        </div>
        <EventSidebar />
      </div>
    </section>
  );
};

export default EventDetailPage;
