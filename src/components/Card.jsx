import createCardBackground from '../cardBackground';
import { capitalizeFirst } from '../utils/textFormatting';

function Card({ data: { name, types, imageUrl }, handleSelection }) {
  return (
    <div className="card" onClick={() => handleSelection(name)}>
      <button
        className="card-inner"
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
    </div>
  );
}

export default Card;
