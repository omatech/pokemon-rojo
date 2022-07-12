import { useEffect, useContext } from "react";
import { StateContext } from  "../context/StateProvider";

const usePokemonTypes =  () => {

    const { dispatch } = useContext(StateContext);

    const initialTypes = [];
    const url = "https://pokeapi.co/api/v2/type?limit=18";
    
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            const request = await fetch(url, { signal: controller.signal });
            const result = await request.json();
            const results = result.results.sort((a, b) =>
                a.name > b.name ? 1 : -1,
            );
            results.map(function(type) {
                let initialType = {
                    name: type.name,
                    active: false
                };
                initialTypes.push(initialType);
            });

            dispatch({
                type: 'SET_TYPES',
                payload: {
                    types: initialTypes
                }
            });

            
        })();

        return () => controller.abort();

    }, []);

    return [];
};

export default usePokemonTypes;