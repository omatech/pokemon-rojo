import { Fragment, useContext } from 'react';
import { StateContext } from "../../context/StateProvider";
import styled from 'styled-components';

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

const PokemonTableHead = ({ columns }) => {

    const changeDirection = ( direction ) => {
        dispatch({
            type: "SET_DIRECTION",
            payload: { direction : direction }
        });
    }

    const changeOrderValue = ( orderValue ) => {
        dispatch({
            type: "SET_ORDER_VALUE",
            payload: { orderValue : orderValue }
        });
    }

    const { orderValue, direction  } = useContext(StateContext);

    const handleClick = (column) => {
        if (column.sortable) {
            if (column.key === orderValue) {
                direction === 'asc' ? changeDirection('desc') : changeDirection('asc');
            } else {
                changeOrderValue('asc');
            }
            changeOrderValue(column.key);
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