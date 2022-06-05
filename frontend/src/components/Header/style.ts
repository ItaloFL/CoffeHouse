import styled from 'styled-components'
import ArrowDown from '../../assets/down-arrow.svg'
import User from '../../assets/user.svg'

export const HeaderWrapper = styled.div`
  background-color: #27272a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  color: #a6aaad;
  font-family: 'Roboto';
`

export const MenuWrapper = styled.div`
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
  cursor: pointer;

  li:hover {
    color: #ffffff;
  }

  li::after {
    content: '';
    
  }
`

export const SignInButton = styled.button`
  font-size: 0.75rem;
  color: #FFFFFF;
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
  color: #FFFFFF;
  border: 1px solid #5B51FF;
  background: transparent;
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5B51FF;
    transition: .6s;
  }

  &::after {
    content: '';
    background: url(${User});
    height: 12px;
    height: 12px;
  }
`
