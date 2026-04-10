import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

// Fixed top navigation
export default function Header() {
  const { currentUser, logoutUser } = useApp();
  const navigate = useNavigate();

  // Logout and send user to login page
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div>
          <h1>Personal Event Planner</h1>
          <p>Plan meetings, appointments, and social events</p>
        </div>

        <nav className="nav-links">
          {currentUser ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/add-event">Add Event</Link>
              <Link to="/help">Help</Link>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/help">Help</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}