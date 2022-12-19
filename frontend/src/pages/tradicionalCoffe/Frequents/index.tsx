import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'phosphor-react'
import { TextTitle } from '../../../components/TextTitle'
import { TitleCoffe } from '../AboutCoffe/style'
import {
  AccordionItem,
  AccordionRoot,
  FrequentesTitle,
  StyledContent,
  TitleWrapper
} from './style'

export function Frequents() {
  return (
    <div>
      <TextTitle text="perguntas frequentes" />
      <TitleCoffe>Perguntas mais frequentes</TitleCoffe>

      <AccordionRoot type="single" collapsible>
        <AccordionItem value="item-1">
          <FrequentesTitle>
            <TitleWrapper>
              Qual é o café?
              <Plus size={25} color="currentcolor" />
            </TitleWrapper>
          </FrequentesTitle>
          <StyledContent>
            O café atual é o tradicional, com nossos melhores metodos de preparo
            e entrega para você!
          </StyledContent>
        </AccordionItem>
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
            A nossas formas de pagamento são completas, tanto cartões de debito
            e credito, boletos, e pix.
          </StyledContent>
        </Accordion.Item>
      </AccordionRoot>
    </div>
  )
}
