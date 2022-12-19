import styled, { keyframes } from 'styled-components'

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

export const StatsList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 150px;
  margin-top: 50px;

  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 110px;
  }
`

export const StatsItem = styled.li``

export const StatsTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: bold;
  margin-bottom: 7px;
`

export const StatsDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
`
