import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`}`;
