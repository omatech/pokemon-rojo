import PokemonTableHead from './PokemonTableHead'
import PokemonTableBody from './PokemonTableBody'
import styled from 'styled-components'
import { useEffect } from 'react'

const StyledTable = styled.div`
    width: 100%;
    display: table;
    background-color: #FFF;
    border: 1px solid #E7E7E7;
`

const PokemonTable = ({ setModalState }) => {
  useEffect(() => console.log('<PokemonTable />'))
  return <>
        <StyledTable>
            <PokemonTableHead />
            <PokemonTableBody setModalState={ setModalState } />
        </StyledTable>
    </>
}

export default PokemonTable
