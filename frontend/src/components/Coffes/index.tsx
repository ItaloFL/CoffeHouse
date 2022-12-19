import { Title } from '../Title'
import {
  CoffeItem,
  CoffeItemWrapper,
  CoffeItemWrapperTeste,
  CoffeItens,
  CoffeTitle,
  CoffeWrapper,
  ContentWrapper,
  DescriptionText,
  DescriptionWrapper,
  ImageWrapper
} from './style'
import tradicionalCoffeImage from '../../assets/tradicional.svg'
import gourmetCoffeImage from '../../assets/gourmet.svg'
import extraforteCoffeImage from '../../assets/extraforte.svg'
import coffeTradicionalImage from '../../assets/coffeImage.png'
import coffeGourmetImage from '../../assets/coffegoumert.png'
import coffeExtraForteImage from '../../assets/coffextraforte.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useElementOnScreen } from '../../utils/useElementOnScreen'

export function Coffe() {
  const [coffe, setCoffe] = useState('tradicional')
  const [coffeActived, setCoffeActived] = useState('tradicional')
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <CoffeWrapper
      ref={elementRef}
      className={isVisible ? 'visible' : undefined}
    >
      <Title
        Text="Vamos conhecer nossos tipos de 
        café e fique por dentro de tudo!"
        maxWidth="726px"
      />
      <CoffeItemWrapper>
        <CoffeItemWrapperTeste>
          <CoffeItens>
            <CoffeItem
              className={coffeActived === 'tradicional' ? 'active' : undefined}
              onClick={() => {
                setCoffe('tradicional')
                setCoffeActived('tradicional')
              }}
            >
              <img src={tradicionalCoffeImage} alt="" />
              <p>Tradicional</p>
            </CoffeItem>
            <CoffeItem
              className={coffeActived === 'gourmet' ? 'active' : undefined}
              onClick={() => {
                setCoffe('gourmet')
                setCoffeActived('gourmet')
              }}
            >
              <img src={gourmetCoffeImage} alt="" />
              <p>Gourmet</p>
            </CoffeItem>
            <CoffeItem
              className={coffeActived === 'extraforte' ? 'active' : undefined}
              onClick={() => {
                setCoffe('extraforte')
                setCoffeActived('extraforte')
              }}
            >
              <img src={extraforteCoffeImage} alt="" />
              <p>Extra Forte</p>
            </CoffeItem>
          </CoffeItens>
          {coffe === 'tradicional' ? (
            <ContentWrapper>
              <CoffeTitle className={isVisible ? 'visible' : undefined}>
                Conheça o nosso tipo de café tradicional
              </CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText className={isVisible ? 'visible' : undefined}>
                  Aqui você verá toda nossa linha de produção e preços e imagens
                  do nosso café.
                </DescriptionText>

                <Link className="ButtonCoffe" to="/tradicional">
                  Experimente
                </Link>
              </DescriptionWrapper>

              <ImageWrapper className={isVisible ? 'visible' : undefined}>
                <img src={coffeTradicionalImage} alt="" />
              </ImageWrapper>
            </ContentWrapper>
          ) : null}

          {coffe === 'gourmet' ? (
            <ContentWrapper>
              <CoffeTitle className={isVisible ? 'visible' : undefined}>
                Venha experimentar nosso Gourmet
              </CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText className={isVisible ? 'visible' : undefined}>
                  A linha com mais cuidado na hora de escolher os grãos do seu
                  café
                </DescriptionText>

                <Link className="ButtonCoffe" to="/gourmet">
                  Dê uma chance
                </Link>
              </DescriptionWrapper>

              <ImageWrapper className={isVisible ? 'visible' : undefined}>
                <img src={coffeGourmetImage} alt="" />
              </ImageWrapper>
            </ContentWrapper>
          ) : null}

          {coffe === 'extraforte' ? (
            <ContentWrapper>
              <CoffeTitle className={isVisible ? 'visible' : undefined}>
                Olhe tambem o ExtraForte
              </CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText className={isVisible ? 'visible' : undefined}>
                  O café extraForte que faz você lembrar o gosto do que é bom
                </DescriptionText>

                <Link className="ButtonCoffe" to="/extraforte">
                  Faça o seu teste
                </Link>
              </DescriptionWrapper>

              <ImageWrapper className={isVisible ? 'visible' : undefined}>
                <img src={coffeExtraForteImage} alt="" />
              </ImageWrapper>
            </ContentWrapper>
          ) : null}
        </CoffeItemWrapperTeste>
      </CoffeItemWrapper>
    </CoffeWrapper>
  )
}
