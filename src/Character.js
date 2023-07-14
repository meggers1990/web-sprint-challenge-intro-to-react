import React from 'react';
import styled from 'styled-components';

const Character = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

<CharacterName>{Character.name}</CharacterName>

const CharacterName = styled.div`
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default Character;