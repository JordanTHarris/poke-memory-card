import '../styles/modal.css';

function gameOverText(score, numCards) {
  if (score === numCards - 1) {
    return 'You Win!';
  } else {
    return `You got ${score} out of ${numCards} Pokémon`;
  }
}

function GameOver({ score, numCards, restartGame }) {
  return (
    <div className="overlay">
      <div className="game-over modal">
        <h2>{gameOverText(score, numCards)}</h2>
        <button onClick={restartGame}>Play Again</button>
      </div>
    </div>
  );
}
export default GameOver;