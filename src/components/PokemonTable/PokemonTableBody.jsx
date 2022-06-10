import PokemonTableRow from "./PokemonTableRow";

const PokemonTableBody = ({ pokemonRows }) => { 
    const pokemons = () => pokemonRows.reduce((acc, pokemonRow) => {
        let pokemon = {
                "id": pokemonRow.id,
                "image": pokemonRow.image,
                "number": pokemonRow.id,
                "types": pokemonRow.types,
                "name": pokemonRow.name
                }
        if (pokemon.types.includes("Volador") && pokemon.types.includes("Agua")) acc.push(pokemon)
        return acc
    },[]) 

    return <tbody>
        {pokemons().map(filteredPokemon =>
            <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon }/>
        )}
    </tbody>;

    // const rows = () => pokemonRows.map((pokemonRow) => 
    //     ({
    //     "id": pokemonRow.id,
    //     "image": pokemonRow.image,
    //     "number": pokemonRow.id,
    //     "types": pokemonRow.types,
    //     "name": pokemonRow.name
    //     })
    // );

    // return <tbody>
    //     {rows().filter(pokemon => pokemon.types.includes("Psíquico")).map(filteredPokemon =>
    //         <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon }/>
    //     )}
    // </tbody>;

}
export default PokemonTableBody;