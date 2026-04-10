import React from "react";
import { Outlet } from "react-router-dom";

// Main layout component
export default function App() {
  return (
    <div>
      {/* This is where pages will be displayed */}
      <Outlet />
    </div>
  );
}
