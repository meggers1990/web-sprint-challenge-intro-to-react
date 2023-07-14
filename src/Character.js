import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const CharacterName = styled.h2`
  margin-bottom: 5px;
`;

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <CharacterName>{character.name}</CharacterName>
    </CharacterContainer>
  );
};

export default Character;
