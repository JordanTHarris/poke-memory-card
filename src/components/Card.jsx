import createCardBackground from '../cardBackground';
import { capitalizeFirst } from '../utils/textFormatting';

function Card({ data: { name, types, imageUrl }, handleSelection }) {
  return (
    <button
      className="card"
      onClick={() => handleSelection(name)}
      background={createCardBackground(types)}
      style={{ background: createCardBackground(types) }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{capitalizeFirst(type.type.name)}</li>
        ))}
      </ul>
    </button>
  );
}

export default Card;
