import json from "../pokemon.json";

const usePokemons = ({selectedTypes, searchValue, currentPage, pageSize}) => {

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

    pokemons =  pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));

    const pageCount = Math.floor(pokemons.length / pageSize);
    return [pokemons.slice(pageSize * currentPage, pageSize * currentPage + pageSize), pageCount];
}

export default usePokemons;