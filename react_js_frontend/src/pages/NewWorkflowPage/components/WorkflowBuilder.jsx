import React from "react";
import styles from "./WorkflowBuilder.module.css";

const moduleColors = [
  "#2f7cf6",
  "#8a49ff",
  "#1fb86a",
  "#ff7a2a",
  "#2f7cf6",
  "#ff3fa6",
  "#8a49ff",
  "#f4b400"
];

function ModuleTile({ color }) {
  return (
    <button type="button" className={styles.tile} aria-label="Module">
      <span className={styles.icon} style={{ background: color }} aria-hidden="true">
        {/* simple glyph: a tiny 2x2 dot grid, close to screenshot */}
        <span className={styles.glyphDot} />
        <span className={styles.glyphDot} />
        <span className={styles.glyphDot} />
        <span className={styles.glyphDot} />
      </span>
      <span className={styles.tileLabel}>Module</span>
    </button>
  );
}

export default function WorkflowBuilder() {
  return (
    <section aria-label="Workflow builder">
      <div className={styles.pageTitle}>New Workflow</div>

      <div className={styles.dropZoneWrap}>
        <div className={styles.dropZone} role="group" aria-label="File drop zone">
          <span className={styles.plus} aria-hidden="true">
            +
          </span>
          <span className={styles.dropText}>
            Drag and drop a file here, or{" "}
            <button type="button" className={styles.browse}>
              Browse
            </button>
          </span>
        </div>
      </div>

      <div className={styles.grid} aria-label="Modules">
        {moduleColors.map((c, idx) => (
          <ModuleTile key={idx} color={c} />
        ))}
      </div>
    </section>
  );
}
