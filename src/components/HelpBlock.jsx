import React from "react";

// Reusable help section block
export default function HelpBlock({ title, text }) {
  return (
    <div className="help-block">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}