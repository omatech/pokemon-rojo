import {Fragment} from "react";
import { useContext } from "react";
import { StaticTextsContext } from "../../context/TitleProvider";
import styled from 'styled-components';

const FiltersTitle = styled.h2`
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const StyledLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 32px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 14px;
    text-align: left;
    text-transform: capitalize;
`;

const StyledInput = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked {
        ~ div {
            background: #000;
            &:after {
                display: block;
            }
        }
    }
`;

const StyledBox = styled.div`
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;

    &:after {
        content: '';
        position: absolute;
        display: none;
        left: 8px;
        top: 4px;
        width: 3px;
        height: 8px;
        border: solid #FFC700;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
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
        <div>
            <FiltersTitle>{staticTexts.filterTitle}</FiltersTitle>
            {
                types.map(type =>
                    <Fragment key={type.name}>
                        <StyledLabel>
                            {type.name}
                            <StyledInput type="checkbox" name={type.name} id={type.name} onChange={onChangeHandler} checked={type.active} />
                            <StyledBox></StyledBox>
                        </StyledLabel>
                    </Fragment>
                )
            }
        </div>
    );

}
export default PokemonTypeFilterList;