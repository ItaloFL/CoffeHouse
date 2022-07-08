import { Link } from 'react-router-dom'
import { Button } from '../../Button'
import { Title } from '../../Title'
import { IntroContent, IntroDescription } from './style'

export function Introduction() {
  return (
    <>
      <IntroContent>
        <Title
          fontSize="48px"
          Text="Venha conhecer nossos tipos do melhor café."
          maxWidth="520px"
        />

        <IntroDescription>
          Se cadastre e venha conosco para ver e comprar o melhor café com grãos
          selecionados do Brasil.
        </IntroDescription>

        <Link className='LinkButton' to="signup">Venha conosco</Link>
      </IntroContent>
    </>
  )
}
