import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { formatDate } from "../utils/helpers";

// Single event card
export default function EventCard({ event }) {
  const { deleteEvent, updateEvent } = useApp();

  // Control edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Form state for editing
  const [formData, setFormData] = useState({ ...event });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save edited event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.description.trim() ||
      !formData.location.trim()
    ) {
      alert("All fields are required.");
      return;
    }

    updateEvent(formData);
    setIsEditing(false);
  };

  return (
    <div className="event-card">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="event-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Event name"
          />

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

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3>{event.name}</h3>
          <p><strong>Date:</strong> {formatDate(event.date, event.time)}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Description:</strong> {event.description}</p>

          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteEvent(event.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}