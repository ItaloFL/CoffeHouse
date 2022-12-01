import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Title } from '../../components/Title'
import {
  AccordionRoot,
  BoxGourmetDescription,
  BoxGourmetTitle,
  DifCoffeDescription,
  DifCoffeWrapper,
  DifDescriptionItem,
  DifItensWrapper,
  FrequentesTitle,
  GourmetCoffeWrapper,
  GourmetIntroduction,
  GourmetIntroductionBox,
  GourmetIntroductionDescription,
  IconWrapper,
  ImageWrapper,
  IntroductionWrapper,
  StyledContent,
  TextWarning,
  TitleDifItem,
  TitleSpan,
  WarningTitle,
  WarningWrapper,
  WrapperDif
} from './style'
import GourmetImage from '../../assets/gourmetImage.png'
import CoffesImage from '../../assets/coffeImages.svg'
import MoneyIcon from '../../assets/money.svg'
import ClockIcon from '../../assets/clock.svg'
import PhoneIcon from '../../assets/phone.svg'
import {
  ButtonDescription,
  TitleCoffe,
  TitleWrapper
} from '../tradicionalCoffe/style'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus } from 'phosphor-react'

type Props = {
  toggleTheme(): void
}

export function GourmetCoffe({ toggleTheme }: Props) {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <GourmetCoffeWrapper>
        <IntroductionWrapper>
          <GourmetIntroduction>
            <GourmetIntroductionDescription>
              <>
                <Title Text="A melhor maturação gourmet" marginBottom="20px" />
                <p>
                  Graõs arabicos com uma qualidade muito boa justamente para
                  trazer um gosto bom no seu consumo, sempre com qualidade e
                  cuidado em todos os nossos passos.
                </p>
              </>
            </GourmetIntroductionDescription>

            <GourmetIntroductionBox>
              <BoxGourmetTitle>
                Seleção de graõs que <TitleSpan>não permite erros</TitleSpan> na
                execução
              </BoxGourmetTitle>

              <BoxGourmetDescription>
                A principal diferença entre nosso café tradicional e o gourmet é
                na hora da seleção de grãos.
              </BoxGourmetDescription>
            </GourmetIntroductionBox>
          </GourmetIntroduction>
          <img
            src={GourmetImage}
            alt=""
            style={{ marginBottom: '120px', width: '100%' }}
          />
        </IntroductionWrapper>

        <DifCoffeWrapper>
          <Title Text="Diferenciais ao comprar conosco" maxWidth="100%" />
          <DifCoffeDescription>
            Ao comprar um dos nossos produtos, você terá todos os nosso mimos
            descritos abaixo, para o contato, basta olhar em final da pagina e
            nos contactar em alguma de nossas redes sociais.
          </DifCoffeDescription>

          <WrapperDif>
            <ImageWrapper>
              <img src={CoffesImage} alt="" />
            </ImageWrapper>

            <DifItensWrapper>
              <div>
                <IconWrapper>
                  <img src={MoneyIcon} alt="" />
                </IconWrapper>

                <TitleDifItem>Preços justos com o produto</TitleDifItem>

                <DifDescriptionItem>
                  Nada de pagar preços exagarados, aqui cobramos um preço que
                  não pesa no seu bolso.
                </DifDescriptionItem>
              </div>

              <div>
                <IconWrapper>
                  <img src={PhoneIcon} alt="" />
                </IconWrapper>

                <TitleDifItem>Contato a qualquer momento</TitleDifItem>

                <DifDescriptionItem>
                  Desde o momento da compra ate o momento da entrega é possivel
                  tirar qualquer duvida em nossas redes sociais.
                </DifDescriptionItem>
              </div>

              <div>
                <IconWrapper>
                  <img src={ClockIcon} alt="" />
                </IconWrapper>

                <TitleDifItem>Tempo de entrega record</TitleDifItem>

                <DifDescriptionItem>
                  Temos uma das entregas mais rapidas do Brasil, alem do frete
                  gratis para todo o Brasil.
                </DifDescriptionItem>
              </div>
            </DifItensWrapper>
          </WrapperDif>
        </DifCoffeWrapper>

        <WarningWrapper>
          <WarningTitle>
            Garanta já o seu, não perca essa <TitleSpan>oportunidade</TitleSpan>
            <ButtonDescription>Estou interressado</ButtonDescription>
          </WarningTitle>

          <TextWarning>
            <p>
              Como o processo de escolha de graõs em nosso café Gourmet, não é
              possivel a sua fabricação em grande escala, por isso, diferente
              dos outros, normalmente ele não está disponivel a todo instante.
            </p>

            <p>
              Mas não fique triste, sempre que disponivel, é evidente, por isso,
              sempre que quiser, garanta logo o seu.
            </p>
          </TextWarning>
        </WarningWrapper>

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
      </GourmetCoffeWrapper>
      <Footer />
    </>
  )
}
