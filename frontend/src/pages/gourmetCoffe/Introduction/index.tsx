import { Title } from '../../../components/Title'
import { TitleSpan } from '../style'
import {
  BoxGourmetDescription,
  BoxGourmetTitle,
  GourmetIntroduction,
  GourmetIntroductionBox,
  GourmetIntroductionDescription,
  IntroductionWrapper
} from './style'
import GourmetImage from '../../../assets/gourmetImage.png'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'

export function Introduction() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <IntroductionWrapper
      ref={elementRef}
      className={isVisible ? 'visible' : undefined}
    >
      <GourmetIntroduction>
        <GourmetIntroductionDescription>
          <>
            <Title Text="A melhor maturação gourmet" marginBottom="20px" />
            <p>
              Graõs arabicos com uma qualidade muito boa justamente para trazer
              um gosto bom no seu consumo, sempre com qualidade e cuidado em
              todos os nossos passos.
            </p>
          </>
        </GourmetIntroductionDescription>

        <GourmetIntroductionBox>
          <BoxGourmetTitle>
            Seleção de graõs que <TitleSpan>não permite erros</TitleSpan> na
            execução
          </BoxGourmetTitle>

          <BoxGourmetDescription>
            A principal diferença entre nosso café tradicional e o gourmet é na
            hora da seleção de grãos.
          </BoxGourmetDescription>
        </GourmetIntroductionBox>
      </GourmetIntroduction>
      <img
        src={GourmetImage}
        alt=""
        style={{ marginBottom: '120px', width: '100%' }}
      />
    </IntroductionWrapper>
  )
}
