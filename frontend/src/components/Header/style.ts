import styled from 'styled-components'
import User from '../../assets/user.svg'
import { Container } from '../../styles/layout/Container'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid
    ${props => props.theme.colors.headerBorderBottomColor};
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


    @media(max-width: 900px) {
      display: none;
    }
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

    &:hover,
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

    @media(max-width: 900px) {
      display: none;
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
  gap: 90px;
  height: 200px;

  &:li {
    text-decoration: none;
  }
`

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  margin-top: 30px;
  border-top: 1px solid ${props => props.theme.colors.navigationMenuBorder};
  border-bottom: 1px solid ${props => props.theme.colors.navigationMenuBorder};
  background-color: ${props => props.theme.colors.navigationMenuBackground};
  width: 95vw;
`

export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: absolute;
  top: 0;
  left: 0;
  height: var(--radix-navigation-menu-viewport-height);
  margin-top: 50px;
`

export const NavigationMenuItem = styled(NavigationMenu.Item)`
  padding: 28px 0px 28px;

  &:hover {
    color: white;
    border-bottom: 2px solid #297df9;
    border-radius: 2px;
    transition: all 0.2s ease;
  }
`

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  all: unset;
  color: #a6aaad;
`
export const NavigationMenuLink = styled(NavigationMenu.Link)`
  text-decoration: none;
  color: #a6aaad;
  width: 0;
`

export const MenuButtonIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const ItemListWrapper = styled.div`
  display: flex;
  gap: 10px;
  text-decoration: none;
  padding: 15px;
  border-radius: 4px;
`

export const ItemListTitle = styled.p`
  font-family: var(--type-frist);
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
  text-decoration: none;
  margin-bottom: 3px;
`

export const ItemListText = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.footerListTitleColor};
`

export const LinkStyled = styled(Link)`
  all: unset;
  cursor: pointer;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hoverNavigationMenuItem};
    border: 1px solid ${props => props.theme.colors.borderColor};
  }
`
