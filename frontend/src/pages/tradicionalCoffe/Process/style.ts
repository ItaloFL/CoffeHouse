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

export const ProcessWrapper = styled.div`
  margin-bottom: 150px;

  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in;
  }
`

export const ProcessList = styled.ul`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 40px;
  }
`

export const ProcessItem = styled.li`
  width: 368px;
`

export const ProcessTitle = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 15px;
`

export const ProcessDescription = styled.p`
  font-family: (--type-second);
  font-size: 0.875rem;
  color: ${props => props.theme.colors.secondaryTextColor};
`
