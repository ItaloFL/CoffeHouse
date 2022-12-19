import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const FadeInAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`

export const TradicionalCoffeWrapper = styled(Container)``

export const Detail = styled.div`
  width: 50px;
  height: 1px;
  background-color: ${props => props.theme.colors.detailColor};
  margin-bottom: 90px;
`

export const TestDetail = styled.div`
  height: 90px;
  width: 1px;
  background-color: ${props => props.theme.colors.detailColor};

  @media (max-width: 768px) {
    display: none;
  }
`
