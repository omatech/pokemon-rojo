import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";

import styled from 'styled-components';

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #000;
`;

const PokemonTable = ({pokemons}) => {
    const columns = [ 'Pokemon', 'Número', 'Nombre', 'Tipo', 'Ataques' ];
    return <>
        <StyledTable>
            <PokemonTableHead columns={ columns } />
            <PokemonTableBody pokemons={ pokemons } />
        </StyledTable>
    </>;
}

export default PokemonTable;