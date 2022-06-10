import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";
import json from "../../pokemon.json";

const PokemonTable = () => {
    const columns = [ 'Pokemon', 'Número', 'Nombre', 'Tipo' ];
    return <table>
        <PokemonTableHead columns={ columns } />
        <PokemonTableBody pokemonRows={ json } />
    </table>;
}

export default PokemonTable;