import json from "../pokemon.json";

const usePokemons = ({selectedTypes, searchValue, currentPage}) => {

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

    const pageItemCount = 10;
    const pageCount = Math.floor(pokemons.length / pageItemCount);
    return [pokemons.slice(pageItemCount * currentPage, pageItemCount * currentPage + pageItemCount), pageCount];
}

export default usePokemons;