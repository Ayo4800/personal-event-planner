import React from "react";
import { Link } from "react-router-dom";

// Page shown when route does not exist
export default function NotFound() {
  return (
    <section className="page-card">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go back to Login</Link>
    </section>
  );
}