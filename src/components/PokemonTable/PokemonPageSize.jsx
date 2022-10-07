import styled from 'styled-components'
import { StaticTextsContext } from '../../context/TitleProvider'
import { useContext } from 'react'
import { StateContext } from '../../context/StateProvider'

const StyledSpan = styled.span`
    font-size: 13px;
    text-transform: uppercase;
`

const SizeSelect = styled.select`
    border: none;
    background-color: transparent;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-decoration: underline;
    text-transform: uppercase;
    
    display: inline-block;
    line-height: 1.5em;
    padding: 0.5em 2.5em 0.5em 1em;

    margin: 0;      
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image:
    linear-gradient(45deg, transparent 50%, black 50%),
    linear-gradient(135deg, black 50%, transparent 50%);
    background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
    background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
    background-repeat: no-repeat;
`

const PokemonPageSize = () => {
  const { state, dispatch } = useContext(StateContext)

  const { staticTexts } = useContext(StaticTextsContext)
  const paginationText = staticTexts.paginationConfig.text
  const onChangeHandler = ({ target }) => {
    dispatch({
      type: 'SET_PAGE_SIZE',
      payload: {
        pageSize: target.value
      }
    })
  }

  return (
        <div>
            <StyledSpan>Ver: </StyledSpan>
            <SizeSelect onChange={onChangeHandler} value={state.pageSize}>
                { staticTexts.paginationConfig.sizes.map(size => <option key={size} value={size}>{ paginationText.replace('::', size)}</option>) }
            </SizeSelect>
        </div>
  )
}

export default PokemonPageSize
