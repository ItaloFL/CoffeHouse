import { useElementOnScreen } from '../../../utils/useElementOnScreen'
import { ButtonDescription } from '../../tradicionalCoffe/AboutCoffe/style'
import { TitleSpan } from '../style'
import { TextWarning, WarningTitle, WarningWrapper } from './style'

export function Warning() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <WarningWrapper
      ref={elementRef}
      className={isVisible ? 'visible' : undefined}
    >
      <WarningTitle>
        Garanta já o seu, não perca essa <TitleSpan>oportunidade</TitleSpan>
        <ButtonDescription>Estou interressado</ButtonDescription>
      </WarningTitle>

      <TextWarning>
        <p>
          Como o processo de escolha de graõs em nosso café Gourmet, não é
          possivel a sua fabricação em grande escala, por isso, diferente dos
          outros, normalmente ele não está disponivel a todo instante.
        </p>

        <p>
          Mas não fique triste, sempre que disponivel, é evidente, por isso,
          sempre que quiser, garanta logo o seu.
        </p>
      </TextWarning>
    </WarningWrapper>
  )
}
