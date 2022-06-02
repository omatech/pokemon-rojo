import PokemonTableRow from "./PokemonTableRow";

const PokemonTableBody = ({ rows }) => 
<tbody>
    { rows.map ( row => <PokemonTableRow row={row}/> )}   
</tbody>;

export default PokemonTableBody;