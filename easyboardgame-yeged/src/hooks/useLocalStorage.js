import React, { useState, useMemo } from "react";

export const useLocalStorage = (keyName, initialValue) => {
  initialValue = useMemo(
    () => JSON.parse(localStorage.getItem(keyName)) || initialValue || "",
    [keyName, initialValue]
  );

  const [value, setStateValue] = useState(initialValue);

  const setvalue = (value) => {
    const valueStore = value instanceof Function ? value() : value;
    localStorage.setItem(keyName, JSON.stringify(valueStore));
    setStateValue(valueStore);
    console.log("location", valueStore);
  };

  return [value, setvalue];
};
