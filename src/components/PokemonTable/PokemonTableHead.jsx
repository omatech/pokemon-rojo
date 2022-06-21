const PokemonTableHead = ({ columns }) => {
    const handleClick = ({target}) => {
        //todo
    }

    return <thead>
    <tr>
        {columns.map((column, index) =>
            <>
                <th onClick={handleClick} key={column}>{column} {index > 0 && index <= 3 ? "▼" : ""}</th>
            </>
        )}
        <th></th>
    </tr>
    </thead>;
};

export default PokemonTableHead;