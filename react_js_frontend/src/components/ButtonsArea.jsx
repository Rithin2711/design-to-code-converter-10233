import React, { useMemo } from "react";

const MODULES = [
  { id: "m1", label: "Module", color: "#2563EB", glyph: "1" },
  { id: "m2", label: "Module", color: "#7C3AED", glyph: "2" },
  { id: "m3", label: "Module", color: "#16A34A", glyph: "3" },
  { id: "m4", label: "Module", color: "#F97316", glyph: "4" },
  { id: "m5", label: "Module", color: "#DB2777", glyph: "5" },
  { id: "m6", label: "Module", color: "#EAB308", glyph: "6" }
];

// PUBLIC_INTERFACE
export default function ButtonsArea({ selected, onSelect }) {
  /** Renders the 6 module buttons in a 2x3 grid. */
  const selectedId = useMemo(() => selected?.id ?? selected ?? null, [selected]);

  return (
    <section aria-label="Buttons area">
      <div className="buttonsGrid" role="group" aria-label="Module buttons">
        {MODULES.map((m) => {
          const isSelected = selectedId === m.id;
          return (
            <button
              key={m.id}
              type="button"
              className="moduleBtn"
              onClick={() => onSelect(m)}
              aria-pressed={isSelected}
              style={{
                borderColor: isSelected ? "rgba(37, 99, 235, 0.45)" : undefined,
                boxShadow: isSelected
                  ? "0 0 0 4px rgba(37, 99, 235, 0.12)"
                  : undefined
              }}
            >
              <span className="dot" style={{ background: m.color }}>
                {m.glyph}
              </span>
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      <div className="actionsRow" aria-label="Buttons area actions">
        <button
          className="smallBtn"
          type="button"
          onClick={() => onSelect(null)}
        >
          Cancel
        </button>
        <button
          className="primaryBtn"
          type="button"
          onClick={() => console.log("Create clicked")}
        >
          Create
        </button>
      </div>
    </section>
  );
}
