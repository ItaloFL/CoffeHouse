import styled, { keyframes } from 'styled-components'
import { Container } from '../../../styles/layout/Container'

export const IntroductionAnimationFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const MethodWrapper = styled(Container)`
  margin-bottom: 150px;

  &.visible {
    animation: ${IntroductionAnimationFadeIn} 0.8s ease-in-out;
  }

  @media (max-width: 800px) {
    margin-bottom: 100px;
  }
`

export const MethodList = styled.ul`
  display: flex;
  gap: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MethodItem = styled.li`
  width: 21.875rem;
  height: 18.5rem;
  background-color: ${props => props.theme.colors.cardColor};
  border: 1px solid;
  border-color: ${props => props.theme.colors.borderColor};
  padding: 25px 25px 40px 25px;
  border-radius: 4px;

  @media (max-width: 1100px) {
    height: 20rem;
  }

  @media (max-width: 1000px) {
    width: 80vw;
    height: 18.5rem;
  }
`

export const ListIcon = styled.div`
  margin-bottom: 25px;
`
export const ListCoffeTitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: bold;
  margin-bottom: 15px;
  font-family: 'Roboto';
`

export const ListDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const TitleCoffe = styled.h1`
  font-family: var(--type-frist);
  font-size: 36px;
  font-weight: bold;
  max-width: 305px;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 40px;
`
