import {
  HeaderButton,
  HeaderContent,
  HeaderWrapper,
  MenuItens,
  MenuWrapper,
  ThemeButton
} from './style'
import LogoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Sun } from 'phosphor-react'

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <a href="">
              <img src={LogoImage} alt="" />
            </a>
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
              Entrar
            </Link>

            <Link className="signup" to="signup">
              Criar Conta
            </Link>
          </HeaderButton>

          <Sun size={30} color="#0d0d0d" enableBackground={40} />
        </HeaderContent>
      </HeaderWrapper>
    </>
  )
}
