import { useEffect, useRef } from 'react';
import createCardBackground from '../cardBackground';
import { capitalizeFirst } from '../utils/textFormatting';
import '../styles/Card.css';

function Card({ data: { name, types, imageUrl }, handleSelection, gameOver, delay, gameStarted }) {
  const cardRef = useRef(null);

  useEffect(() => {
    function flipCard() {
      if (!gameOver && cardRef.current) {
        cardRef.current.classList.toggle('flip');
      }
    }
    // Don't flip on initial load
    if (gameStarted) {
      flipCard();
      setTimeout(flipCard, delay);
    }
  });

  return (
    <button
      ref={cardRef}
      className="card"
      onClick={() => handleSelection(name)}
      style={{ background: createCardBackground(types), '--delay-time': `${delay}ms` }}>
      <div className="card-front">
        <img src={imageUrl} alt={name} />
        <h2 className="card-name">{name}</h2>
        <ul>
          {types.map((type) => (
            <li key={type.type.name}>{capitalizeFirst(type.type.name)}</li>
          ))}
        </ul>
      </div>
      <div className="card-back"></div>
    </button>
  );
}

export default Card;
