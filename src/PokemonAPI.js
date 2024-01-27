import { v4 as uuid } from 'uuid';
import { formatName } from './utils/textFormatting';

async function getPokemonData(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function generateUniqueRandomInts(size, minIndex, maxIndex) {
  const uniqueIntegers = new Set();
  const range = maxIndex - minIndex + 1;

  while (uniqueIntegers.size < size) {
    uniqueIntegers.add(Math.floor(Math.random() * range) + minIndex);
  }

  return Array.from(uniqueIntegers);
}

async function getRandomPokemonCollection(size, minIndex, maxIndex) {
  const randomIds = generateUniqueRandomInts(size, minIndex, maxIndex);

  const pokemonCollection = [];
  for (const id of randomIds) {
    const pokemonData = await getPokemonData(id);
    const pokemon = new Pokemon(pokemonData);
    pokemonCollection.push(pokemon);
  }

  return pokemonCollection;
}

class Pokemon {
  constructor({ id, name, types, sprites }) {
    this.id = id;
    this.name = formatName(name);
    this.types = types;
    this.imageUrl = sprites.other['official-artwork'].front_default;
    this.key = uuid();
  }
}

export { getPokemonData, getRandomPokemonCollection };
