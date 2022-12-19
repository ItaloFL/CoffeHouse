import { TextTitle } from '../../../components/TextTitle'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'
import { TitleCoffe } from '../AboutCoffe/style'
import {
  ProcessDescription,
  ProcessItem,
  ProcessList,
  ProcessTitle,
  ProcessWrapper
} from './style'

export function Process() {
  const [elementRef, isVisible] = useElementOnScreen()
  return (
    <ProcessWrapper
      ref={elementRef}
      className={isVisible ? 'visible' : undefined}
    >
      <TextTitle text="nossos processos" />
      <TitleCoffe>Veja alguns dos nossos processos</TitleCoffe>
      <ProcessList>
        <ProcessItem>
          <ProcessTitle>Solo cuidado e fresco</ProcessTitle>
          <ProcessDescription>
            Antes mesmo de falarmos sobre processos no café, é de suma
            importância que o solo em que o grão foi plantado e nosso cuidado
            nesse quesito é grande.
          </ProcessDescription>
        </ProcessItem>

        <ProcessItem>
          <ProcessTitle>Processos cuidadosos</ProcessTitle>
          <ProcessDescription>
            A lavagem do nosso café é um dos processos mais cuidadosos do nosso
            café tendo em vista tirar qualquer tipo de pureza.
          </ProcessDescription>
        </ProcessItem>

        <ProcessItem>
          <ProcessTitle>Processos cuidadosos</ProcessTitle>
          <ProcessDescription>
            A lavagem do nosso café é um dos processos mais cuidadosos do nosso
            café tendo em vista tirar qualquer tipo de pureza.
          </ProcessDescription>
        </ProcessItem>
      </ProcessList>
    </ProcessWrapper>
  )
}
