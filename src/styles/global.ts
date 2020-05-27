import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body, input, button{
    font-size: 1.6rem;
    font-family: sans-serif;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }
`;