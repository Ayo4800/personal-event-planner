import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

// Top navigation bar
export default function Header() {
  const { currentUser, logoutUser } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Logout user and return to login page
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  // Add active style to current page link
  const getLinkClass = (path) => {
    return location.pathname === path ? "nav-link active-link" : "nav-link";
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand-area">
          <h1 className="brand-title">Personal Event Planner</h1>
          <p className="brand-subtitle">
            Organise meetings, appointments, and plans
          </p>
        </div>

        <nav className="nav-links">
          {currentUser ? (
            <>
              <Link to="/dashboard" className={getLinkClass("/dashboard")}>
                Dashboard
              </Link>

              <Link to="/add-event" className={getLinkClass("/add-event")}>
                Add Event
              </Link>

              <Link to="/help" className={getLinkClass("/help")}>
                Help
              </Link>

              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/" className={getLinkClass("/")}>
                Login
              </Link>

              <Link to="/register" className={getLinkClass("/register")}>
                Register
              </Link>

              <Link to="/help" className={getLinkClass("/help")}>
                Help
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
