import {useContext, useEffect } from 'react';
import { StateContext } from "../context/StateProvider";

import styled from 'styled-components';

const StyledDetail = styled.div `
    width: 500px;
    margin: 40px auto;
    background-color: var(--bg-detail);
    color: var(--txt-inverse);
    display: flex;
    flex-direction: column;

`;
const StyledFigure = styled.figure `
    background-color: var(--bg-basic);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    margin: 0;
`;
const StyledContentDetail = styled.div `
    width: 100%;
    padding: 20px;
`;


const PokemonDetail = () => {
    useEffect(() => console.log('<PokemonDetail />'));
    const { state, dispatch } = useContext(StateContext);

    const viewTable = () => {
        dispatch({
            type: "CLOSE_POKEMON_DETAIL",
        });
    }

    const handleClick = () => {
        viewTable();
    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return ( 
        <StyledDetail>
            <a href="#" onClick={() => handleClick()} >Cerrar</a>
            <StyledFigure>
                <img src={state.pokemon.image} alt={state.pokemon.name} width="45" height="45" />
            </StyledFigure>
            <StyledContentDetail>
                <h1>N. {String(state.pokemon.number).padStart(3, '0')} - {capitalizeFirst(state.pokemon.name)}</h1>
            </StyledContentDetail>
        </StyledDetail>
    );
}
 
export default PokemonDetail;