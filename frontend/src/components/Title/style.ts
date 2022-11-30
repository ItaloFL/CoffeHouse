import styled from 'styled-components'

export const TitleText = styled.h1`
  color: ${props => props.theme.colors.primaryTextColor};
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
    width: 350px;
  }
`
