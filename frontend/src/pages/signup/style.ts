import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const SignUpWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 378px 1fr;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-self: center;
`

export const FormSignUp = styled.div`
  background-color: #1c1c1c;
  height: 523px;
  padding: 40px 50px;
`

export const TextSignUp = styled.div``

export const TextCoffe = styled.p`
  font-family: var(--type-second);
  font-weight: medium;
  font-size: 1rem;
  color: #A6AAAD;
  margin-left: 102px;
  max-width: 197px;
`

export const SignUpLink = styled.p``
