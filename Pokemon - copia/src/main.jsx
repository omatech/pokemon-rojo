import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import PokemonTable from "./components/PokemonTable/index";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <PokemonTable />
  </React.StrictMode>
)
