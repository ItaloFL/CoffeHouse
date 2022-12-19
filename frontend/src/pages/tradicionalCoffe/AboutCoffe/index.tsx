import { TextTitle } from '../../../components/TextTitle'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'
import { AboutDescription, AboutWrapper, ButtonDescription, TitleCoffe } from './style'
import ImageCoffe from '../../../assets/imagem-coffe.svg'

export function AboutCoffe() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <AboutWrapper ref={elementRef} className={isVisible ? 'visible' : undefined}>
      <div>
        <TextTitle text="Porque nosso café?" />
        <TitleCoffe>Preparo cuidadoso e preparado</TitleCoffe>
        <AboutDescription>
          <p className="primary-description">
            Em toda a linha de produção dos nossos cafés, existe uma linha de
            produção que é extremamente necessaria para manter a qualidade de
            nosso café.
          </p>
          <p>
            E tudo isso juntamente com uma grande linha de tecnologias em nossas
            maquinas de produção, pronta para fazer o melhor e mais gostoso café
            moido que se encontra atualmente.
          </p>
        </AboutDescription>

        <ButtonDescription>Estou interressado</ButtonDescription>
      </div>
      <img src={ImageCoffe} alt="" />
    </AboutWrapper>
  )
}
