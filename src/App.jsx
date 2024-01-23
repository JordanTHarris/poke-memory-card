import { useState, useEffect } from 'react';
import './App.css';
import { getRandomPokemonCollection } from './PokemonAPI';

const NUM_CARDS = 8;
const POKE_MIN_INDEX = 1;
const POKE_MAX_INDEX = 151;

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [numGames, setNumGames] = useState(0);
  const [score, setScore] = useState(0);

  function startGame() {
    setPokemonData([]);
    setSelectedData([]);
    setScore(0);
    setNumGames(numGames + 1);
  }

  useEffect(() => {
    (async () => {
      let data = [];
      data = await getRandomPokemonCollection(POKE_MIN_INDEX, POKE_MAX_INDEX);
      console.log(data);
      setPokemonData(data);
    })();
  }, [numGames]);

  return (
    <>
      <h1>Poke Memory Card</h1>
      <button onClick={startGame}>Start Game</button>
    </>
  );
}

export default App;
