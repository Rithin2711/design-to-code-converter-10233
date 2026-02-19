import React, { useId, useMemo, useState } from "react";
import PageHeader from "../ui/PageHeader";
import "./NewWorkflowPage.css";

/**
 * NewWorkflowPage implements the provided Figma screen (screen_1:2) as a React page.
 * Layout: Page header (violet), title, upload dropzone, environment select, module panel, and action buttons.
 */
// PUBLIC_INTERFACE
export default function NewWorkflowPage() {
  const uploadHelpId = useId();
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

  return (
    <div className="nwPage" aria-label="New Workflow screen">
      <div className="nwCard">
        {/* Page header must be violet per instructions */}
        <PageHeader leftTitle="New Workflow" rightTitle="Dashboard" />

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
                <div className="nwDropzoneInner">
                  <div className="nwUploadIcon" aria-hidden="true">
                    ↑
                  </div>

                  <div className="nwDropzoneText" id={uploadHelpId}>
                    Drag and drop a file here, or{" "}
                    <span className="nwBrowseHint">Browse</span>
                  </div>

                  <input
                    className="nwFileInput"
                    type="file"
                    aria-describedby={uploadHelpId}
                    onChange={(e) => handleFiles(e.target.files)}
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
                      <li className="nwFileMetaItem">
                        +{selectedFiles.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Right column: module panel */}
            <aside className="nwModulePanel" aria-label="Module list">
              <div className="nwModuleGrid">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="nwModuleItem">
                    Module
                  </div>
                ))}
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
