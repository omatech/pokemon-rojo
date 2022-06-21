const PokemonPageSize = ({pageSize, setPageSize}) =>
    <select onChange={({target}) => setPageSize(target.value)} value={pageSize}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </select>

export default PokemonPageSize;