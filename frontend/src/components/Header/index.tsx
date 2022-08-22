import {
  ButtonEnter,
  HeaderButton,
  HeaderContent,
  HeaderWrapper,
  MenuItens,
  MenuWrapper,
  ThemeButton
} from './style'
import LogoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { SunDim, User } from 'phosphor-react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

type Props = {
  toggleTheme(): void
}

export function Header({ toggleTheme }: Props) {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <img src={LogoImage} alt="" />
          </Link>

          <MenuWrapper>
            <MenuItens>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Cafés</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </MenuItens>
          </MenuWrapper>

          <HeaderButton>
            <Link className="signin" to="signin">
              <ButtonEnter>
                <User size={14} color="#297DF9" weight="fill" />
                Entrar
              </ButtonEnter>
            </Link>

            <Link className="signup" to="signup">
              Criar Conta
            </Link>

            <ThemeButton onClick={toggleTheme}>
              <SunDim
                size={24}
                color="#297DF9"
                weight="fill"
                strokeLinecap="square"
              />
            </ThemeButton>
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
    </>
  )
}
