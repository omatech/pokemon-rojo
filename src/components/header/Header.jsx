import TopBar from './topBar/topBar'
import Logo from './logo/logo'
import SearchBar from './searchBar/SearchBar'
import styled from 'styled-components'
import { heights, widths } from '../../utils/variables'
import { memo, useEffect } from 'react'

const StyledHeader = styled.header`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: ${widths.wSidebar} auto;
  grid-template-rows: ${heights.hTopBar} 100px;
`

const Header = () => {
  useEffect(() => console.log('<Header />'))
  return <StyledHeader><TopBar/><Logo/><SearchBar/></StyledHeader>
}

export default memo(Header)
