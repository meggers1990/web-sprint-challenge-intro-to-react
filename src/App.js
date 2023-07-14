import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';
import './App.css';

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
        <Character key={character.name} character={character} />
      ))}
    </div>
  );
};

export default App;