import PokemonTableRow from "./PokemonTableRow";

const PokemonTableBody = ({ pokemonRows }) => {

    const rows = () => pokemonRows.map((pokemonRow) => 
        ({
        "id": pokemonRow.id,
        "image": pokemonRow.image,
        "number": pokemonRow.id,
        "types": pokemonRow.types,
        "name": pokemonRow.name
        })
    );

return <tbody>
    { rows().map(row => {
        console.log(row)
        return <PokemonTableRow key={ row.id } row={ row } />
    } ) }
</tbody>;

}
export default PokemonTableBody;