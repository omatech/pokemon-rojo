

const PokemonTableRow = ({ row }) => { 
    // if(!row.types.includes("Volador")) return null;
    return <tr>
        <td><img src={row.image} alt={ row.name } width="45" height="45" /></td>
        <td>{ row.number }</td>
        <td>{ row.name }</td>
        <td>{ row.types.join(", ") }</td>
        <td><a href="/">Ver detalle</a></td>
    </tr>;
}

export default PokemonTableRow;