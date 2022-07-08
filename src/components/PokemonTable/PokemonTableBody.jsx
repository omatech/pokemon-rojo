import { useContext } from "react";
import PokemonTableRow from "./PokemonTableRow";
import { StateContext } from "../../context/StateProvider";
import styled from 'styled-components';

const TableBody = styled.div`
    display: table-row-group;
`;

const PokemonTableBody = () => {
    const { state, dispatch  } = useContext(StateContext);

    return <TableBody>
        {state.pokemons.map(filteredPokemon =>
            <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon }/>
        )}
    </TableBody>;
}
export default PokemonTableBody;