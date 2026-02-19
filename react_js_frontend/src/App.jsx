import React, { useMemo, useState } from "react";
import HeaderBar from "./components/HeaderBar.jsx";
import UploadArea from "./components/UploadArea.jsx";
import ButtonsArea from "./components/ButtonsArea.jsx";
import ApprovalArea from "./components/ApprovalArea.jsx";
import "./styles/app.css";

// PUBLIC_INTERFACE
export default function App() {
  /** Root application component rendering the four required UI areas. */
  const [file, setFile] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const canStart = useMemo(() => Boolean(file) && Boolean(selectedModule), [file, selectedModule]);

  return (
    <div className="appShell">
      <HeaderBar
        onDashboard={() => {
          // Placeholder navigation hook (no router in this task).
          console.log("Dashboard clicked");
        }}
      />

      <main className="main" aria-label="Main content">
        <section className="panel" aria-label="Workflow panel">
          <div className="pageTitle">New Workflow</div>

          <UploadArea file={file} onFileSelected={setFile} />

          <ButtonsArea selected={selectedModule} onSelect={setSelectedModule} />

          <ApprovalArea
            disabled={!canStart}
            onStart={() => {
              console.log("Start clicked", { file, selectedModule });
            }}
          />
        </section>
      </main>
    </div>
  );
}
