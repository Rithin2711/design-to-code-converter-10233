import React from "react";
import "./PageHeader.css";

/**
 * PageHeader renders the top header row shown in the provided Figma screen.
 * Per requirement: this component must be styled in violet, while the rest of the UI is white.
 */
// PUBLIC_INTERFACE
export default function PageHeader({ leftTitle, rightTitle }) {
  return (
    <header className="pageHeader" aria-label="Page header">
      <div className="pageHeader__inner">
        <div className="pageHeader__left">{leftTitle}</div>
        <div className="pageHeader__right">{rightTitle}</div>
      </div>
    </header>
  );
}
