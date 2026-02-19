import React, { useId, useMemo, useRef, useState } from "react";
import PageHeader from "../ui/PageHeader";
import "./NewWorkflowPage.css";

/**
 * NewWorkflowPage implements the provided Figma screen (screen_1:2) as a React page.
 * Layout: Page header (violet), title, upload dropzone, environment select, module panel, and action buttons.
 */
// PUBLIC_INTERFACE
export default function NewWorkflowPage() {
  const uploadHelpId = useId();
  const fileInputRef = useRef(null);

  const [environment, setEnvironment] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const envOptions = useMemo(
    () => [
      { value: "", label: "Environment" },
      { value: "dev", label: "Dev" },
      { value: "staging", label: "Staging" },
      { value: "prod", label: "Prod" },
    ],
    []
  );

  const handleFiles = (fileList) => {
    const files = Array.from(fileList || []);
    setSelectedFiles(files);
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="nwPage" aria-label="New Workflow screen">
      <div className="nwCard">
        {/* Page header must be violet per instructions */}
        <PageHeader leftTitle="ToolX" rightTitle="Dashboard" />

        <div className="nwDivider" aria-hidden="true" />

        <main className="nwMain" aria-label="New workflow form">
          <h1 className="nwTitle">New Workflow</h1>

          <section className="nwGrid" aria-label="Workflow inputs">
            {/* Left column: upload + environment */}
            <div className="nwLeftCol">
              <div
                className="nwDropzone"
                role="group"
                aria-label="Upload drop zone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer?.files?.length) handleFiles(e.dataTransfer.files);
                }}
              >
                {/* 
                  Use a focusable, button-like container for accessibility:
                  - Enter/Space opens file picker
                  - Click anywhere opens file picker
                */}
                <div
                  className="nwDropzoneInner nwDropzoneInteractive"
                  role="button"
                  tabIndex={0}
                  aria-describedby={uploadHelpId}
                  aria-label="Upload document"
                  onClick={openFilePicker}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openFilePicker();
                    }
                  }}
                >
                  <div className="nwUploadIcon" aria-hidden="true">
                    ↑
                  </div>

                  <div className="nwDropzoneText" id={uploadHelpId}>
                    Drag and drop a document here, or{" "}
                    <span className="nwBrowseHint">Browse</span>
                  </div>

                  {selectedFiles.length > 0 ? (
                    <div className="nwDropzoneSubtext" aria-live="polite">
                      {selectedFiles.length === 1
                        ? `Selected: ${selectedFiles[0].name}`
                        : `Selected: ${selectedFiles.length} files`}
                    </div>
                  ) : (
                    <div className="nwDropzoneSubtext">PDF, DOCX, TXT (max depends on browser)</div>
                  )}

                  {/* Keep the input in the DOM for real file selection, but visually hidden */}
                  <input
                    ref={fileInputRef}
                    className="nwFileInput"
                    type="file"
                    accept=".pdf,.doc,.docx,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                    onChange={(e) => handleFiles(e.target.files)}
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                </div>
              </div>

              <div className="nwField" aria-label="Environment selector">
                <label className="nwLabel" htmlFor="nw-env">
                  Environment
                </label>
                <div className="nwSelectWrap">
                  <select
                    id="nw-env"
                    className="nwSelect"
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                  >
                    {envOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <span className="nwSelectChevron" aria-hidden="true">
                    ▾
                  </span>
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="nwFileMeta" aria-label="Selected files">
                  <div className="nwFileMetaTitle">Selected:</div>
                  <ul className="nwFileMetaList">
                    {selectedFiles.slice(0, 3).map((f) => (
                      <li key={f.name} className="nwFileMetaItem">
                        {f.name}
                      </li>
                    ))}
                    {selectedFiles.length > 3 && (
                      <li className="nwFileMetaItem">+{selectedFiles.length - 3} more</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Right column: module panel */}
            <aside className="nwModulePanel" aria-label="Module list">
              <div className="nwModuleGrid" role="group" aria-label="Modules">
                {Array.from({ length: 6 }).map((_, idx) => {
                  const label = `Module ${idx + 1}`;
                  return (
                    <button
                      key={label}
                      type="button"
                      className="nwModuleItem"
                      aria-label={label}
                      onClick={() => {
                        // Keep behavior minimal; no backend requested.
                        // eslint-disable-next-line no-console
                        console.log("Module clicked:", label);
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </aside>
          </section>

          <div className="nwActions" aria-label="Actions">
            <button
              type="button"
              className="nwBtn nwBtnSecondary"
              onClick={() => {
                setEnvironment("");
                setSelectedFiles([]);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="nwBtn nwBtnPrimary"
              onClick={() => {
                // No backend requested; keep behavior simple and visible in console.
                // This matches the original generated prototype behavior.
                // eslint-disable-next-line no-console
                console.log("Create clicked:", {
                  environment,
                  files: selectedFiles.map((f) => ({ name: f.name, size: f.size })),
                });
              }}
            >
              Create
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
