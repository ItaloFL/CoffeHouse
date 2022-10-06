import styled, { keyframes } from 'styled-components'
import User from '../../assets/user.svg'
import { Container } from '../../styles/layout/Container'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondaryColor};
`

export const HeaderContent = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  font-family: 'Roboto';
`

export const MenuWrapper = styled(Container)`
  display: flex;
  align-items: center;
`

export const HeaderButton = styled.nav`
  display: flex;
  gap: 4.375rem;
  align-items: center;

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

export const ButtonEnter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ThemeButton = styled.button`
  background: transparent;
  border: 1px solid #297df9;
  padding: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.themeHoverColor};
  }
`

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  align-items: center;
  gap: 3.75rem;
`

export const ContentListItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 200px;
`

const borderLink = keyframes({
  from: { border: 0 },
  to: {
    border: 100
  }
})

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  margin-top: 30px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  background-color: ${props => props.theme.colors.secondaryColor};
  width: 100vw;
`

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--radix-navigation-menu-viewport-height);
  margin-top: 50px;
`

export const NavigationMenuItem = styled(NavigationMenu.Item)``

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  color: #a6aaad;

  &:hover {
    color: white;
    border-bottom: 1px solid blue;
    animation: borderLink 2s;
  }
`
export const NavigationMenuLink = styled(NavigationMenu.Link)`
  text-decoration: none;
  color: #a6aaad;
  width: 0;

  &:hover {
    color: white;
    border-bottom: 1px solid blue;
    transition: width .3s;
  } 
`
