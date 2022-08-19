import { Title } from '../Title'
import { CoffeWrapper } from './style'
import tradicionalCoffeImage from '../../assets/tradicional.svg'
import gourmetCoffeImage from '../../assets/gourmet.svg'
import extraforteCoffeImage from '../../assets/extraforte.svg'

const typesCoffe = 
[
  {
    name: "Tradicional",
    coffeIcon: tradicionalCoffeImage,
    subtitle: "Conheça o nosso tipo de café tradicional",
    description: "Aqui você verá toda nossa linha de produção e preços e imagens do nosso café."
  },
  {
    name: "Gourmet",
    coffeIcon: gourmetCoffeImage,
    subtitle: "Conheça o nosso tipo de café gourmet",
    description: "Aqui você verá toda nossa linha de produção e preços e imagens do nosso café."
  },
  {
    name: "Extra Forte",
    coffeIcon: extraforteCoffeImage,
    subtitle: "Conheça o nosso tipo de café extraforte",
    description: "Aqui você verá toda nossa linha de produção e preços e imagens do nosso café."
  }
]

export function Coffe() {
  return (
    <CoffeWrapper>
      <Title
        Text="Vamos conhecer nossos tipos de 
        café e fique por dentro de tudo!"
        fontSize="48px"
        maxWidth="726px"
      />
    </CoffeWrapper>
  )
}
