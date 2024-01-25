import { useState, useEffect } from 'react';
import './App.css';
import { getRandomPokemonCollection } from './PokemonAPI';
import shuffleCards from './utils/shuffleCards';
import Card from './components/Card';
import GameOver from './components/GameOver';

const NUM_CARDS = 10;
const POKE_MIN_INDEX = 1;
const POKE_MAX_INDEX = 151;
const DELAY_MS = 600;

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [numGames, setNumGames] = useState(0);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getRandomPokemonCollection(NUM_CARDS, POKE_MIN_INDEX, POKE_MAX_INDEX);
      console.log(data);
      setPokemonData(data);
    })();
  }, [numGames]);

  function startGame() {
    setPokemonData([]);
    setSelectedData([]);
    setScore(0);
    setGameOver(false);
    setNumGames(numGames + 1);
  }

  function endGame() {
    setGameOver(true);
  }

  function incrementScore() {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > hiScore) setHiScore(newScore);
  }

  function handleSelection(name) {
    incrementScore();
    if (selectedData.includes(name) || selectedData.length === NUM_CARDS - 1) {
      endGame();
    } else {
      shuffleCards(pokemonData);
      setPokemonData(shuffleCards(pokemonData));
      setSelectedData([...selectedData, name]);
    }
    console.log(selectedData);
  }

  return (
    <>
      <h1>Pokémon Memory Game</h1>
      <div className="score-bar">
        <h2>Score: {score}</h2>
        <h2>Hi Score: {hiScore}</h2>
        <button onClick={startGame}>Restart</button>
      </div>
      <div className="card-container">
        {pokemonData.length > 0 &&
          pokemonData.map((pokemon) => (
            <Card
              key={pokemon.key}
              data={pokemon}
              handleSelection={handleSelection}
              gameOver={gameOver}
              delay={DELAY_MS}
            />
          ))}
      </div>
      {gameOver && <GameOver score={score} numCards={NUM_CARDS} restartGame={startGame} />}
    </>
  );
}

export default App;
