import LogoImage from '../../assets/logo.svg'
import {
  HeaderButton,
  HeaderContent,
  HeaderWrapper,
  MenuItens,
  MenuWrapper,
  SignInButton,
  SignUpButton
} from './style'

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <img src={LogoImage} alt="" />

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
            <SignInButton>Entrar</SignInButton>

            <SignUpButton>Criar Conta</SignUpButton>
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
    </>
  )
}
