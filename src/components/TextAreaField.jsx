import React from "react";

// Reusable textarea field
export default function TextAreaField({ label, name, value, onChange, error }) {
  return (
    <div className="form-group">
      <label>{label}</label>

      <textarea name={name} value={value} onChange={onChange} rows="4" />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
