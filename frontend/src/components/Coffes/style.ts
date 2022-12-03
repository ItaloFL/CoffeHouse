import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const CoffeWrapper = styled(Container)``

export const CoffeItemWrapper = styled.div`
  margin-top: 90px;
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

  &:hover,
  &:focus {
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

export const CoffeItemWrapperTeste = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

export const CoffeTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const DescriptionText = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const ButtonCoffe = styled.button`
  width: 170px;
  height: 52px;
  padding: 5px;
  background-color: ${props => props.theme.colors.detailTitleColor};
  color: ${props => props.theme.colors.primaryTextColor};
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
`
