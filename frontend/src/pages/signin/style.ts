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
  display: block;
  height: 400;
  width: 378;
  background-color: #1c1c1c;
`

export const SignUpText = styled.p``
