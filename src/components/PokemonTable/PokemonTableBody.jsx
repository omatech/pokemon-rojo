import PokemonTableRow from "./PokemonTableRow";

import styled from 'styled-components';

const TableBody = styled.div`
    display: table-row-group;
`;

const PokemonTableBody = ({ pokemons }) => {
    return <TableBody>
        {pokemons.map(filteredPokemon =>
            <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon }/>
        )}
    </TableBody>;
}
export default PokemonTableBody;