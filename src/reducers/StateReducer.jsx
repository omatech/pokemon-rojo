const sortDirection = (state, payload) =>
{   
    let pokemons = [];
    if (payload.direction === 'asc') {
        pokemons = state.pokemons.sort((a, b) => a[state.orderValue] > b[state.orderValue])
    } else {
        pokemons = state.pokemons.sort((a, b) => a[state.orderValue] < b[state.orderValue])
    }
    console.log(pokemons);
    return pokemons;
}


export const stateReducer = (state, { type, payload }) => {
    switch (type) {
        case "SET_PAGE_SIZE": {
            const newState = structuredClone(state);
            newState.pageSize = payload.pageSize;
            return newState;
        }
        case "SET_ORDER_VALUE": {
            const newState = structuredClone(state);
            newState.orderValue = payload.orderValue;
            return newState;
        }
        case "SET_SEARCH_VALUE": {
            const newState = structuredClone(state);
            newState.searchValue = payload.searchValue;
            return newState;
        }
        case "SET_DIRECTION": {
            const newState = structuredClone(state);
            newState.direction = payload.direction;
            newState.pokemons = sortDirection(newState, payload); 
            return newState;
        }
        case "SET_PAGE_NUMBER": {
            const newState = structuredClone(state); 
            newState.pageNumber = payload.pageNumber;
            return newState;
        }
        case "SET_POKEMONS": {
            const newState = structuredClone(state); 
            newState.pokemons = payload.pokemons;
            newState.pokemonCount = payload.pokemonCount;
            newState.pageCount = payload.pageCount;
            return newState;
        }
        //case "SET_TYPES":
            //return payload.page;
        default:
            return state;
    }
}