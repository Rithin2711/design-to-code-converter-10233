import React from "react";
import styles from "./FooterActions.module.css";

export default function FooterActions() {
  return (
    <>
      <section className={styles.footer} aria-label="Actions">
        <button type="button" className={styles.cancel}>
          Cancel
        </button>
        <button type="button" className={styles.create}>
          Create
        </button>
      </section>

      <button type="button" className={styles.fab} aria-label="More">
        ›
      </button>
    </>
  );
}
