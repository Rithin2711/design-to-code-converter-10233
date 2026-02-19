import React from "react";

// PUBLIC_INTERFACE
export default function HeaderBar({ onDashboard }) {
  /** Header area: ToolX brand on the left, Dashboard button on the right. */
  return (
    <header className="header" aria-label="Header">
      <div className="brand" aria-label="Tool name">
        ToolX
      </div>

      <button className="headerBtn" type="button" onClick={onDashboard}>
        Dashboard
      </button>
    </header>
  );
}
