import styled from 'styled-components'
import User from '../../assets/user.svg'
import { Container } from '../../styles/layout/Container'

export const HeaderWrapper = styled.div`
  background-color: #27272a;
`

export const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  color: #a6aaad;
  font-family: 'Roboto';
`

export const MenuWrapper = styled(Container)`
  display: flex;
  align-items: center;
`

export const HeaderButton = styled.nav`
  display: flex;
  gap: 4.375rem;
`

export const MenuItens = styled.ul`
  display: flex;
  gap: 2.8125rem;
  padding: 0.5rem;

  li a {
    color: #a6aaad;
    text-decoration: none;
    cursor: pointer;
  }

  li a:hover {
    color: #ffffff;
  }

  li a::after {
    content: '';
  }
`

export const SignInButton = styled.button`
  font-size: 0.75rem;
  color: #ffffff;
  background: transparent;
  text-transform: uppercase;
  padding: 10px 24px;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    background: url(${User}) no-repeat center;
    height: 12px;
    height: 12px;
  }
`

export const SignUpButton = styled.button`
  font-size: 0.75rem;
  color: #ffffff;
  border: 1px solid #297df9;
  background: transparent;
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #297df9;
    transition: 0.6s;
  }

  &::after {
    content: '';
    background: url(${User});
    height: 12px;
    height: 12px;
  }
`
