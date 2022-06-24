import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'
import ArrowIcon from '../../assets/left-arrow.svg'

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
  margin-left: 210px;
  margin-bottom: 40px;
  max-width: 197px;
`

export const SignUpLink = styled.p`
  font-family: var(--type-second);
  color: #FFFFFF;
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
    color: #297DF9;
  }
`
