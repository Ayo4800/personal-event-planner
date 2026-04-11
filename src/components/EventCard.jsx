import React, { useState } from "react";
import { useApp } from "../context/AppContext";

// Single event card
export default function EventCard({ event }) {
  const { deleteEvent, updateEvent } = useApp();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    ...event,
  });

  // Handle edit form typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save updated event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.description.trim() ||
      !formData.location.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    updateEvent(formData);
    setIsEditing(false);
  };

  return (
    <div className="event-card">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="event-edit-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Event name"
          />

          <div className="event-edit-grid">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Description"
          />

          <div className="card-actions">
            <button type="submit" className="edit-btn">
              Save
            </button>
            <button
              type="button"
              className="delete-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="event-title">{event.name}</h3>

          <p className="event-meta">
            <span>📅 {event.date}</span>
            <span>⏰ {event.time}</span>
          </p>

          <p className="event-location">📍 {event.location}</p>

          <p className="event-description">{event.description}</p>

          <div className="card-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteEvent(event.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
