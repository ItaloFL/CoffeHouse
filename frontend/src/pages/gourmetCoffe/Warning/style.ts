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

export const WarningWrapper = styled.div`
  display: flex;
  gap: 150px;
  justify-content: space-between;
  margin-bottom: 110px;

  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }

  @media (max-width: 968px) {
    gap: 60px;
    flex-direction: column;
    margin-bottom: 70px;
  }
`
export const WarningTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const TextWarning = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: var(--type-second);
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    font-size: 14px;
  }
`
