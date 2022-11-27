import { Clock, Fire } from 'phosphor-react'
import { TitleCoffe } from '../tradicionalCoffe/style'
import {
  DiferentialItemText,
  DiferentialItemTitle,
  DiferentialWrapper,
  ExtraForteCoffeWrapper,
  IntroductionContent,
  IntroductionItemList,
  IntroductionList,
  IntroductionWrapper,
  ListDifferentialWrapper
} from './style'
import { Title } from '../../components/Title'
import ExtraForteImgCoffe from '../../assets/extraForte.png'
import CalendaryIcon from '../../assets/calendary.svg'
import EntregaIcon from '../../assets/entrega.svg'
import LocalIcon from '../../assets/local.svg'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

type Props = {
  toggleTheme(): void
}

export function ExtraForteCoffe({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ExtraForteCoffeWrapper>
        <IntroductionWrapper>
          <IntroductionContent>
            <TitleCoffe>A torrefação perfeita e unica no Brasil.</TitleCoffe>
            <IntroductionList>
              <IntroductionItemList>
                <Fire size={35} color="#44D9FF" />
                <p>Torrefação segura e fiscalizada</p>
              </IntroductionItemList>
              <IntroductionItemList>
                <Clock size={35} color="#44D9FF" />
                <p>Ate 6 horas de trabalho</p>
              </IntroductionItemList>
            </IntroductionList>
          </IntroductionContent>
          <img src={ExtraForteImgCoffe} alt="" />
        </IntroductionWrapper>

        <DiferentialWrapper>
          <Title
            Text="O que nos diferencia
            dos demais cafés?"
            fontSize="36px"
            margin="0 auto"
            marginBottom="120px"
          />

          <ListDifferentialWrapper>
            <div>
              <img src={CalendaryIcon} alt="" />

              <DiferentialItemTitle>10 Anos de mercado</DiferentialItemTitle>

              <DiferentialItemText>
                A anos no mercado querendo o melhor do consumidor.
              </DiferentialItemText>
            </div>

            <div>
              <img src={LocalIcon} alt="" />

              <DiferentialItemTitle>Local organizado</DiferentialItemTitle>

              <DiferentialItemText>
                Seriedade na contrução e mantimento do local.
              </DiferentialItemText>
            </div>

            <div>
              <img src={EntregaIcon} alt="" />

              <DiferentialItemTitle>Entregas rapidas</DiferentialItemTitle>

              <DiferentialItemText>
                Entrega para todo o Brasil com a maior velocidade.
              </DiferentialItemText>
            </div>

            <div>
              <img src={CalendaryIcon} alt="" />

              <DiferentialItemTitle>10 Anos de mercado</DiferentialItemTitle>

              <DiferentialItemText>
                A anos no mercado querendo o melhor do consumidor.
              </DiferentialItemText>
            </div>

            <div>
              <img src={LocalIcon} alt="" />

              <DiferentialItemTitle>Local organizado</DiferentialItemTitle>

              <DiferentialItemText>
                Seriedade na contrução e mantimento do local.
              </DiferentialItemText>
            </div>

            <div>
              <img src={EntregaIcon} alt="" />

              <DiferentialItemTitle>Entregas rapidas</DiferentialItemTitle>

              <DiferentialItemText>
                Entrega para todo o Brasil com a maior velocidade.
              </DiferentialItemText>
            </div>
          </ListDifferentialWrapper>
        </DiferentialWrapper>

        <TitleCoffe>Os tipos de grãos do nosso café</TitleCoffe>
        <ul>
          <li>
            <p>Grãos Arabicos</p>
            <p>TextTest</p>
          </li>

          <li>
            <p>Grãos Arabicos</p>
            <p>TextTest</p>
          </li>

          <li>
            <p>Grãos Arabicos</p>
            <p>TextTest</p>
          </li>
        </ul>
      </ExtraForteCoffeWrapper>
      <Footer />
    </>
  )
}
