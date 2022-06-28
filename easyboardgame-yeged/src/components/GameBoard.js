import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useArrowKeys } from "../hooks/useArrowKeys";
import { useDropdown } from "../hooks/useDropdown";
import Character, { charactersArray } from "./Characters";
import { Images } from "../assets";
import { useMaxSize } from "../hooks/useMaxSize";

const GameBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const GameBoard = styled.div`
  width: 500px;
  height: 500px;
  border: 5px solid black;
  margin: 50px;
  background-image: url(${Images.RoadMap});
  background-size: 500px 500px;
`;

const Board = () => {
  const [characters] = useState(charactersArray);
  const boardRef = useRef(null);
  const characterRef = useRef(null);

  const [chars, CharsDropdown] = useDropdown("Choose a character", characters);
  const { maxHeight, maxWidth } = useMaxSize(characterRef, boardRef);
  const movement = useArrowKeys(maxHeight, maxWidth);

  return (
    <div>
      <GameBoardWrapper>
        <CharsDropdown />
        <GameBoard ref={boardRef}>
          <Character style={movement} ref={characterRef} src={chars} />
        </GameBoard>
      </GameBoardWrapper>
    </div>
  );
};

export default Board;
