import json from "../pokemon.json";

const usePokemons = ({selectedTypes, searchValue}) => {

    let pokemons = json.map(pokemon => ({
        id: pokemon.id,
        image: pokemon.image,
        number: pokemon.id,
        name: pokemon.name,
        moves: pokemon.moves,
        types: pokemon.types
    }));

    if (selectedTypes.length) {
        pokemons = pokemons.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.includes(type))
        );
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
}

export default usePokemons;