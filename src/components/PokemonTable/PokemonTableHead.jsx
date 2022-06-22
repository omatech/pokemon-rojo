import {Fragment} from 'react';

import styled from 'styled-components';

const StyledSpan = styled.span`
       text-decoration: underline;
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

    return <thead>
    <tr>
        {columns.map((column) =>
            <Fragment key={column.name}>
                <th onClick={() => handleClick(column)}>
                    <span>{column.name}</span>
                    {
                        column.sortable ?
                            column.key === orderValue ?
                                direction === 'asc' ? <span>▼</span> : <span>▲</span>
                                : "▼" : ""
                    }
                </th>
            </Fragment>
        )}
        <th></th>
    </tr>
    </thead>;
};

export default PokemonTableHead;