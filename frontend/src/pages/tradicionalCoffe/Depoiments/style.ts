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

export const Depositions = styled.div`
  &.visible {
    animation: ${FadeInAnimation} 0.8s ease-in-out;
  }
  margin-bottom: 90px;
`

export const DepoimentoWrapper = styled.div`
  display: flex;
  gap: 70px;

  @media (max-width: 1230px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`

export const DepoimentoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 365px;
  height: 172px;
  background-color: ${props => props.theme.colors.depoimentBackground};
  color: ${props => props.theme.colors.primaryTextColor};
  padding: 30px;
  font-size: 14px;
  border-radius: 4px;

  @media (max-width: 1200px) {
    height: 192px;
  }

  @media (max-width: 870px) {
    font-size: 16px;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const DepoimentoAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`
