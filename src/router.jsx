// This file controls all page routes in the app

import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Import pages (we will create them next)
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

// Define routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // main layout
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "add-event", element: <AddEvent /> },
      { path: "help", element: <Help /> },
    ],
  },
]);