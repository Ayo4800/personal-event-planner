import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { isValidEmail } from "../utils/helpers";
import InputField from "../components/InputField";

// Register page
export default function Register() {
  const { registerUser } = useApp();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  // Error messages
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Handle typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.username.trim()) newErrors.username = "Username is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    return newErrors;
  };

  // Submit register form
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setMessage("Please fix the errors.");
      return;
    }

    const result = registerUser(formData);
    setMessage(result.message);

    if (result.success) {
      navigate("/");
    }
  };

  return (
    <section className="page-card">
      <h2>Create Account</h2>
      <p>Register to start planning your events.</p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {message && <p className="info-text">{message}</p>}

        <button type="submit">Register</button>
      </form>
    </section>
  );
}