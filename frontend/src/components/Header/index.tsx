import {
  HeaderButton,
  HeaderContent,
  HeaderWrapper,
  MenuItens,
  MenuWrapper,
  SignInButton,
  SignUpButton
} from './style'
import LogoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

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
            <Link className="signup" to="signup">
              Entrar
            </Link>

            <Link className="signin" to="signin">
              Criar Conta
            </Link>
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
    </>
  )
}
