import CoffeLogo from '../../assets/logo.svg'
import FacebookLogo from '../../assets/facebook.svg'
import InstagramLogo from '../../assets/instagram.svg'
import YoutubeLogo from '../../assets/youtube.svg'
import {
  FooterContent,
  FooterWrapper,
  ListItem,
  ListTitle,
  LogoText
} from './style'

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <div>
          <img src={CoffeLogo} alt="" />
          <LogoText>Todos os diretos reservados</LogoText>
        </div>

        <ul>
          <ListTitle>Cafés</ListTitle>
          <ListItem>Tradicional</ListItem>
          <ListItem>Gourmet</ListItem>
          <ListItem>Extra Forte</ListItem>
        </ul>

        <ul>
          <ListTitle>CoffeHouse</ListTitle>
          <ListItem>Sobre nós</ListItem>
          <ListItem>Tipos de café</ListItem>
        </ul>

        <ul>
          <ListTitle>Contato</ListTitle>
          <ListItem>
            <a href="https://youtube.com" target="_blank">
              <img src={YoutubeLogo} alt="" />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.instagram.com/italo.ferreira.5220/"
              target="_blank"
            >
              <img src={InstagramLogo} alt="" />
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://www.facebook.com/italo.ferreira.5220"
              target="_blank"
            >
              <img src={FacebookLogo} alt="" />
            </a>
          </ListItem>
        </ul>
      </FooterContent>
    </FooterWrapper>
  )
}
