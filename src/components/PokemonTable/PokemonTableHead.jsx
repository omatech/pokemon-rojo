import { Fragment, useContext, useEffect } from 'react';
import { StateContext } from "../../context/StateProvider";
import { StaticTextsContext } from "../../context/TitleProvider";
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

const PokemonTableHead = () => {

    useEffect(() => console.log('<PokemonTableHead />'));
    const { staticTexts } = useContext(StaticTextsContext);
    const columns = staticTexts.columnsHeader;
    const { state, dispatch } = useContext(StateContext);

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


    const handleClick = (column) => {
        if (column.sortable) {
            if (column.key === state.orderValue) {
                state.direction === 'asc' ? changeDirection('desc') : changeDirection('asc');
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
                            column.key === state.orderValue ?
                                state.direction === 'asc' ? <span>▼</span> : <span>▲</span>
                                : "▼" : ""
                    }
                </StyledHeaderCell>
            </Fragment>
        )}
        <StyledHeaderCell></StyledHeaderCell>
    </TableHeaderRow>;
};

export default PokemonTableHead;