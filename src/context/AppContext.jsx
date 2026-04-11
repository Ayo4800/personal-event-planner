import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  // Store all registered users
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  // Store the currently logged in user
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser")) || null;
  });

  // Store all events
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events")) || [];
  });

  // Save users in localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save current user in localStorage
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  // Save events in localStorage
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Register a new user
  const registerUser = (newUser) => {
    const usernameExists = users.some(
      (user) => user.username.toLowerCase() === newUser.username.toLowerCase(),
    );

    const emailExists = users.some(
      (user) => user.email.toLowerCase() === newUser.email.toLowerCase(),
    );

    if (usernameExists) {
      return { success: false, message: "Username already exists." };
    }

    if (emailExists) {
      return { success: false, message: "Email already exists." };
    }

    const userToSave = {
      id: Date.now(),
      ...newUser,
    };

    setUsers((prev) => [...prev, userToSave]);

    return { success: true, message: "Account created successfully." };
  };

  // Login user
  const loginUser = (username, password) => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!foundUser) {
      return { success: false, message: "Invalid username or password." };
    }

    setCurrentUser(foundUser);
    return { success: true, message: "Login successful." };
  };

  // Logout user
  const logoutUser = () => {
    setCurrentUser(null);
  };

  // Add new event
  const addEvent = (eventData) => {
    if (!currentUser) return;

    const newEvent = {
      id: Date.now(),
      userId: currentUser.id,
      ...eventData,
    };

    setEvents((prev) => [...prev, newEvent]);
  };

  // Update event
  const updateEvent = (updatedEvent) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event,
      ),
    );
  };

  // Delete event
  const deleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  // Get only the logged in user's events
  const userEvents = useMemo(() => {
    if (!currentUser) return [];

    return events
      .filter((event) => event.userId === currentUser.id)
      .sort(
        (a, b) =>
          new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`),
      );
  }, [events, currentUser]);

  return (
    <AppContext.Provider
      value={{
        users,
        currentUser,
        events,
        userEvents,
        registerUser,
        loginUser,
        logoutUser,
        addEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Custom hook for easier use of context
export function useApp() {
  return useContext(AppContext);
}
