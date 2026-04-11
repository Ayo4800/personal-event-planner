import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import EventCard from "../components/EventCard";

// Dashboard page
export default function Dashboard() {
  const { currentUser, userEvents } = useApp();

  if (!currentUser) {
    return (
      <section className="page-card">
        <h2>You are not logged in</h2>
        <p>Please login first.</p>
      </section>
    );
  }

  return (
    <section className="dashboard-wrapper">
      {/* Top welcome card */}
      <div className="dashboard-hero">
        <div>
          <h2>Welcome back, {currentUser.name} </h2>
          <p>Stay on top of your meetings, appointments, and personal plans.</p>
        </div>

        <div className="dashboard-hero-buttons">
          <Link to="/add-event">
            <button type="button" className="primary-btn">
              + Add Event
            </button>
          </Link>

          <button type="button" className="secondary-btn">
            View This Week
          </button>
        </div>
      </div>

      {/* Event list section */}
      <div className="events-section">
        <div className="section-header">
          <h3>Upcoming Events</h3>
          <p>{userEvents.length} event(s)</p>
        </div>

        {userEvents.length === 0 ? (
          <div className="empty-state">
            <p className="empty-title">No events yet</p>
            <p className="empty-text">
              Click “Add Event” to create your first planner event.
            </p>
          </div>
        ) : (
          <div className="event-list">
            {userEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
