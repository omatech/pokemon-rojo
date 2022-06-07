import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";
import pokemonRows from "../../pokemon.json";

const PokemonTable = () => {
  const columns = [ 'Pokemon', 'Número', 'Nombre', 'Tipo' ];
  // const rows = ;

  // return <Table title="Pokemon list" rows={ rows } columns={ columns } />
  return <table>
  <PokemonTableHead columns={ columns } />
  <PokemonTableBody pokemonRows={ pokemonRows } />
</table>;
}

export default PokemonTable;