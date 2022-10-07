import styled from 'styled-components'

const StyledDiv = styled.div`
    display: inline;
    margin-right: 25px;
    padding-left: 8px;
    position: relative;
    text-transform: capitalize;
    &:before {
        content: "";
        float: left;
        position: absolute;
        top: 5px;
        left: -12px;
        width: 0;
        height: 0;
        border-color: var(--${props => props.name}-color);
        border-style: solid;
        border-width: 6px;
        border-radius: 50px;
    }
`

const PokemonType = (props) => {
  return (
        <StyledDiv name={props.name}>{props.name}</StyledDiv>
  )
}

export default PokemonType
