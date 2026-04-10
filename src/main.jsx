import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

// Entry point of the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider enables routing */}
    <RouterProvider router={router} />
  </React.StrictMode>
);