import styled from 'styled-components';
import {colors, heights, widths} from '../../../utils/variables';
const IconImg = "/img/pokemon-icon.png";

const StyledTopBar = styled.div`
  background-color: ${ colors.bgTopbar };
  height: ${ heights.hTopBar };
  grid-column-end: span 2;
  padding-left: ${ widths.wSidebar };
  .container {
    display: flex;
    flex-direction: row-reverse;
  }
  img {
    position: relative;
    z-index: 100;
  }
`;

const TopBar = () => 
  <StyledTopBar>
      <div className='container'>
        <img src={IconImg} alt="Pokémon" />
      </div>
  </StyledTopBar>;

export default TopBar;