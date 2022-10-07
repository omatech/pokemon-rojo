import styled from 'styled-components'
import { colors, widths } from '../../../utils/variables'
const logoImg = '/img/pokemon-logo.png'

const StyledLogo = styled.div`
  background-color: ${colors.bgSidebar};
  width: ${widths.wSidebar};
`

const Logo = () => <StyledLogo><img src={logoImg} alt="Pokémon" /></StyledLogo>

export default Logo
