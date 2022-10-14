import { Plus } from 'phosphor-react'
import { TextTitle } from '../../components/TextTitle'
import ImageCoffe from '../../assets/imagem-coffe.svg'
import {
  AboutCoffe,
  AboutDescription,
  AccordionRoot,
  ButtonDescription,
  DepoimentoAuthor,
  DepoimentoItem,
  DepoimentoWrapper,
  Depositions,
  Detail,
  FrequentesTitle,
  ProcessDescription,
  ProcessItem,
  ProcessList,
  ProcessTitle,
  StatsDescription,
  StatsItem,
  StatsList,
  StatsTitle,
  StyledContent,
  TestDetail,
  TitleCoffe,
  TitleWrapper,
  TradicionalCoffeWrapper
} from './style'

import * as Accordion from '@radix-ui/react-accordion'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useEffect, useState } from 'react'

type Props = {
  toggleTheme(): void
}

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

export function TradicionalCoffe({ toggleTheme }: Props) {
  const [depoiments, setDepoiments] = useState<Depoiment[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/depoiments')
      .then(response => response.json())
      .then(data => setDepoiments(data))
  }, [])

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <TradicionalCoffeWrapper>
        <AboutCoffe>
          <div>
            <TextTitle text="Porque nosso café?" />
            <TitleCoffe>Preparo cuidadoso e preparado</TitleCoffe>
            <AboutDescription>
              <p className="primary-description">
                Em toda a linha de produção dos nossos cafés, existe uma linha
                de produção que é extremamente necessaria para manter a
                qualidade de nosso café.
              </p>
              <p>
                E tudo isso juntamente com uma grande linha de tecnologias em
                nossas maquinas de produção, pronta para fazer o melhor e mais
                gostoso café moido que se encontra atualmente.
              </p>
            </AboutDescription>

            <ButtonDescription>Estou interressado</ButtonDescription>
          </div>
          <img src={ImageCoffe} alt="" />
        </AboutCoffe>

        <Depositions>
          <TextTitle text="depoimentos" />
          <TitleCoffe>O que dizem sobre o nosso café.</TitleCoffe>
          <DepoimentoWrapper>
            {depoiments.map(depoimento => (
              <DepoimentoItem key={depoimento.id}>
                <p>"{depoimento.depoimento}"</p>
                <DepoimentoAuthor>
                  <img src={depoimento.name.image} alt="" />
                  <p>{depoimento.name.name}</p>
                </DepoimentoAuthor>
              </DepoimentoItem>
            ))}
          </DepoimentoWrapper>
        </Depositions>

        <Detail />

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
              A lavagem do nosso café é um dos processos mais cuidadosos do
              nosso café tendo em vista tirar qualquer tipo de pureza.
            </ProcessDescription>
          </ProcessItem>

          <ProcessItem>
            <ProcessTitle>Processos cuidadosos</ProcessTitle>
            <ProcessDescription>
              A lavagem do nosso café é um dos processos mais cuidadosos do
              nosso café tendo em vista tirar qualquer tipo de pureza.
            </ProcessDescription>
          </ProcessItem>
        </ProcessList>

        <StatsList>
          <StatsItem>
            <StatsTitle>20k+</StatsTitle>
            <StatsDescription>Sacas por mês</StatsDescription>
          </StatsItem>
          <TestDetail />
          <StatsItem>
            <StatsTitle>400 +</StatsTitle>
            <StatsDescription>Funcionários</StatsDescription>
          </StatsItem>
          <TestDetail />
          <StatsItem>
            <StatsTitle>20+</StatsTitle>
            <StatsDescription>Plantios de café</StatsDescription>
          </StatsItem>
        </StatsList>

        <TextTitle text="perguntas frequentes" />
        <TitleCoffe>Perguntas mais frequentes</TitleCoffe>

        <AccordionRoot type="single" collapsible>
          <Accordion.Item value="item-1">
            <FrequentesTitle>
              <TitleWrapper>
                Qual é o café?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              O café atual é o tradicional, com nossos melhores metodos de
              preparo e entrega para você!
            </StyledContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <FrequentesTitle>
              <TitleWrapper>
                Qual a diferença entre o Tradicional e os demais?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              Temos diversas diferenças, entre elas o sabor que no caso do
              tradicional é mais forte que por exemplo o tipo de café gourmet,
              onde o metodo de preparo é diferente, e a torrefação tambem!
            </StyledContent>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <FrequentesTitle>
              <TitleWrapper>
                Entrega fora do Brasil?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              Sim, entregamos para fora do Brasil, basta na compra colocar o cep
              do seu endereço e pagar a taxa de entrega que calculamos.
            </StyledContent>
          </Accordion.Item>
          <Accordion.Item value="item-4">
            <FrequentesTitle>
              <TitleWrapper>
                O que fazer se não houver estoque?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              Pode nos mandar uma mensagem em uma de nossas redes sociais, e
              mandaremos para você um calendairo com os possiveis meses em que
              teremos estoque de volta
            </StyledContent>
          </Accordion.Item>
          <Accordion.Item value="item-5">
            <FrequentesTitle>
              <TitleWrapper>
                Quais as formas de pagamento?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              A nossas formas de pagamento são completas, tanto cartões de
              debito e credito, boletos, e pix.
            </StyledContent>
          </Accordion.Item>
        </AccordionRoot>
      </TradicionalCoffeWrapper>

      <Footer />
    </>
  )
}
