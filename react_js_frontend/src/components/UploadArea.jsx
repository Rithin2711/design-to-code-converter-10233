import React, { useCallback, useMemo, useState } from "react";

function PaperclipIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 12.5l7.9-7.9a3 3 0 114.2 4.2l-9.2 9.2a5 5 0 11-7.1-7.1l9.1-9.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// PUBLIC_INTERFACE
export default function UploadArea({ file, onFileSelected }) {
  /** Uploading area: drag-drop / browse to select a document. */
  const [drag, setDrag] = useState(false);

  const filename = useMemo(() => (file ? file.name : null), [file]);

  const accept = useMemo(
    () =>
      [
        ".pdf",
        ".doc",
        ".docx",
        ".txt",
        ".md",
        ".rtf",
        ".png",
        ".jpg",
        ".jpeg"
      ].join(","),
    []
  );

  const onChange = useCallback(
    (e) => {
      const f = e.target.files?.[0] ?? null;
      onFileSelected(f);
    },
    [onFileSelected]
  );

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDrag(false);
      const f = e.dataTransfer.files?.[0] ?? null;
      onFileSelected(f);
    },
    [onFileSelected]
  );

  return (
    <div
      className="uploadDrop"
      data-drag={drag ? "true" : "false"}
      onDragEnter={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDrag(true);
      }}
      onDragLeave={() => setDrag(false)}
      onDrop={onDrop}
      aria-label="Upload area"
    >
      <div className="uploadCard">
        <div className="uploadIcon" aria-hidden="true">
          <PaperclipIcon />
        </div>

        <div className="uploadText">
          <div className="uploadPrimary">
            {filename ? (
              <>
                Selected: <strong>{filename}</strong>
              </>
            ) : (
              <>
                Drag and drop a file here, or <strong>Browse</strong>
              </>
            )}
          </div>
          <div className="uploadSecondary">Supported: PDF, DOC/DOCX, TXT, images</div>
        </div>
      </div>

      <input
        className="uploadInput"
        type="file"
        accept={accept}
        onChange={onChange}
        aria-label="Upload a document"
      />
    </div>
  );
}
