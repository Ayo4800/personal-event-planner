import React from "react";
import { useApp } from "../context/AppContext";
import EventCard from "../components/EventCard";

// Dashboard page
export default function Dashboard() {
  const { currentUser, userEvents } = useApp();

  // If not logged in
  if (!currentUser) {
    return (
      <section className="page-card">
        <h2>You are not logged in</h2>
        <p>Please login first.</p>
      </section>
    );
  }

  return (
    <section className="page-card">
      <h2>Welcome, {currentUser.name}</h2>
      <p>These are your upcoming events.</p>

      {userEvents.length === 0 ? (
        <p>No events yet. Add your first event.</p>
      ) : (
        <div className="event-list">
          {/* array.map() is used here as required */}
          {userEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}