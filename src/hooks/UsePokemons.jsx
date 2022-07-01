import {useEffect, useState} from "react";

const usePokemons = ({selectedTypes, searchValue, currentPage, pageSize, orderValue, direction}) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${currentPage * pageSize}&limit=${pageSize}`;
    const [fetchedPokemons, setFetchedPokemons] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [pageCount, setPageCount] = useState(0);


    const getPokemonDetails = async(pokemons, controller) => {
        const pokemonPromises = pokemons.map(p => {
            return pokemonDetail(p, controller);
        });
        return Promise.all(pokemonPromises);
    }

    const pokemonDetail = async(pokemon, controller) => {
        const request = await fetch(pokemon.url, {signal: controller.signal });
        const result = await request.json();
        if(request.ok){
            return { 
                "id": result.id, 
                "image": result.sprites.front_default, 
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
            setPokemonCount(result.count);
            let pokemons = [];
            if(request.ok){
                pokemons = await getPokemonDetails(result.results, controller);
                if (direction === 'asc') {
                    pokemons = pokemons.sort((a, b) => a[orderValue] > b[orderValue])
                } else {
                    pokemons = pokemons.sort((a, b) => a[orderValue] < b[orderValue])
                }                
                setFetchedPokemons(pokemons);
                setPageCount(Math.floor(result.count / pageSize));
                setIsLoading(false);
            }
        })();

        return () => controller.abort();

    }, [url]);

   
    let pokemons = fetchedPokemons;
    if (selectedTypes.length) {
        pokemons = pokemons.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.includes(type))
        );
    }

    pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));

    return [pokemonCount, pokemons, pageCount, isLoading];
}

export default usePokemons;