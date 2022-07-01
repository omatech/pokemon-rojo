import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";

import styled from 'styled-components';

const StyledTable = styled.div`
    width: 100%;
    display: table;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
`;

const PokemonTable = ({pokemons, orderValue, setOrderValue, direction, setDirection}) => {
    const columns = [
        { 'key': "image", 'name': "Pokemon", 'sortable': false },
        { 'key': "number", 'name': "Número", 'sortable': true},
        { 'key': "name", 'name': "Nombre", 'sortable': true},
        { 'key': "type", 'name': "Tipo", 'sortable': true},
        /* { 'key': "attacks", 'name': "Ataques", 'sortable': false} */
    ];
    return <>
        <StyledTable>
            <PokemonTableHead columns={ columns } orderValue={orderValue} setOrderValue={setOrderValue} direction={direction} setDirection={setDirection}/>
            <PokemonTableBody pokemons={ pokemons } />
        </StyledTable>
    </>;
}

export default PokemonTable;