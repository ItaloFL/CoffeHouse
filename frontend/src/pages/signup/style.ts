import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'
import ArrowIcon from '../../assets/left-arrow.svg'

export const FadeLeftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const SignUpWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 378px 1fr;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-self: center;
  animation: ${FadeLeftAnimation} 0.6s forwards ease;
`

export const FormSignUp = styled.div`
  background-color: ${props => props.theme.colors.formBackgroudColor};
  height: 523px;
  padding: 40px 50px;
  border-radius: 4px;
`

export const TextSignUp = styled.div``

export const TextCoffe = styled.p`
  font-family: var(--type-second);
  font-weight: medium;
  font-size: 1rem;
  color: ${props => props.theme.colors.thirdColor};
  margin-left: 210px;
  margin-bottom: 40px;
  max-width: 197px;
`

export const SignUpLink = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.primaryTextColor};
  margin-left: 210px;
  display: flex;
  align-items: center;
  gap: 5px;

  ::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 7px;
    background: url(${ArrowIcon}) no-repeat center center;
  }

  .link {
    text-decoration: none;
    color: #297df9;
  }
`

export const InputItem = styled.div`
  display: flex;
`

export const InputDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  .icon {
    position: absolute;
    left: 10px;
  }
`

export const SignUpInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const PasswordDiv = styled.div`
  display: flex;
  align-items: center;

  .button-eye {
    width: 19px;
    height: 19px;
    outline: none;
    margin-left: -2.5rem;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`
