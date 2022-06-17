import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';
import PokemonTypeFilterList from "./components/PokemonTypeFilter/PokemonTypeFilterList";
import {usePokemonTypes} from "./hooks/UsePokemonTypes";

const StyledPokemonTable = styled.table`
    border: 1px solid black;
`;


const App = () => {
    const [types, setTypes, getPokemonRows] = usePokemonTypes([
        {name: "Agua", active: true},
        {name: "Fuego", active: true},
    ]);

    return <>
        <PokemonTypeFilterList types={types} setTypes={setTypes}/>
        <StyledPokemonTable>
            <PokemonTable rowFilter={getPokemonRows}/>
        </StyledPokemonTable>
    </>;
}

export default App
