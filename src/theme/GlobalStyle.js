import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Nunito", sans-serif;
    margin: 0;
  }

  ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
`;

export default GlobalStyle;
