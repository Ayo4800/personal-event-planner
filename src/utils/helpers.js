// Check if email format is valid
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Format date and time nicely for display
export function formatDate(dateString, timeString) {
  const value = new Date(`${dateString}T${timeString}`);

  return value.toLocaleString([], {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}