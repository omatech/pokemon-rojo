import json from "../pokemon.json";

export const usePokemons = () => json.map(pokemon => ({
    id: pokemon.id,
    image: pokemon.image,
    number: pokemon.id,
    name: pokemon.name,
    moves: pokemon.moves,
    types: pokemon.types
}));
