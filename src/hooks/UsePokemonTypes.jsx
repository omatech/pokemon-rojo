import { useState, useEffect } from "react";

const usePokemonTypes =  () => {

    const initialTypes = [];
    const url = "https://pokeapi.co/api/v2/type?limit=18";
    
    (async () => {
        const request = await fetch(url);
        const result = await request.json();
        result.results.map(function(type) {
            let initialType = {
                name: type.name,
                active: false
            };
            initialTypes.push(initialType);
        });
    })();

    const [types, setTypes] = useState(initialTypes);
    const selectedTypes = types.filter(type => type.active).map(type => type.name);

    return [types, setTypes, selectedTypes];
};

export default usePokemonTypes;