import React, { useEffect, useRef } from "react";

export const useMaxSize = (ref, boardSize) => {
  const maxHeight = useRef(null);
  const maxWidth = useRef(null);
  const borderSize = boardSize ? 10 : 0;

  // Calculate Max Width and Max Height of Board
  useEffect(() => {
    const imgRect = ref.current.getBoundingClientRect();
    const imageWidth = imgRect.width;
    const imageHeight = imgRect.height;

    const boardRect = boardSize
      ? boardSize.current.getBoundingClientRect()
      : window.screen;
    const boardWidth = boardRect.width;
    const boardHeight = boardRect.height;

    maxHeight.current = boardHeight - imageHeight - borderSize;
    maxWidth.current = boardWidth - imageWidth - borderSize;
    console.log("girmelanburaya");
  }, [ref, boardSize]);

  return { maxHeight, maxWidth };
};
