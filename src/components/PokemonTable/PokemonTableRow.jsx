import PokemonAttack from "./PokemonAttack";


const PokemonTableRow = ({row}) =>
    <tr>
        <td><img src={row.image} alt={row.name} width="45" height="45"/></td>
        <td>{row.number}</td>
        <td>{row.name}</td>
        <td>{row.types.join(", ")}</td>
        <td>{row.moves.slice(0, 3).map(m => <PokemonAttack key={m} attack={m}/>)}</td>
        <td><a href="/">Ver detalle</a></td>
    </tr>;


export default PokemonTableRow;