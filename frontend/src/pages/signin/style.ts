import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const FadeRightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const SignInWrapper = styled(Container)`
  display: grid;
  max-width: 777px;
  height: 100vh;
  grid-template-columns: 378px 1fr;
  align-items: center;
  justify-content: center;
  animation: ${FadeRightAnimation} 0.6s forwards ease;
`

export const SignInText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const FormWrapper = styled.form`
  height: 400px;
  width: 378px;
  background-color: ${props => props.theme.colors.formBackgroudColor};
  padding: 60px 50px;
  border-radius: 4px;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const SignUpText = styled.p`
  font-family: var(--type-second);
  display: flex;
  gap: 7px;
  color: #ffffff;

  .link {
    text-decoration: none;
    color: #297df9;
  }
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
