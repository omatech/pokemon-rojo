import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonTable from "./components/PokemonTable/PokemonTable";
import './index.css'
import PokemonTableHead from "./components/PokemonTable/PokemonTableHead";
import PokemonTableBody from "./components/PokemonTable/PokemonTableBody";


const columns = ['Pokemon', 'Número', 'Nombre', 'Tipo', 'Ataques'];
const rows = [
    {"id": 1, "image": "charmander.png", "number": '004', "name": "Charmander", "type": "Fuego"},
    {"id": 2, "image": "chamaleon.png", "number": '005', "name": "Chamaleon", "type": "Fuego"},
    {"id": 3, "image": "charizard.png", "number": '006', "name": "Charizard", "type": "Fuego"}
];

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonTable>
            <PokemonTableHead columns={columns}/>
            <PokemonTableBody rows={rows}/>
        </PokemonTable>
    </React.StrictMode>
)
