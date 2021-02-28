import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 1rem;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: unset;
    color: #323232;
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }


  .ml-2 {
    margin-left: 2rem;
  }
`;

export default GlobalStyles;