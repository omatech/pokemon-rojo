

const PokemonTableRow = ({ row }) => 
<tr>
    <td><img src={`/img/${row.image} `} alt={ row.name }/></td>
    <td>{ row.number }</td>
    <td>{ row.name }</td>
    <td>{ row.type }</td>
    <td><a href="/">Ver detalle</a></td>
</tr>;

export default PokemonTableRow;