

const PokemonTableRow = ({ row }) => 
<tr>
    <td><img src={row.image} alt={ row.name } width="45" height="45" /></td>
    <td>{ row.number }</td>
    <td>{ row.name }</td>
    <td>{ row.types[0] }</td>
    <td><a href="/">Ver detalle</a></td>
</tr>;

export default PokemonTableRow;