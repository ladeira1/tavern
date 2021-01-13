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

  h1, h2, h3, p, span {
    color: ${colors.text};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */
  }

  *, button, input {
    border: 0;
    background: none;
  }

  button, a {
    :hover {
      cursor: pointer;
    }
  }

  input:hover {
    cursor: column;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
