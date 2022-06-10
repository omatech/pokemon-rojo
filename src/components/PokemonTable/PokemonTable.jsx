import PokemonTableHead from "./PokemonTableHead";
import PokemonTableBody from "./PokemonTableBody";

const PokemonTable = () => {
  const columns = ['Pokemon', 'Número', 'Nombre', 'Tipo'];
  const rows = [
    {"id": 1, "image": "charmander.png", "number": '004', "name": "Charmander", "type": "Fuego"},
    {"id": 2, "image": "chamaleon.png", "number": '005', "name": "Chamaleon", "type": "Fuego"},
    {"id": 3, "image": "charizard.png", "number": '006', "name": "Charizard", "type": "Fuego"}
  ];

  return (
      <table>
        <PokemonTableHead columns={columns}/>
        <PokemonTableBody rows={rows}/>
      </table>
  )
}

export default PokemonTable;