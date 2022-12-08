import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const CoffeWrapper = styled(Container)``

export const CoffeItemWrapper = styled.div`
  display: flex;
  margin-top: 90px;
  margin-bottom: 110px;

  @media (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
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

  @media (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.hoverColor};
    border-color: ${props => props.theme.colors.borderColor};
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

  @media (max-width: 900px) {
    flex-direction: initial;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
  }
`

export const CoffeItemWrapperTeste = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const ContentWrapper = styled.div`
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`

export const CoffeTitle = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const DescriptionText = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const ButtonCoffe = styled.button`
  width: 170px;
  height: 52px;
  padding: 5px;
  background-color: ${props => props.theme.colors.detailTitleColorHover};
  color: ${props => props.theme.colors.primaryTextColor};
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  border: none;
`
