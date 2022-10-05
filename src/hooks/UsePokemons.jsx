import {useEffect, useState, useContext} from "react";
import { StateContext } from "../context/StateProvider";

const usePokemons = () => {
    const { state, dispatch  } = useContext(StateContext);
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${state.pageNumber * state.pageSize}&limit=${state.pageSize}`;
    const [isLoading, setIsLoading] = useState(true);


    const getPokemonDetails = async(pokemons, controller) => {
        const pokemonPromises = pokemons.map(p => {
            return pokemonDetail(p, controller);
        });
        return Promise.all(pokemonPromises);
    };

    const pokemonDetail = async(pokemon, controller) => {
        const request = await fetch(pokemon.url, {signal: controller.signal });
        const result = await request.json();
        if(request.ok){
            return { 
                "id": result.id, 
                "image": `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`, 
                "name": result.name, 
                "number": result.id, 
                "types": result.types.map(t => t.type.name)
            }; 
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            const request = await fetch(url, { signal: controller.signal });
            const result = await request.json();

            let pokemons = [];
            if(request.ok){
                pokemons = await getPokemonDetails(result.results, controller);
                dispatch({
                    type: "SET_POKEMONS",
                    payload: { 
                        pokemons : pokemons,
                        pokemonCount: result.count,
                        pageCount: Math.floor(result.count / state.pageSize)
                    }
                }); 
                
                setIsLoading(false);
            }
        })();

        return () => controller.abort();

    }, [url]);

    return [isLoading];
}

export default usePokemons;