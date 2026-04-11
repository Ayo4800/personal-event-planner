import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

export default function Login() {
  const { loginUser } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
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
