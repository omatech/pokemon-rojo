import {useState} from "react";

const usePokemonTypes =  () => {
    const initialTypes = [
        {name: "water", active: false},
        {name: "bug", active: false},
        {name: "ghost", active: false},
        {name: "fire", active: false},
        {name: "ground", active: false},
    ];

    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.active).map(type => type.name);

    return [types, setTypes, selectedTypes];
};

export default usePokemonTypes;