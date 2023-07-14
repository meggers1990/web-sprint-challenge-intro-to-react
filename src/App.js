import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map((character) => (
        <Character key={character.name} name={character.name} />
      ))}
    </div>
  );
};

export default App;


