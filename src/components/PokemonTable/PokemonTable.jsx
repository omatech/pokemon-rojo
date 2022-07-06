import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";
import { StaticTextsContext } from "../../context/TitleProvider";

import styled from 'styled-components';
import {useContext} from "react";

const StyledTable = styled.div`
    width: 100%;
    display: table;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
`;

const PokemonTable = ({ pokemons }) => {
    const { staticTexts } = useContext(StaticTextsContext);
    const columns = staticTexts.columnsHeader;

    return <>
        <StyledTable>
            <PokemonTableHead columns={ columns } />
            <PokemonTableBody pokemons={ pokemons } />
        </StyledTable>
    </>;
}

export default PokemonTable;