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

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 170px;
  margin-top: 170px;
  margin-bottom: 350px;

  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }

  @media (max-width: 1200px) {
    gap: 100px;
  }

  @media (max-width: 968px) {
    align-items: center;
    justify-content: center;
    margin-top: 110px;
    margin-bottom: 110px;

    img {
      width: 400px;
    }
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`

export const TitleCoffe = styled.h1`
  font-family: var(--type-frist);
  font-size: 36px;
  font-weight: bold;
  max-width: 305px;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 40px;
  

  @media (max-width: 1200px) {
    font-size: 24px;
    margin-bottom: 20pxf;
  }
`

export const AboutDescription = styled.div`
  p {
    font-family: var(--type-second);
    font-size: 14px;
    color: ${props => props.theme.colors.secondaryTextColor};

    &.primary-description {
      margin-bottom: 20px;
    }
  }
`

export const ButtonDescription = styled.button`
  font-family: var(--type-second);
  margin-top: 25px;
  width: 155px;
  height: 46px;
  background-color: ${props => props.theme.colors.detailTitleColor};
  color: #fff;
  text-transform: uppercase;
  padding: 15px 12px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
`
