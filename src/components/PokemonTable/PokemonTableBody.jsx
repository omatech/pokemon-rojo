import PokemonTableRow from "./PokemonTableRow";

const PokemonTableBody = ({ pokemons }) => {

    return <tbody>
        {pokemons.map(filteredPokemon =>
            <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon }/>
        )}
    </tbody>;
}
export default PokemonTableBody;