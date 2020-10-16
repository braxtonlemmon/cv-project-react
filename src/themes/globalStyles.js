import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Gayathri', sans-serif;
  }

  input, textarea {
    border-radius: 10px;
    border: 1px solid grey;
    padding: 5px;
    text-align: center;
    margin: 0 10px;
  }

  input:focus, textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;