import styled from 'styled-components'
import User from '../../assets/user.svg'
import { Container } from '../../styles/layout/Container'

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondaryColor};
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

  .signin {
    background: transparent;
    text-transform: uppercase;
    padding: 10px 24px;
    cursor: pointer;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.primaryTextColor};
    text-decoration: none;
    font-weight: bold;
  }

  .signup {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.primaryTextColor};
    text-decoration: none;
    border: 1px solid #297df9;
    background: transparent;
    text-transform: uppercase;
    padding: 10px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #297df9;
      transition: 0.6s;
    }

    &:focus {
      background-color: #297df9;
      transition: 0.6s;
    }

    &::after {
      content: '';
      background: url(${User});
      height: 12px;
      height: 12px;
    }
  }
`

export const MenuItens = styled.ul`
  display: flex;
  gap: 2.8125rem;
  padding: 0.5rem;

  li a {
    color: ${props => props.theme.colors.secondaryTextColor};
    text-decoration: none;
    cursor: pointer;
  }

  li a:hover,
  li a:focus {
    color: #ffffff;
  }

  li a::after {
    content: '';
  }
`

export const SignUpButton = styled.button`
  .signup {
  }
`

export const SignInButton = styled.button``

export const ThemeButton = styled.button`
  background: transparent;
  outline: none;
  margin-left: 60px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: rgba(244, 244, 244);
  }
`
