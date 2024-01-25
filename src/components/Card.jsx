import { useEffect, useRef } from 'react';
import createCardBackground from '../cardBackground';
import { capitalizeFirst } from '../utils/textFormatting';
import '../styles/Card.css';

function Card({ data: { name, types, imageUrl }, handleSelection, gameOver, delay }) {
  const cardRef = useRef(null);

  useEffect(() => {
    function flipCard() {
      if (!gameOver && cardRef.current) {
        cardRef.current.classList.toggle('flip');
      }
    }
    flipCard();
    setTimeout(flipCard, delay);
  });

  return (
    <button
      ref={cardRef}
      className="card"
      onClick={() => handleSelection(name)}
      style={{ background: createCardBackground(types) }}>
      <div className="card-front">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
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
