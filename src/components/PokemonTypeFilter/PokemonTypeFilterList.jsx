import {Fragment} from "react";
import { useContext } from "react";
import { StaticTextsContext } from "../../context/TitleProvider";
import {colors, text} from '../../utils/variables';

import styled from 'styled-components';

const StyledAside = styled.aside`
    background-color: #FFFFFF;
    padding: 0 20px;
`;

const FiltersTitle = styled.h2`
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const StyledCheckboxGroup = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${ colors.textCheckbox };
    text-transform: capitalize;
    input {
        display: none;
    }
    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        position: relative;
        &:before {
            content: '';
            cursor: pointer;
            display: block;
            width: 20px;
            height: 20px;
            background-color: ${ colors.bgCheckBox };
            margin-right: 16px;
            flex: 0 0 auto;
            border: 1px solid ${ colors.borderInput };
        }
        &:after {
            content: '';
            cursor: pointer;
            width: 4px;
            height: 9px;
            border: 2px solid ${ colors.checkCheckbox };
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            display: block;
            position: absolute;
            left: 7px;
            top: 4px;
            opacity: 0;
        }
    }
    input:checked + span:after {
        opacity: 1;
    }
`;

const PokemonTypeFilterList = ({types, setTypes}) => {

    const { staticTexts } = useContext(StaticTextsContext);

    const onChangeHandler = ({target}) => {
        setTypes(state => {
            const newState = structuredClone(state);
            const type = newState.find(({name}) => name === target.name);
            type.active = target.checked;
            return newState;
        })
    };

    return (
        <StyledAside>
            <FiltersTitle>{staticTexts.filterTitle}</FiltersTitle>
            {
                types.map(type =>
                    <StyledCheckboxGroup>
                        <input type="checkbox" name={type.name} id={type.name} onChange={onChangeHandler} checked={type.active} />
                        <span>{type.name}</span>
                    </StyledCheckboxGroup>
                )
            }
        </StyledAside>
    );

}
export default PokemonTypeFilterList;