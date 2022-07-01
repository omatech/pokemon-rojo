import { useRef } from "react";

const pokemonSearcher = ({setSearchValue}) => {
    const search = useRef();

    
    const onClickHandler = () => {
        setSearchValue(search.current.value);
    }

    return (
        <>
            <input type="text" placeholder="Escriu un nom de Pokémon" ref={ search } autoFocus />
            <button type="submit" onClick={onClickHandler}>Cerca</button>
        </>
    )
}

export default pokemonSearcher;