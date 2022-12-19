import { Clock, Fire, Plus } from 'phosphor-react'

import {
  AccordionRoot,
  DiferentialItemText,
  DiferentialItemTitle,
  DiferentialWrapper,
  ExtraForteCoffeWrapper,
  FrequentesTitle,
  ImageWrapper,
  IntroductionContent,
  IntroductionItemList,
  IntroductionList,
  IntroductionWrapper,
  ListDifferentialWrapper,
  ListTypeCoffeDescription,
  ListTypeCoffeItem,
  ListTypeCoffeTitle,
  ListTypesCoffe,
  StyledContent
} from './style'
import { Title } from '../../components/Title'
import ExtraForteImgCoffe from '../../assets/extraForte.png'
import CalendaryIcon from '../../assets/calendary.svg'
import EntregaIcon from '../../assets/entrega.svg'
import LocalIcon from '../../assets/local.svg'
import PeopleIcon from '../../assets/people-icon.svg'
import ToolIcon from '../../assets/tools-icon.svg'
import CheckIcon from '../../assets/check-icon.svg'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import * as Accordion from '@radix-ui/react-accordion'
import { TitleWrapper } from '../tradicionalCoffe/Frequents/style'
import { ButtonDescription, TitleCoffe } from '../tradicionalCoffe/AboutCoffe/style'

type Props = {
  toggleTheme(): void
}

export function ExtraForteCoffe({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ExtraForteCoffeWrapper>
        <IntroductionWrapper>
          <IntroductionContent>
            <TitleCoffe>A torrefação perfeita e unica no Brasil.</TitleCoffe>
            <IntroductionList>
              <IntroductionItemList>
                <Fire size={35} color="#44D9FF" />
                <p>Torrefação segura e fiscalizada</p>
              </IntroductionItemList>
              <IntroductionItemList>
                <Clock size={35} color="#44D9FF" />
                <p>Ate 6 horas de trabalho</p>
              </IntroductionItemList>
            </IntroductionList>
            <ButtonDescription>Estou interressado</ButtonDescription>
          </IntroductionContent>
          <ImageWrapper>
            <img src={ExtraForteImgCoffe} alt="" />
          </ImageWrapper>
        </IntroductionWrapper>

        <DiferentialWrapper>
          <Title
            Text="O que nos diferencia
            dos demais cafés?"
            margin="0 auto"
            marginBottom="120px"
          />

          <ListDifferentialWrapper>
            <div>
              <img src={CalendaryIcon} alt="" />

              <DiferentialItemTitle>10 Anos de mercado</DiferentialItemTitle>

              <DiferentialItemText>
                A anos no mercado querendo o melhor do consumidor.
              </DiferentialItemText>
            </div>

            <div>
              <img src={LocalIcon} alt="" />

              <DiferentialItemTitle>Local organizado</DiferentialItemTitle>

              <DiferentialItemText>
                Seriedade na contrução e mantimento do local.
              </DiferentialItemText>
            </div>

            <div>
              <img src={EntregaIcon} alt="" />

              <DiferentialItemTitle>Entregas rapidas</DiferentialItemTitle>

              <DiferentialItemText>
                Entrega para todo o Brasil com a maior velocidade.
              </DiferentialItemText>
            </div>

            <div>
              <img src={CheckIcon} alt="" />

              <DiferentialItemTitle>Qualidade sempre</DiferentialItemTitle>

              <DiferentialItemText>
                Sempre queremos o melhor para o nossos clientes.
              </DiferentialItemText>
            </div>

            <div>
              <img src={PeopleIcon} alt="" />

              <DiferentialItemTitle>Equipe séria</DiferentialItemTitle>

              <DiferentialItemText>
                Completamente capazes de fazer o melhor.
              </DiferentialItemText>
            </div>

            <div>
              <img src={ToolIcon} alt="" />

              <DiferentialItemTitle>Ferramentas novas</DiferentialItemTitle>

              <DiferentialItemText>
                Ferramentas sempre na maior qualidade e tecnologia.
              </DiferentialItemText>
            </div>
          </ListDifferentialWrapper>
        </DiferentialWrapper>

        <TitleCoffe>Os tipos de grãos do nosso café</TitleCoffe>
        <ListTypesCoffe>
          <ListTypeCoffeItem>
            <ListTypeCoffeTitle>Grãos Arabicos</ListTypeCoffeTitle>
            <ListTypeCoffeDescription>
              Nossos grãos vindos diretamente da Arábia, para te trazer o melhor
              sabor de lá
            </ListTypeCoffeDescription>
          </ListTypeCoffeItem>

          <ListTypeCoffeItem>
            <ListTypeCoffeTitle>Graõs Mexicanos</ListTypeCoffeTitle>
            <ListTypeCoffeDescription>
              Nossos grãos vindos diretamente do Mexico, para te trazer o melhor
              sabor de lá
            </ListTypeCoffeDescription>
          </ListTypeCoffeItem>

          <ListTypeCoffeItem>
            <ListTypeCoffeTitle>Grãos Brasileiros</ListTypeCoffeTitle>
            <ListTypeCoffeDescription>
              Nossos grãos vindos diretamente do Brasil, para te trazer o melhor
              sabor de lá
            </ListTypeCoffeDescription>
          </ListTypeCoffeItem>
        </ListTypesCoffe>

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
              O Extra Forte, nosso café para quem gosta de tomar um café amargo
              e o sabor reforçado.
            </StyledContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <FrequentesTitle>
              <TitleWrapper>
                Como é o processo dos grãos?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              Não é tão atencioso como o café Gourmet, pois a torrefação é mais
              forte para os grãos terem o sabor forte.
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
          <Accordion.Item value="item-6">
            <FrequentesTitle>
              <TitleWrapper>
                Em quanto tempo chega o café?
                <Plus size={25} color="currentcolor" />
              </TitleWrapper>
            </FrequentesTitle>
            <StyledContent>
              Não podemos dar uma data exata por conta de possiveis problemas,
              mas tentamos sempre fazer a entrega em ate 15 dias uteis?
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
              Nos contacte o mais rapido para que vejamos qual o erro foi
              cometido e como podemos concerta-lo, o cliente tem a prioridade
            </StyledContent>
          </Accordion.Item>
        </AccordionRoot>
      </ExtraForteCoffeWrapper>
      <Footer />
    </>
  )
}
