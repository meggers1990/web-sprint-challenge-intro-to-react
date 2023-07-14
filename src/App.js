import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {characters.map(character => (
        <Character key={character.url} character={character} />
      ))}
    </div>
  );
};

export default App;

