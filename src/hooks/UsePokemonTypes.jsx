import {useState} from "react";

export const usePokemonTypes =  () => {

    const initialTypes = [
        {name: "Tierra", active: false},
        {name: "Bicho", active: false},
        {name: "Fantasma", active: false},
        {name: "Fuego", active: true},
        {name: "Agua", active: true},
    ];

    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.active).map(type => type.name);

    return [types, setTypes, selectedTypes];
};
