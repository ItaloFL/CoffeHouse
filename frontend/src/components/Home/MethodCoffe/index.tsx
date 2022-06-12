import { Title } from '../../Title'
import {
  ListCoffeTitle,
  ListDescription,
  ListIcon,
  MethodItem,
  MethodList,
  MethodWrapper
} from './style'
import selecionadosIcon from '../../../assets/selecionados.svg'
import graosIcon from '../../../assets/grãos.svg'
import torrefacaoIcon from '../../../assets/torrefacao.svg'

export const typesCoffe = [
  {
    icon: selecionadosIcon,
    title: 'Grãos selecionados',
    description:
      'Nossos grãos são selecionados desde o seu plantio, para obtermos o melhor do café, então desde a plantação com terra 100% orgânica.'
  },
  {
    icon: graosIcon,
    title: 'Boa preservação dos grãos',
    description:
      'Uma boa preservação dos grãos e fundamental para uma otima experiencia com café, e em nossa empresa é algo que levamos a serio.'
  },
  {
    icon: torrefacaoIcon,
    title: 'Torrefação Cuidadosa',
    description:
      'Um passo fundamental para um delicioso café, é o processo de Torrefação, e em nossa empresa a torrefação de café é feita com muito cuidado.'
  }
]

export function MethodCoffe() {
  return (
    <>
      <MethodWrapper>
        <Title
          fontSize="40px"
          Text="Os métodos que usamos para a qualidade de nossos cafés"
          maxWidth="547px"
        />
        <MethodList>
          {typesCoffe.map(type => (
            <MethodItem>
              <ListIcon>
                <img src={type.icon} />
              </ListIcon>
              <ListCoffeTitle>{type.title}</ListCoffeTitle>
              <ListDescription>{type.description}</ListDescription>
            </MethodItem>
          ))}
        </MethodList>
      </MethodWrapper>
    </>
  )
}
