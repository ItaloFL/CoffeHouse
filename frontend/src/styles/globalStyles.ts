import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121212;
    font-family: var(--type-frist);
  }

  :root {
    --type-frist: 'Roboto', Arial, sans-serif;
    --type-second: 'Poppins', georgia;
  }

  ul, li {
    list-style: none;
  }

  button, input {
    display: block;
    outline: none;
  }

  .container {
    max-width: 70rem;
  }
`
