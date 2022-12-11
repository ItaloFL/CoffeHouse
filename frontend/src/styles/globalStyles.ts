import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
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
export const FadeLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const FadeRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Logo = styled.svg`
  color: ${props => props.theme.colors.logoColor};
`
