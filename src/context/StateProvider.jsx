import { createContext, useReducer } from 'react';
import { stateReducer } from '../reducers/StateReducer';
import usePokemonTypes from "../hooks/UsePokemonTypes";
import usePokemons from "../hooks/UsePokemons";

export const StateContext = createContext();

const StateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(stateReducer, {
        direction : "asc",
        orderValue: "number",
        searchValue: "",
        pageNumber: 0,
        pageSize: 10,
    });


    return <StateContext.Provider value={{ state, dispatch }}>
        { children }
    </StateContext.Provider>
}

export default StateProvider;