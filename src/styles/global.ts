import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: Eina;
    src: url('fonts/Eina-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: Eina;
    src: url('fonts/Eina-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: Graphik;
    src: url('fonts/graphik/Graphik-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: Graphik;
    src: url('fonts/graphik/Graphik-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: Graphik;
    src: url('fonts/graphik/Graphik-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: block;
  }
  body {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
