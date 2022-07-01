import {useEffect, useState} from "react";

const usePokemons = ({selectedTypes, searchValue, currentPage, pageSize, orderValue, direction}) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${currentPage * pageSize}&limit=${pageSize}`;
    const [fetchedPokemons, setFetchedPokemons] = useState([]);
    const [detailedPokemon, setDetailedPokemon] = useState([]);
    const [pokemonCount, setPokemonCount] = useState(0);


/*     const filterPokemonTypes = (detailedPokemon) => {
        if (selectedTypes.length) {
            console.log(selectedTypes, detailedPokemon);
            detailedPokemon = detailedPokemon.filter(pokemon =>
                selectedTypes.some(
                    type => pokemon.types.includes(type))
            );
    
        }
    } */


    const pokemonDetail = async(pokemon, controller) => {
        const request = await fetch(pokemon.url, {signal: controller.signal });
        const result = await request.json();
        let detailedPokemon = [];
        if(request.ok){
            detailedPokemon = { "moves": result.moves, 
                "image": result.sprites.front_default, 
                "name": result.name, 
                "id": result.id, 
                "number": result.id, 
                "types": result.types }; 
            return detailedPokemon;
                //setDetailedPokemon(detailedPokemon);
            //filterPokemonTypes(detailedPokemon);
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
                pokemons = result.results.map(p => {
                    let a = pokemonDetail(p, controller);
                    console.log("a", a);
                });
                setFetchedPokemons(pokemons);
            }
        })();

        return () => controller.abort();

    }, [url]);

    console.log(fetchedPokemons);
    //console.log(detailedPokemon);
    //console.log(detailedPokemon);
    /*let pokemons = detailedPokemon.map(pokemon => ({
        id: pokemon.id,
        image: pokemon.image,
        number: pokemon.id,
        name: pokemon.name,
        moves: pokemon.moves,
        types: pokemon.types
    }));*/
    //let pokemon = 
/*
    if (selectedTypes.length) {
        pokemons = pokemons.filter(pokemon =>
            selectedTypes.some(
                type => pokemon.types.includes(type))
        );

    }
    *
    pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));
    const pageCount = Math.floor(pokemons.length / pageSize);

    if (direction === 'asc') {
        pokemons = pokemons.sort((a, b) => a[orderValue] > b[orderValue])
    } else {
        pokemons = pokemons.sort((a, b) => a[orderValue] < b[orderValue])
    }


    pokemons = pokemons.slice(pageSize * currentPage, pageSize * currentPage + pageSize)

    return [pokemonCount, pokemons, pageCount]; */
    return [0, [], 0];
}

export default usePokemons;