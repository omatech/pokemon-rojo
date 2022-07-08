import { useContext, useRef } from "react";
import styled from 'styled-components';
import { colors, heights } from '../../../utils/variables';
import { StateContext } from  "../../../context/StateProvider";

const StyledSearchBar = styled.div`
  background-color: ${ colors.bgSearchBar };
  height: ${ heights.hSearchBar };
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SearchContainer = styled.div`
    height: 62px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;
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

const searchPokemon = ({ target }) => {

    const { dispatch } = useContext(StateContext);

    dispatch({
        type: 'SET_SEARCH_VALUE',
        payload: {
            searchValue: target,
        }
    });
}

const SearchBar = () => {

  const search = useRef();

  const onClickHandler = () => {
      searchPokemon(search.current.value);
      //setSearchValue(search.current.value);
  }

  const onKeyHandler = (event) => {
      if(event.key === 'Enter') {
          searchPokemon(search.current.value);
          //setSearchValue(search.current.value);
      }
  }

  return (
      <StyledSearchBar>
        <SearchContainer>
          <SearchInput type="text" placeholder="Haz una búsqueda" ref={ search } onKeyDown={onKeyHandler} autoFocus />
          <img src="img/search.svg" onClick={onClickHandler} />
        </SearchContainer>
    </StyledSearchBar>
  );

}

export default SearchBar;