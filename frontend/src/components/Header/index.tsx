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
              <li>Home</li>
              <li>Cafés</li>
              <li>Contato</li>
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
