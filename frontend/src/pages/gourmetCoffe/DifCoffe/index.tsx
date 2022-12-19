import { Title } from '../../../components/Title'
import {
  DifCoffeDescription,
  DifCoffeWrapper,
  DifDescriptionItem,
  DifItensWrapper,
  IconWrapper,
  ImageWrapper,
  TitleDifItem,
  WrapperDif
} from './style'
import CoffesImage from '../../../assets/coffeImages.svg'
import MoneyIcon from '../../../assets/money.svg'
import ClockIcon from '../../../assets/clock.svg'
import PhoneIcon from '../../../assets/phone.svg'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'

export function DifCoffe() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <DifCoffeWrapper
      ref={elementRef}
      className={isVisible ? 'visible' : undefined}
    >
      <Title Text="Diferenciais ao comprar conosco" maxWidth="100%" />
      <DifCoffeDescription>
        Ao comprar um dos nossos produtos, você terá todos os nosso mimos
        descritos abaixo, para o contato, basta olhar em final da pagina e nos
        contactar em alguma de nossas redes sociais.
      </DifCoffeDescription>

      <WrapperDif>
        <ImageWrapper>
          <img src={CoffesImage} alt="" />
        </ImageWrapper>

        <DifItensWrapper>
          <div>
            <IconWrapper>
              <img src={MoneyIcon} alt="" />
            </IconWrapper>

            <TitleDifItem>Preços justos com o produto</TitleDifItem>

            <DifDescriptionItem>
              Nada de pagar preços exagarados, aqui cobramos um preço que não
              pesa no seu bolso.
            </DifDescriptionItem>
          </div>

          <div>
            <IconWrapper>
              <img src={PhoneIcon} alt="" />
            </IconWrapper>

            <TitleDifItem>Contato a qualquer momento</TitleDifItem>

            <DifDescriptionItem>
              Desde o momento da compra ate o momento da entrega é possivel
              tirar qualquer duvida em nossas redes sociais.
            </DifDescriptionItem>
          </div>

          <div>
            <IconWrapper>
              <img src={ClockIcon} alt="" />
            </IconWrapper>

            <TitleDifItem>Tempo de entrega record</TitleDifItem>

            <DifDescriptionItem>
              Temos uma das entregas mais rapidas do Brasil, alem do frete
              gratis para todo o Brasil.
            </DifDescriptionItem>
          </div>
        </DifItensWrapper>
      </WrapperDif>
    </DifCoffeWrapper>
  )
}
