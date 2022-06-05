import LogoImage from '../../assets/logo.svg'
import { HeaderButton, HeaderWrapper, MenuItens, MenuWrapper, SignInButton, SignUpButton } from './style'

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <img src={LogoImage} alt="" />

        <MenuWrapper>
          <MenuItens>
            <li>Home</li>
            <li>Planos</li>
            <li>Livros</li>
          </MenuItens>
        </MenuWrapper>

        <HeaderButton>
          <SignInButton>Entrar</SignInButton>

          <SignUpButton>Criar Conta</SignUpButton>
        </HeaderButton>
      </HeaderWrapper>
    </>
  )
}
