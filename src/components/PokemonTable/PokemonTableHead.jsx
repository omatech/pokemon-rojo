import {Fragment} from 'react';

import styled from 'styled-components';

const TableHead = styled.div`
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 25px;
`;

const TableHeaderRow = styled.div`
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 14px;  
`;

const StyledHeaderCell = styled.div`
    background-color: #000;
    color: #FFF;
    display: table-cell;
    padding: 10px 20px;
    text-align: justify;
`;

const PokemonTableHead = ({columns, orderValue, setOrderValue, direction, setDirection}) => {
    const handleClick = (column) => {
        if (column.sortable) {
            if (column.key === orderValue) {
                direction === 'asc' ? setDirection('desc') : setDirection('asc');
            } else {
                setDirection('asc');
            }
            setOrderValue(column.key);
        }
    }

    return <TableHeaderRow>
        {columns.map((column) =>
            <Fragment key={column.name}>
                <StyledHeaderCell onClick={() => handleClick(column)}>
                    <span>{column.name}</span>
                    {
                        column.sortable ?
                            column.key === orderValue ?
                                direction === 'asc' ? <span>▼</span> : <span>▲</span>
                                : "▼" : ""
                    }
                </StyledHeaderCell>
            </Fragment>
        )}
        <StyledHeaderCell></StyledHeaderCell>
    </TableHeaderRow>;
};

export default PokemonTableHead;