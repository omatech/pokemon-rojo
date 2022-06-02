// import PokemonTableColumns from "./PokemonTableColumns";

const PokemonTableHead = ({ columns }) => 
<thead columns={ columns }>
    <tr>
        { columns.map ( column => <th key={column}>{ column }</th>) }
        <th></th>
    </tr>
</thead>;

export default PokemonTableHead;