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

export const FadeRightAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const FadeLeftAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const CoffeWrapper = styled(Container)`
  &.visible {
    animation: ${FadeInAnimation} 0.6s ease-in-out;
  }
`

export const CoffeItemWrapper = styled.div`
  display: flex;
  margin-top: 110px;
  margin-bottom: 250px;

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

  &.active {
    background-color: ${props => props.theme.colors.hoverColor};
    border-color: ${props => props.theme.colors.borderColor};
  }

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
  .ButtonCoffe {
    width: 170px;
    height: 45px;
    padding: 5px;
    padding-top: 13px;
    background-color: ${props => props.theme.colors.buttonBackgroudColor};
    color: ${props => props.theme.colors.primaryTextColor};
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    text-decoration: none;
    text-align: center;
    justify-content: center;

    &:hover {
      background-color: ${props =>
        props.theme.colors.buttonBackgroudColorHover};
      transition: 200ms;
    }
  }
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

  &.visible {
    animation: ${FadeInAnimation} 0.6s ease-in;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const DescriptionText = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};

  &.visible {
    animation: ${FadeRightAnimation} 0.8s ease-in-out;
  }
`

export const ImageWrapper = styled.div`
  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }
`


