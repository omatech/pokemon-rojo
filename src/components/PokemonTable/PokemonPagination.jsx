import styled from 'styled-components';

const StyledPagination = styled.div`
    li { display: inline; }
`;

const PokemonPagination = ({currentPage, pageCount, setCurrentPage}) => {
    return <StyledPagination>
        <button onClick={() => setCurrentPage(0)}>«</button>
        <button disabled={currentPage === 0} onClick={() => setCurrentPage(currentPage - 1)}>‹</button>
        <ul>
            {[...Array(pageCount + 1).keys()].map((i) =>
                <li key={i}>
                    <button onClick={() => setCurrentPage(i)} disabled={i === currentPage}>{i + 1}</button>
                </li>
            )}
        </ul>
        <button disabled={currentPage >= pageCount} onClick={() => setCurrentPage(currentPage + 1)}>›</button>
        <button onClick={() => setCurrentPage(pageCount)}>»</button>
    </StyledPagination>;
}

export default PokemonPagination;
