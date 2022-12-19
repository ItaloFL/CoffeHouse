import { useEffect, useState } from 'react'
import { TextTitle } from '../../../components/TextTitle'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'
import { TitleCoffe } from '../AboutCoffe/style'
import {
  DepoimentoAuthor,
  DepoimentoItem,
  DepoimentoWrapper,
  Depositions
} from './style'
import UserImageOne from '../../../assets/Captura de tela 2021-06-16 235730.png'
import UserImageTwo from '../../../assets/50de91cc566f02e4a3b009f0054e6431.jpg'
import UserImageThree from '../../../assets/b8c06e79-hykes-docker.jpg'

type Depoiment = {
  id: string
  user: string
  depoimento: string
  created_at: string
  name: {
    name: string
    image: string
  }
}

const depoiments = [
  {
    depoimentId: '1234',
    depoimento:
      'Confesso que ate uns meses atrás, eu não era um grande fã de café, mas depois de experimentar o café da CoffeHouse, confesso que cada vez fui tomando mas e hoje em dia todo um pouco diariamente.',
    name: 'Jose Carlos',
    image: UserImageOne
  },
  {
    depoimentId: '12345',
    depoimento:
      'Sempre fui um grande fâ de café, tenho uma solida experiência o mesmo, e posso dizer, que os grãos são extremamente selecionados e todos os processos, são com um cuidado impressionamente, magnifico.',
    name: 'Marlos Lima',
    image: UserImageTwo
  },
  {
    depoimentId: '123456',
    depoimento:
      'O café faz meu dia render mais, diariamente tomo uma dose de café, e esse é o café com um melhor gosto dentre os que já tomei, e isso é algo muito legal, não ser apenas mais um café.',
    name: 'Italo Ferreira',
    image: UserImageThree
  }
]

export function Depoiments() {
  const [elementRef, isVisible] = useElementOnScreen()

  return (
    <Depositions ref={elementRef} className={isVisible ? 'visible' : undefined}>
      <TextTitle text="depoimentos" />
      <TitleCoffe className={isVisible ? 'visible' : undefined}>
        O que dizem sobre o nosso café.
      </TitleCoffe>
      <DepoimentoWrapper>
        {depoiments.map(depoimento => (
          <DepoimentoItem
            key={depoimento.depoimentId}
            className={isVisible ? 'visible' : undefined}
          >
            <p>"{depoimento.depoimento}"</p>
            <DepoimentoAuthor>
              <img src={depoimento.image} alt="" />
              <p>{depoimento.name}</p>
            </DepoimentoAuthor>
          </DepoimentoItem>
        ))}
      </DepoimentoWrapper>
    </Depositions>
  )
}
