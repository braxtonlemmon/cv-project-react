import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 18px;
  }
  
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
    font-size: 18px;
  }

  textarea {
    width: 100%;
    resize: none;
    height: 8em;
  }

  input {
    width: 100%;
  }
`;

export default GlobalStyle;