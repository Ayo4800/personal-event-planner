import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import InputField from "../components/InputField";
import TextAreaField from "../components/TextAreaField";

// Add event page
export default function AddEvent() {
  const { currentUser, addEvent } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  if (!currentUser) {
    return (
      <section className="page-card">
        <h2>Login required</h2>
        <p>You must login before adding an event.</p>
      </section>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Event name is required.";
    if (!formData.date) newErrors.date = "Date is required.";
    if (!formData.time) newErrors.time = "Time is required.";
    if (!formData.description.trim()) newErrors.description = "Description is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMessage("Please fill in all fields.");
      return;
    }

    addEvent(formData);
    navigate("/dashboard");
  };

  return (
    <section className="page-card">
      <h2>Add New Event</h2>
      <p>Fill in the form below.</p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Event Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          error={errors.date}
        />

        <InputField
          label="Time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          error={errors.time}
        />

        <TextAreaField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          error={errors.description}
        />

        <InputField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          error={errors.location}
        />

        {message && <p className="info-text">{message}</p>}

        <button type="submit">Save Event</button>
      </form>
    </section>
  );
}