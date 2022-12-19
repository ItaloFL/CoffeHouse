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

export const DifCoffeWrapper = styled.div`
  margin-bottom: 120px;

  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }

  @media (max-width: 720px) {
    margin-bottom: 60px;
  }
`

export const DifCoffeDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
  margin: 0 auto;
  margin-bottom: 60px;
`

export const WrapperDif = styled.div`
  display: flex;
  gap: 150px;

  @media (max-width: 968px) {
    gap: 0;
  }
`

export const ImageWrapper = styled.div`
  @media (max-width: 968px) {
    img {
      display: none;
    }
  }
`

export const IconWrapper = styled.span`
  border: 1px solid #a6aaad;
  border-radius: 4px;
  padding: 10px 7px 4px 7px;
`

export const TitleDifItem = styled.p`
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 20px;
`

export const DifDescriptionItem = styled.p`
  font-family: var(--type-second);
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const DifItensWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`
