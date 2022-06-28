import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useArrowKeys = (maxHeight, maxWidth) => {
  const [style, setStyle] = useLocalStorage("location", { top: 0, left: 0 });
  const [speedUp, setSpeedUp] = useState(false);
  let modifier;

  // Arrow Keys Handler
  const handleArrowKeydown = (e) => {
    modifier = speedUp ? 20 : 10;

    if (style.top > 0) {
      if (e.code === "ArrowUp") {
        setStyle(() => {
          return {
            left: style.left,
            top: style.top > modifier ? style.top - modifier : 0,
          };
        });
      }
    }

    if (style.top < maxHeight.current) {
      if (e.code === "ArrowDown") {
        setStyle(() => {
          return {
            left: style.left,
            top:
              maxHeight.current - style.top > modifier
                ? style.top + modifier
                : 450,
          };
        });
      }
    }

    if (style.left > 0) {
      if (e.code === "ArrowLeft") {
        setStyle(() => {
          return {
            top: style.top,
            left: style.left > modifier ? style.left - modifier : 0,
          };
        });
      }
    }

    if (style.left < maxWidth.current) {
      if (e.code === "ArrowRight") {
        setStyle(() => {
          return {
            top: style.top,
            left:
              maxWidth.current - style.left > modifier
                ? style.left + modifier
                : 450,
          };
        });
      }
    }
  };

  // Space Handler - Speed Up * 2
  const handleSpaceKeydown = (e) => {
    if (e.code === "Space") {
      setSpeedUp(true);
    }
  };

  const handleSpaceKeyup = (e) => {
    if (e.code === "Space") {
      setSpeedUp(false);
    }
  };

  // Key Handler
  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeydown);
    document.addEventListener("keydown", handleSpaceKeydown);
    document.addEventListener("keyup", handleSpaceKeyup);
    return () => {
      document.removeEventListener("keydown", handleArrowKeydown); // IMPORTANTE
      document.removeEventListener("keydown", handleSpaceKeydown);
      document.removeEventListener("keyup", handleSpaceKeyup);
    };
  }, [style, speedUp]);

  return style;
};
