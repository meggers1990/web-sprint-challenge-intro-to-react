import React from 'react';
import { CharacterContainer, CharacterName } from './styles';

const Character = ({ name }) => {
  return (
    <CharacterContainer>
      <CharacterName>{name}</CharacterName>
    </CharacterContainer>
  );
};

export default Character;
