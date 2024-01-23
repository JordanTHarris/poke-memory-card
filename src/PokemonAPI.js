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

async function getRandomPokemonCollection(minIndex, maxIndex) {
  const randomIds = [];
  for (let i = minIndex; i <= maxIndex; i++) {
    randomIds.push(Math.floor(Math.random() * 100) + 1);
  }

  const pokemonCollection = [];
  for (const id of randomIds) {
    const pokemonData = await getPokemonData(id);
    const pokemon = new Pokemon(pokemonData);
    pokemonCollection.push(pokemon);
  }

  return pokemonCollection;
}

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

class Pokemon {
  constructor({ id, name, types, sprites }) {
    this.id = id;
    this.name = formatName(name);
    this.types = types;
    this.imageUrl = sprites.other['official-artwork'].front_default;
  }
}

export { getPokemonData, getRandomPokemonCollection };
