import PokemonTable from "./components/PokemonTable/PokemonTable";
import styled from 'styled-components';

const StyledPokemonTable = styled.table`
    border: 1px solid black;
`;

const App = () =>
    <>
        <StyledPokemonTable>
            <PokemonTable/>
        </StyledPokemonTable>
    </>

export default App
