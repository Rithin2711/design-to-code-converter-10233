import React from "react";
import HeaderBar from "./components/HeaderBar";
import WorkflowBuilder from "./components/WorkflowBuilder";
import FooterActions from "./components/FooterActions";
import styles from "./NewWorkflowPage.module.css";

export default function NewWorkflowPage() {
  return (
    <div className={styles.page}>
      <HeaderBar />

      <main className={styles.main} aria-label="New Workflow">
        <WorkflowBuilder />
        <FooterActions />
      </main>
    </div>
  );
}
