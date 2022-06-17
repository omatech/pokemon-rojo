import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";
import json from "../../pokemon.json";

const PokemonTable = () => {
    const columns = [ 'Pokemon', 'Número', 'Nombre', 'Tipo', 'Ataques' ];
    return <>
        <PokemonTableHead columns={ columns } />
        <PokemonTableBody pokemonRows={ json } />
    </>;
}

export default PokemonTable;