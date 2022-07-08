import styled from 'styled-components';
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const StyledLink = styled.a`
    color: #6F6F6F;
    cursor: pointer;
    margin-left: 8px;
    margin-right: 8px;
    position: relative;

    &.active {
        color: #000;
        font-weight: 600;
        &:after {
            content: '';
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 1px;
            border-width: 0 0 1px;
            border-style: solid;
        }
    }
`;

const StyledUl = styled.ul`
    text-align: right;
`;

const StyledPagination = styled.div`
    li { display: inline; }
`;

const PokemonPagination = () => {

    const { state, dispatch } = useContext(StateContext);
    const changePageNumber = ( pageNumber ) => {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: { pageNumber : pageNumber }
        });
    }

    return (
        <StyledPagination>
            <StyledUl>
                <li>
                    <StyledLink onClick={() => changePageNumber(0)}>«</StyledLink>
                </li>
                {
                    state.pageNumber > 0 ? 
                    <li>
                        <StyledLink disabled={state.pageNumber === 0} onClick={() => changePageNumber(state.pageNumber - 1)}>‹</StyledLink>
                    </li> : ''
                }

                {
                    state.pageNumber > 2 ? <StyledLink>...</StyledLink> : ''
                }
                {[...Array(state.pageCount + 1).keys()].map((i) =>
                    i > state.pageNumber + 2 ? '' :
                    i < state.pageNumber - 2 ? '' :
                    <li key={i}>
                        <StyledLink className={`${i === state.pageNumber ? "active" : ""}`} onClick={() => changePageNumber(i)} disabled={i === state.pageNumber}>{i + 1}</StyledLink>
                    </li>
                )}
                {
                    state.pageNumber > 2 && state.pageNumber < state.pageCount - 2 ? <StyledLink>...</StyledLink> : ''
                }
                {
                    state.pageNumber < state.pageCount ?
                    <li>
                        <StyledLink disabled={state.pageNumber >= state.pageCount} onClick={() => changePageNumber(state.pageNumber + 1)}>›</StyledLink>
                    </li> : ''
                }

                <li>
                    <StyledLink onClick={() => changePageNumber(state.pageCount)}>»</StyledLink>
                </li>
            </StyledUl>
        </StyledPagination>
    );
}

export default PokemonPagination;