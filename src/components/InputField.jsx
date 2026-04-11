import React from "react";

// Reusable input field
export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <input type={type} name={name} value={value} onChange={onChange} />

      {/* Show error message if there is one */}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
