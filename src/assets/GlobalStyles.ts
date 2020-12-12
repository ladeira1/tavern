import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }

  html {
    background: ${colors.background};
  }

  h1, p {
    color: ${colors.text};
  }

  *, button, input {
    border: 0;
    background: none;
  }
`;
