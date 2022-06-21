const pokemonSearcher = ({setSearchValue}) => {
    const onChangeHandler = ({target}) => {
        setSearchValue(target.value);
    }

    return (
        <input type="text" placeholder="Escriu un nom de Pokémon" onChange={onChangeHandler}/>
    )
}

export default pokemonSearcher;