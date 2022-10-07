import { useContext, useEffect } from 'react'
import PokemonTableRow from './PokemonTableRow'
import { StateContext } from '../../context/StateProvider'
import styled from 'styled-components'

const TableBody = styled.div`
    display: table-row-group;
`

const PokemonTableBody = ({ setModalState }) => {
  useEffect(() => console.log('<PokemonTableBody />'))
  const { state } = useContext(StateContext)

  return <TableBody>
        {state.pokemons.map(filteredPokemon =>
            <PokemonTableRow key= {filteredPokemon.id} row={ filteredPokemon } setModalState={ setModalState }/>
        )}
    </TableBody>
}
export default PokemonTableBody
