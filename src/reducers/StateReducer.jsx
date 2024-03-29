const sortDirection = (state, payload) => {
  if (payload.direction === 'asc') {
    state.pokemons.sort((a, b) => {
      if (a[state.orderValue] > b[state.orderValue]) {
        return 1
      }
      if (a[state.orderValue] < b[state.orderValue]) {
        return -1
      }
      return 0
    })
  } else {
    state.pokemons.sort((a, b) => {
      if (a[state.orderValue] > b[state.orderValue]) {
        return -1
      }
      if (a[state.orderValue] < b[state.orderValue]) {
        return 1
      }
      return 0
    })
  }
}

export const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_PAGE_SIZE': {
      const newState = structuredClone(state)
      newState.pageSize = payload.pageSize
      return newState
    }
    case 'SET_ORDER_VALUE': {
      const newState = structuredClone(state)
      newState.orderValue = payload.orderValue
      return newState
    }
    case 'SET_SEARCH_VALUE': {
      const newState = structuredClone(state)
      newState.searchValue = payload.searchValue
      newState.pokemons = state.backPokemons.filter(
        pokemon => pokemon.name.toLowerCase().includes(newState.searchValue.toLowerCase())
      )

      return newState
    }
    case 'SET_DIRECTION': {
      const newState = structuredClone(state)
      newState.direction = payload.direction
      sortDirection(newState, payload)
      return newState
    }
    case 'SET_PAGE_NUMBER': {
      const newState = structuredClone(state)
      newState.pageNumber = payload.pageNumber
      return newState
    }
    case 'SET_POKEMONS': {
      const newState = structuredClone(state)
      newState.pokemons = payload.pokemons
      newState.backPokemons = payload.pokemons
      newState.pokemonCount = payload.pokemonCount
      newState.pageCount = payload.pageCount
      return newState
    }
    case 'SEE_POKEMON_DETAIL': {
      const newState = structuredClone(state)
      newState.pokemon = payload.pokemon
      return newState
    }
    case 'CLOSE_POKEMON_DETAIL': {
      const newState = structuredClone(state)
      newState.pokemon = ''
      return newState
    }
    case 'SET_TYPES': {
      const newState = structuredClone(state)
      newState.types = payload.types
      return newState
    }
    case 'SET_TYPE': {
      const newState = structuredClone(state)
      const type = newState.types.find(({ name }) => name === payload.name)
      type.active = payload.checked

      const selectedTypes = newState.types.filter(type => type.active).map(type => type.name)

      if (selectedTypes.length > 0) {
        newState.pokemons = state.backPokemons.filter(
          pokemon => selectedTypes.some(
            eachType => pokemon.types.includes(eachType))
        )
      } else {
        newState.pokemons = state.backPokemons
      }

      return newState
    }

    default:
      return state
  }
}
