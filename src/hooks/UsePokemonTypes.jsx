import {useState} from "react";

export const usePokemonTypes =  (initState) => {
    const [types, setTypes] = useState(initState);

    const getPokemonRows = (rows) => rows.filter(row => row.types.includes("Agua"))

    return [types, setTypes, getPokemonRows];
};
