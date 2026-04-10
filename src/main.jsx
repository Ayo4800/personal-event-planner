import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppProvider } from "./context/AppContext";
import "./index.css";

// Entry point of the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* AppProvider gives all pages access to context */}
    <AppProvider>
      {/* RouterProvider enables routing */}
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);