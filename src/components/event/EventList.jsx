import React from "react";
import { useNavigate } from "react-router-dom";
import events from "../../data/events";
import EventCard from "./EventCard";

const EventList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={() => navigate(`/event/${event.slug}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default EventList;
