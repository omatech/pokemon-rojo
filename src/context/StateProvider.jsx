import { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/StateReducer';

export const StateContext = createContext();

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(stateReducer, {
        direction : "asc",
        orderValue: "number",
        searchValue: "",
        pageNumber: 0,
        pageSize: 10,
        pokemons: [],
        backPokemons: [],
        pokemonCount: 0,
        pageCount: 0,
        types: [],
        pokemon: ""
    });

    return <StateContext.Provider value={{ state, dispatch }}>
        { children }
    </StateContext.Provider>
}

export default StateProvider;