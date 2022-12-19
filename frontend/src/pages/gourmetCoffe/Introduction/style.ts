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

export const IntroductionWrapper = styled.div`
  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }
  @media (max-width: 968px) {
    img {
      display: none;
    }
  }
`

export const GourmetIntroduction = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    margin-top: 80px;
    flex-direction: column;
  }
`

export const GourmetIntroductionDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
`

export const GourmetIntroductionDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    p {
      margin-bottom: 40px;
    }
  }
`

export const GourmetIntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 205px;
  border: 2px solid #44d9ff;
  padding: 15px;
  align-items: center;
  border-radius: 4px;
`

export const BoxGourmetTitle = styled.p`
  font-family: var(--type-frist);
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 40px;
  max-width: 200px;

  @media (max-width: 968px) {
    max-width: 300px;
    font-size: 20px;
  }
`

export const BoxGourmetDescription = styled.p`
  font-family: var(--type-second);
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    font-size: 16px;
  }
`
