import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const CoffeWrapper = styled(Container)``

export const CoffeItemWrapper = styled.div`
  margin-bottom: 110px;
`

export const CoffeItem = styled.button`
  display: flex;
  width: 11rem;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background-color: ${props => props.theme.colors.hoverColor};
    border-color: ${props => props.theme.colors.borderColor};
  }

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
  flex-direction: column;
  gap: 4rem;
`
