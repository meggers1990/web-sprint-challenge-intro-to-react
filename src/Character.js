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

const CharacterDetails = styled.div`
  font-size: 14px;
`;

const Character = ({ character }) => {
  return (
    <CharacterContainer>
      <CharacterName>{character.name}</CharacterName>
      <CharacterDetails>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </CharacterDetails>
    </CharacterContainer>
  );
};

export default Character;
