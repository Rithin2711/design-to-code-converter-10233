import React, { useMemo } from "react";

import icon1 from "../assets/module-icons/module-1.svg";
import icon2 from "../assets/module-icons/module-2.svg";
import icon3 from "../assets/module-icons/module-3.svg";
import icon4 from "../assets/module-icons/module-4.svg";
import icon5 from "../assets/module-icons/module-5.svg";
import icon6 from "../assets/module-icons/module-6.svg";

const MODULES = [
  { id: "m1", label: "Module", iconSrc: icon1 },
  { id: "m2", label: "Module", iconSrc: icon2 },
  { id: "m3", label: "Module", iconSrc: icon3 },
  { id: "m4", label: "Module", iconSrc: icon4 },
  { id: "m5", label: "Module", iconSrc: icon5 },
  { id: "m6", label: "Module", iconSrc: icon6 }
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
              <span className="moduleBtnInner">
                <img className="moduleIcon" src={m.iconSrc} alt="" aria-hidden="true" />
                <span className="moduleLabel">{m.label}</span>
              </span>
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
