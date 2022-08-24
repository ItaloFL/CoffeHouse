import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const CoffeWrapper = styled(Container)``

export const CoffeItemWrapper = styled.div``

export const CoffeItem = styled.button`
  display: flex;
  width: 10rem;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  cursor: pointer;

  p {
    color: ${props => props.theme.colors.primaryTextColor};
    font-family: var(--type-second);
    font-weight: medium;
    font-size: 1.25rem;
  }
`

export const CoffeIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const CoffeItens = styled.div`
  display: flex;
  gap: 8.4rem;
`
