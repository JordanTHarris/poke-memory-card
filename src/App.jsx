import { useState, useEffect } from 'react';
import './App.css';
import { getRandomPokemonCollection } from './PokemonAPI';
import Card from './components/Card';

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
      const data = await getRandomPokemonCollection(NUM_CARDS, POKE_MIN_INDEX, POKE_MAX_INDEX);
      console.log(data);
      setPokemonData(data);
    })();
  }, [numGames]);

  function handleSelection() {
    setScore(score + 1);
  }

  return (
    <>
      <h1>Poke Memory Card</h1>
      <button onClick={startGame}>Start Game</button>
      {pokemonData.length > 0 &&
        pokemonData.map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} handleSelection={handleSelection} />
        ))}
    </>
  );
}

export default App;
