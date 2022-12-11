import { Link } from 'react-router-dom'
import { Title } from '../../Title'
import { IntroContent, IntroDescription } from './style'
import TypesCoffeImage from '../../../assets/introductionImage.jpg'

export function Introduction() {
  return (
    <>
      <IntroContent>
        <Title
          Text="Venha conhecer nossos tipos do melhor café."
          maxWidth="516px"
        />

        <IntroDescription>
          Se cadastre e venha conosco para ver e comprar o melhor café com grãos
          selecionados do Brasil.
        </IntroDescription>

        <Link className="LinkButton" to="signup">
          Venha conosco
        </Link>

        <img src={TypesCoffeImage} alt="" />
      </IntroContent>
    </>
  )
}
