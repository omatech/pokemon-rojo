import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import {usePokemonTypes} from "./hooks/UsePokemonTypes";
import {usePokemons} from "./hooks/UsePokemons";

const StyledPokemonTable = styled.table`
    border: 1px solid black;
`;

const App = () => {
    const [types, setTypes, selectedTypes] = usePokemonTypes();
    const pokemons = usePokemons();
    console.log(pokemons);
    const filteredPokemons = pokemons.filter(pokemon =>
        selectedTypes.some(
            type => pokemon.types.includes(type))
    );

    return <>
        <PokemonTypeFilterList types={types} setTypes={setTypes}/>
        <StyledPokemonTable>
            <PokemonTable pokemons={filteredPokemons}/>
        </StyledPokemonTable>
    </>;
}

export default App
