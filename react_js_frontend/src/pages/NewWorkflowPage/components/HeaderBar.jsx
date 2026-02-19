import React from "react";
import styles from "./HeaderBar.module.css";

export default function HeaderBar() {
  return (
    <header className={styles.header} aria-label="Header">
      <div className={styles.title}>New Workflow</div>
      <a className={styles.link} href="#dashboard">
        Dashboard
      </a>
    </header>
  );
}
