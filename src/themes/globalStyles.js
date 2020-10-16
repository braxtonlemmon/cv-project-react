import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Gayathri', sans-serif;
  }

  input, textarea {
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.dark};
    padding: 5px;
    text-align: center;
    margin: 0 10px;
    color: ${props => props.theme.colors.dark};
  }

  input:focus, textarea:focus {
    outline: none;
  }

  label {
    color: ${props => props.theme.colors.dark};
  }
`;

export default GlobalStyle;