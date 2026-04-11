import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// Main layout component
export default function App() {
  return (
    <div className="app-container">
      <Header />

      {/* Main page content */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
