import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const SignInWrapper = styled(Container)`
  display: grid;
  max-width: 777px;
  height: 100vh;
  grid-template-columns: 378px 1fr;
  align-items: center;
  justify-content: center;
`

export const SignInText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
`

export const FormWrapper = styled.form`
  height: 400px;
  width: 378px;
  background-color: #1c1c1c;
  padding: 60px 50px;
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
  color: #FFFFFF;

  .link {
    text-decoration: none;
    color: #297DF9;
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

