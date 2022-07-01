import { useRef } from "react";

import styled from 'styled-components';

const SearchContainer = styled.div`
    height: 62px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    background-color: #FFF;
    border: 1px solid #EAEBF2;
    border-radius: 60px;
    font-size: 12px;
    margin-right: 10px;
    padding: 10px 20px;
    width: 320px;
`;

const pokemonSearcher = ({setSearchValue}) => {
    const search = useRef();

    const onClickHandler = () => {
        setSearchValue(search.current.value);
    }

    const onKeyHandler = (event) => {
        if(event.key === 'Enter') {
            setSearchValue(search.current.value);
        }
    }

    return (
        <SearchContainer>
            <SearchInput type="text" placeholder="Haz una búsqueda" ref={ search } onKeyDown={onKeyHandler} autoFocus />
            <img src="img/search.svg" onClick={onClickHandler} />
        </SearchContainer>
    )
}

export default pokemonSearcher;