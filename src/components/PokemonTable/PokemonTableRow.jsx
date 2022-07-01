import PokemonAttack from "./PokemonAttack";
import PokemonType from "./PokemonType";

import styled from 'styled-components';

const TableRow = styled.div`
    outline: 1px solid #E7E7E7;
    display: table-row;
    &:hover {
        outline: 1px solid #FFE056;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
`;

const PokemonSprite = styled.img`
    padding: 5px;
`;

const TableCell = styled.div`
    display: table-cell;
    font-size: 15px;
    padding-left: 20px;
    vertical-align: middle;
`;

const DetailButton = styled.div`
    background-color: #195AAB;
    border-radius: 80px;
    color: #FFF;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    padding: 5px 10px;
    text-align: center;
    text-transform: uppercase;
    width: 100px;
`;

const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const PokemonTableRow = ({row}) =>
    <TableRow>
        <TableCell>
            <PokemonSprite src={row.image} alt={row.name} width="45" height="45" />
        </TableCell>
        <TableCell>N. {String(row.number).padStart(3, '0')}</TableCell>
        <TableCell>
            <strong>{capitalizeFirst(row.name)}</strong>
        </TableCell>
        <TableCell>
            { row.types.map(type =>
                <PokemonType key={type} name={type} />
            ) }
        </TableCell>

        {/* <td>{row.moves.slice(0, 3).map(m => <PokemonAttack key={m} attack={m}/>)}</td> */}

        <TableCell>
            <DetailButton href="/">Ver detalle</DetailButton>
        </TableCell>
    </TableRow>;


export default PokemonTableRow;