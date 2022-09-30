import { useContext } from 'react';
import { StateContext } from "../context/StateProvider";

const PokemonDetail = () => {

    const { state, dispatch } = useContext(StateContext);

    const viewTable = () => {
        dispatch({
            type: "CLOSE_POKEMON_DETAIL",
        });
    }

    const handleClick = () => {
        viewTable();
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return ( 
        <div>
            <h1>N. {String(state.pokemon.number).padStart(3, '0')} - {capitalizeFirst(state.pokemon.name)}</h1>
            <img src={state.pokemon.image} alt={state.pokemon.name} width="45" height="45" />
            <a href="#" onClick={() => handleClick()} >Cerrar</a>
        </div>
    );
}
 
export default PokemonDetail;