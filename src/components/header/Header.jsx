import TopBar from './topBar/topBar';
import Logo from './logo/Logo';
import SearchBar from './searchBar/SearchBar';
import styled from 'styled-components';
import {heights, widths} from '../../utils/variables';

const StyledHeader = styled.header`
  grid-column-end: span 2;
  display: grid;
  grid-template-columns: ${ widths.wSidebar } auto;
  grid-template-rows: ${ heights.hTopBar } 100px;
`;

const Header = ({setSearchValue}) => <StyledHeader><TopBar/><Logo/><SearchBar setSearchValue={setSearchValue} /></StyledHeader>;

export default Header;