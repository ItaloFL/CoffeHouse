import styled, { keyframes } from 'styled-components'

export const IntroductionAnimationFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
export const IntroContent = styled.div`
  display: block;
  margin: 150px auto;
  text-align: center;

  img {
    margin-top: 90px;
  }

  .LinkButton {
    display: block;
    width: 290px;
    height: 55px;
    color: ${props => props.theme.colors.primaryTextColor};
    background: ${props => props.theme.colors.buttonBackgroudColor};
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 4px;
    text-decoration: none;
    padding: 17px 79px;
    margin: 0 auto;
    transition: background 200ms;
    animation: ${IntroductionAnimationFadeIn} 0.7s ease-in-out;

    :hover,
    :focus {
      background: ${props => props.theme.colors.buttonBackgroudColorHover};
    }
  }
`

export const IntroDescription = styled.p`
  font-family: var(--type-second);
  font-size: 1.125rem;
  color: ${props => props.theme.colors.secondaryTextColor};
  max-width: 450px;
  margin: 40px auto;
  line-height: 1.2;
  animation: ${IntroductionAnimationFadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 400px;
  }
`
export const ImageWrapper = styled.div`
  animation: ${IntroductionAnimationFadeIn} 0.8s ease-in-out;

  @media (max-width: 900px) {
    img {
      width: 600px;
    }
  }

  @media (max-width: 650px) {
    img {
      width: 90%;
    }
  }
`
