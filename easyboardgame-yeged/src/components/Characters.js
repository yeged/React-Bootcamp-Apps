import React, { forwardRef } from "react";
import styled from "styled-components";
import { Images } from "../assets";

const CharacterWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
`;

const CharacterImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
`;

const { Mario, AmongUs, Potter } = Images;

export const charactersArray = [
  {
    name: "Mario",
    src: Mario,
  },
  {
    name: "Among Us",
    src: AmongUs,
  },
  {
    name: "Potter",
    src: Potter,
  },
];

const Character = forwardRef(({ src, style }, ref) => {
  return (
    <CharacterWrapper>
      <CharacterImg ref={ref} style={style} src={src} alt={src} />
    </CharacterWrapper>
  );
});

Character.displayName = "Character";

export default Character;
