import React from "react";

// PUBLIC_INTERFACE
export default function ApprovalArea({ disabled, onStart }) {
  /** Approval/start area: single Start button under the other controls. */
  return (
    <section className="startArea" aria-label="Approval and start area">
      <button
        className="startBtn"
        type="button"
        disabled={disabled}
        onClick={onStart}
        aria-disabled={disabled ? "true" : "false"}
        title={disabled ? "Select a file and a module to enable Start" : "Start"}
      >
        Start
      </button>
    </section>
  );
}
