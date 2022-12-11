import { Title } from '../Title'
import {
  ButtonCoffe,
  CoffeIcon,
  CoffeItem,
  CoffeItemWrapper,
  CoffeItemWrapperTeste,
  CoffeItens,
  CoffeTitle,
  CoffeWrapper,
  ContentWrapper,
  DescriptionText,
  DescriptionWrapper
} from './style'
import tradicionalCoffeImage from '../../assets/tradicional.svg'
import gourmetCoffeImage from '../../assets/gourmet.svg'
import extraforteCoffeImage from '../../assets/extraforte.svg'
import coffeTradicionalImage from '../../assets/coffeImage.png'
import coffeGourmetImage from '../../assets/coffegoumert.png'
import coffeExtraForteImage from '../../assets/coffextraforte.png'
import { useState } from 'react'

export function Coffe() {
  const [coffe, setCoffe] = useState('tradicional')
  const [coffeActived, setCoffeActived] = useState('tradicional')

  return (
    <CoffeWrapper>
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
              <CoffeTitle>Conheça o nosso tipo de café tradicional</CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText>
                  Aqui você verá toda nossa linha de produção e preços e imagens
                  do nosso café.
                </DescriptionText>

                <ButtonCoffe>Experimente</ButtonCoffe>
              </DescriptionWrapper>

              <img src={coffeTradicionalImage} alt="" />
            </ContentWrapper>
          ) : null}

          {coffe === 'gourmet' ? (
            <ContentWrapper>
              <CoffeTitle>Venha experimentar nosso Gourmet</CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText>
                  A linha com mais cuidado na hora de escolher os grãos do seu
                  café
                </DescriptionText>

                <ButtonCoffe>Experimente aqui</ButtonCoffe>
              </DescriptionWrapper>

              <img src={coffeGourmetImage} alt="" />
            </ContentWrapper>
          ) : null}

          {coffe === 'extraforte' ? (
            <ContentWrapper>
              <CoffeTitle>Olhe tambem o ExtraForte</CoffeTitle>
              <DescriptionWrapper>
                <DescriptionText>
                  O café extraForte que faz você lembrar o gosto do que é bom
                </DescriptionText>

                <ButtonCoffe>Faça o seu teste</ButtonCoffe>
              </DescriptionWrapper>

              <img src={coffeExtraForteImage} alt="" />
            </ContentWrapper>
          ) : null}
        </CoffeItemWrapperTeste>
      </CoffeItemWrapper>
    </CoffeWrapper>
  )
}
