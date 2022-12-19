import { TitleCoffe } from '../../tradicionalCoffe/AboutCoffe/style'
import { AccordionRoot, FrequentesTitle, StyledContent } from './style'
import * as Accordion from '@radix-ui/react-accordion'
import { TitleWrapper } from '../../tradicionalCoffe/Frequents/style'
import { Plus } from 'phosphor-react'
import { useElementOnScreen } from '../../../utils/useElementOnScreen'

export function Frequents() {


  return (
    <div >
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
            O café atual é o Gourmet, feito com muito carinho desde a seleção
            dos seus grãos
          </StyledContent>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <FrequentesTitle>
            <TitleWrapper>
              Existe alguma diferença entre os gourmet?
              <Plus size={25} color="currentcolor" />
            </TitleWrapper>
          </FrequentesTitle>
          <StyledContent>
            Existem, principalmente no modo de preparo, algo que é feito em
            todos os cafés é a escolha dos grãos sem erros, poré, alguns tem a
            torrefação mais forte, e alguns uma maturação por maior tempo.
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
        <Accordion.Item value="item-6">
          <FrequentesTitle>
            <TitleWrapper>
              Em quanto tempo chega o café?
              <Plus size={25} color="currentcolor" />
            </TitleWrapper>
          </FrequentesTitle>
          <StyledContent>
            Não podemos dar uma data exata por conta de possiveis problemas, mas
            tentamos sempre fazer a entrega em ate 15 dias uteis?
          </StyledContent>
        </Accordion.Item>
        <Accordion.Item value="item-7">
          <FrequentesTitle>
            <TitleWrapper>
              O café não chegou, o que faço?
              <Plus size={25} color="currentcolor" />
            </TitleWrapper>
          </FrequentesTitle>
          <StyledContent>
            Nos contacte o mais rapido para que vejamos qual o erro foi cometido
            e como podemos concerta-lo, o cliente tem a prioridade
          </StyledContent>
        </Accordion.Item>
      </AccordionRoot>
    </div>
  )
}
