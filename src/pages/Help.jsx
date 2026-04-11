import React from "react";
import HelpBlock from "../components/HelpBlock";

// Help page
export default function Help() {
  return (
    <section className="page-card">
      <h2>Help Section</h2>
      <p>This page explains how to use the app.</p>

      <HelpBlock
        title="1. Navigation"
        text="Use the header to move between Dashboard, Add Event, and Help."
      />

      <HelpBlock
        title="2. Register"
        text="Create an account with your name, email, username, and password."
      />

      <HelpBlock
        title="3. Login"
        text="Login using your username and password."
      />

      <HelpBlock
        title="4. Add Event"
        text="Go to Add Event and fill in the event details."
      />

      <HelpBlock
        title="5. Edit or Delete Event"
        text="From the dashboard, use Edit or Delete on any event card."
      />

      <HelpBlock
        title="6. Organising Tips"
        text="Use clear event names, proper locations, and useful descriptions."
      />
    </section>
  );
}
