import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDropdown = (label, characters) => {
  const [state, setState] = useLocalStorage(
    "character",
    characters[0].src || ""
  );

  const Dropdown = (props) => {
    return (
      <div>
        <label style={{ fontSize: "2rem", color: "#EDF2F4" }} htmlFor="chars">
          {label}
          {": "}
          <select
            style={{
              cursor: "pointer",
              fontSize: "1.3rem",
              height: "30px",
              width: "200px",
              background: "#AA998F",
              color: "#382D1A",
              appearance: "none",
              padding: "auto 15px",
              ...props.styles,
            }}
            name="chars"
            id="chars"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onBlur={(e) => setState(e.target.value)}
          >
            {characters.map((item) => {
              return (
                <option key={item.name} value={item.src}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    );
  };

  return [state, Dropdown, setState];
};
