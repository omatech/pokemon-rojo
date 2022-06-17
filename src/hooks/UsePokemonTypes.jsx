import {useState} from "react";

const usePokemonTypes =  () => {
    const initialTypes = [
        {name: "Agua", active: false},
        {name: "Bicho", active: false},
        {name: "Fantasma", active: false},
        {name: "Fuego", active: false},
        {name: "Tierra", active: false},
    ];

    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.active).map(type => type.name);

    return [types, setTypes, selectedTypes];
};

export default usePokemonTypes;