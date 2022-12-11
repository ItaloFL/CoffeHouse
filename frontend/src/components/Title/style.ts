import styled, { keyframes } from 'styled-components'

export const TitleAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const TitleText = styled.h1`
  color: ${props => props.theme.colors.primaryTextColor};
  font-size: 40px;
  animation: ${TitleAnimation} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 768px) {
    font-size: 32px;
    width: 350px;
  }
`
