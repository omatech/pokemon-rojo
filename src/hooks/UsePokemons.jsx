import json from "../pokemon.json";

const usePokemons = ({selectedTypes, searchValue, currentPage, pageSize, orderValue, direction}) => {

    let pokemons = json.map(pokemon => ({
        id: pokemon.id,
        image: pokemon.image,
        number: pokemon.id,
        name: pokemon.name,
        moves: pokemon.moves,
        types: pokemon.types
    }));

    const pokemonCount = pokemons.length;
    if (selectedTypes.length) {
        pokemons = pokemons.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.includes(type))
        );

    }
    pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
    const pageCount = Math.floor(pokemons.length / pageSize);

    if(direction === 'asc') {
        pokemons = pokemons.sort((a, b) => a[orderValue] > b[orderValue])
    } else {
        pokemons = pokemons.sort((a, b) => a[orderValue] < b[orderValue])
    }



    pokemons = pokemons.slice(pageSize * currentPage, pageSize * currentPage + pageSize)

    return [pokemonCount, pokemons, pageCount];
}

export default usePokemons;