import { Title } from '../Title'
import { CoffeIcon, CoffeItem, CoffeItemWrapper, CoffeItens, CoffeWrapper } from './style'
import tradicionalCoffeImage from '../../assets/tradicional.svg'
import gourmetCoffeImage from '../../assets/gourmet.svg'
import extraforteCoffeImage from '../../assets/extraforte.svg'

const typesCoffe = [
  {
    name: 'Tradicional',
    coffeIcon: tradicionalCoffeImage,
    subtitle: 'Conheça o nosso tipo de café tradicional',
    description:
      'Aqui você verá toda nossa linha de produção e preços e imagens do nosso café.'
  },
  {
    name: 'Gourmet',
    coffeIcon: gourmetCoffeImage,
    subtitle: 'Conheça o nosso tipo de café gourmet',
    description:
      'Aqui você verá toda nossa linha de produção e preços e imagens do nosso café.'
  },
  {
    name: 'Extra Forte',
    coffeIcon: extraforteCoffeImage,
    subtitle: 'Conheça o nosso tipo de café extraforte',
    description:
      'Aqui você verá toda nossa linha de produção e preços e imagens do nosso café.'
  }
]

export function Coffe() {
  return (
    <CoffeWrapper>
      <Title
        Text="Vamos conhecer nossos tipos de 
        café e fique por dentro de tudo!"
        maxWidth='726px'
      />
      <CoffeItemWrapper>
        <CoffeItens>
          {typesCoffe.map(coffe => (
            <CoffeItem key={coffe.name}>
              <img src={coffe.coffeIcon} alt="" />
              <p>{coffe.name}</p>
            </CoffeItem>
          ))}
        </CoffeItens>
      </CoffeItemWrapper>
    </CoffeWrapper>
  )
}
