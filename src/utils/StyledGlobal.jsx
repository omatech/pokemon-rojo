import {createGlobalStyle} from 'styled-components';
import {colors, widths, text} from './variables';

const StyledGlobal = () => <GlobalStyle />;

const GlobalStyle = createGlobalStyle`  
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
    color: #303030;
    background-color: ${colors.bgBody};
    font-family: ${text.fontFamilyDefault};
  }
  button {
    appearance: none,
    -webkit-appearance: none;
  }
  .container {
    width: 100%;
    max-width: ${ widths.wContainer };
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default StyledGlobal;
