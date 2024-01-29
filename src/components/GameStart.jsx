import '../styles/modal.css';

function GameStart({ startGame, numCards }) {
  return (
    <div className="overlay">
      <div className="game-start modal">
        <h4>Click on a unique card to earn points. Score {numCards} to win.</h4>
        <button className="retro-btn" onClick={startGame}>
          START
        </button>
      </div>
    </div>
  );
}
export default GameStart;
