

const PokemonTableRow = ({ name }) => 
<tr>
    <td><img src="/img/charmander.png" alt="Charmander"/></td>
    <td>N. 004</td>
    <td>{ name }</td>
    <td>Fuego</td>
    <td><a href="/">Ver detalle</a></td>
</tr>;

PokemonTableRow.defaultProps = {
    name: 'Charmander'
}

export default PokemonTableRow;