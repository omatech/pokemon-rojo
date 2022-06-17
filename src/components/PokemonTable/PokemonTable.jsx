import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";


const PokemonTable = ({pokemons}) => {
    const columns = [ 'Pokemon', 'Número', 'Nombre', 'Tipo', 'Ataques' ];
    return <>
        <PokemonTableHead columns={ columns } />
        <PokemonTableBody pokemons={ pokemons } />
    </>;
}

export default PokemonTable;