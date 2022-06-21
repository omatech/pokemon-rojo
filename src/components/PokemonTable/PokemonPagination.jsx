const PokemonPagination = ({currentPage, pageCount, setCurrentPage}) => {
    return <>
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
    </>;
}

export default PokemonPagination;