import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import InputField from "../components/InputField";

// Login page
export default function Login() {
  const { loginUser } = useApp();
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Message state
  const [message, setMessage] = useState("");

  // Handle typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setMessage("Please enter both username and password.");
      return;
    }

    const result = loginUser(formData.username, formData.password);
    setMessage(result.message);

    if (result.success) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="page-card">
      <h2>Login</h2>
      <p>Login to access your event dashboard.</p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {message && <p className="info-text">{message}</p>}

        <button type="submit">Login</button>
      </form>

      <p>
        No account yet? <Link to="/register">Register here</Link>
      </p>
    </section>
  );
}