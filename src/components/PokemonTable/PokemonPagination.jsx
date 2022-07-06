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

    const changePageNumber = ( pageNumber ) => {
        dispatch({
            type: "SET_PAGE_NUMBER",
            payload: { pageNumber : pageNumber }
        });
    }

    const { currentPage, pageCount  } = useContext(StateContext);

    return (
        <StyledPagination>
            <StyledUl>
                <li>
                    <StyledLink onClick={() => changePageNumber(0)}>«</StyledLink>
                </li>
                {
                    currentPage > 0 ? 
                    <li>
                        <StyledLink disabled={currentPage === 0} onClick={() => changePageNumber(currentPage - 1)}>‹</StyledLink>
                    </li> : ''
                }

                {
                    currentPage > 2 ? <StyledLink>...</StyledLink> : ''
                }
                {[...Array(pageCount + 1).keys()].map((i) =>
                    i > currentPage + 2 ? '' :
                    i < currentPage - 2 ? '' :
                    <li key={i}>
                        <StyledLink className={`${i === currentPage ? "active" : ""}`} onClick={() => changePageNumber(i)} disabled={i === currentPage}>{i + 1}</StyledLink>
                    </li>
                )}
                {
                    currentPage > 2 && currentPage < pageCount - 2 ? <StyledLink>...</StyledLink> : ''
                }
                {
                    currentPage < pageCount ?
                    <li>
                        <StyledLink disabled={currentPage >= pageCount} onClick={() => changePageNumber(currentPage + 1)}>›</StyledLink>
                    </li> : ''
                }

                <li>
                    <StyledLink onClick={() => changePageNumber(pageCount)}>»</StyledLink>
                </li>
            </StyledUl>
        </StyledPagination>
    );
}

export default PokemonPagination;