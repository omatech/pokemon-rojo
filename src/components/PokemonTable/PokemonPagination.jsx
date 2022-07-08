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
                    state.currentPage > 0 ? 
                    <li>
                        <StyledLink disabled={state.currentPage === 0} onClick={() => changePageNumber(state.currentPage - 1)}>‹</StyledLink>
                    </li> : ''
                }

                {
                    state.currentPage > 2 ? <StyledLink>...</StyledLink> : ''
                }
                {[...Array(state.pageCount + 1).keys()].map((i) =>
                    i > state.currentPage + 2 ? '' :
                    i < state.currentPage - 2 ? '' :
                    <li key={i}>
                        <StyledLink className={`${i === state.currentPage ? "active" : ""}`} onClick={() => changePageNumber(i)} disabled={i === state.currentPage}>{i + 1}</StyledLink>
                    </li>
                )}
                {
                    state.currentPage > 2 && state.currentPage < state.pageCount - 2 ? <StyledLink>...</StyledLink> : ''
                }
                {
                    state.currentPage < state.pageCount ?
                    <li>
                        <StyledLink disabled={state.currentPage >= state.pageCount} onClick={() => changePageNumber(state.currentPage + 1)}>›</StyledLink>
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