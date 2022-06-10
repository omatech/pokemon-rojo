const PokemonTableHead = ({ columns }) =>
<thead>
<tr>
    {columns.map(column => <th key={column}>{column}</th>)}
    <th></th>
</tr>
</thead>;

export default PokemonTableHead;