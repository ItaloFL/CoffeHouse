import { SunDim, User } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  ButtonEnter,
  HeaderButton,
  HeaderContent,
  HeaderWrapper,
  MenuItens,
  MenuWrapper,
  ThemeButton
} from '../../components/Header/style'
import { TextTitle } from '../../components/TextTitle'
import { Title } from '../../components/Title'
import { Logo } from '../../styles/globalStyles'
import ImageCoffe from '../../assets/imagem-coffe.svg'
import {
  AboutCoffe,
  AboutDescription,
  ButtonDescription,
  DepoimentoAuthor,
  DepoimentoItem,
  DepoimentoWrapper,
  Depositions,
  Detail,
  ProcessDescription,
  ProcessItem,
  ProcessList,
  ProcessTitle,
  StatsDescription,
  StatsItem,
  StatsList,
  StatsTitle,
  TitleCoffe,
  TradicionalCoffeWrapper
} from './style'

const depoimentos = [
  {
    name: 'Ricardo da Silva',
    depoimento:
      'Sempre fui um grande fâ de café, tenho uma solida experiência o mesmo, e posso dizer, que os grãos são extremamente selecionados e todos os processos, são com um cuidado impressionamente, magnifico.'
  },
  {
    name: 'Mario José',
    depoimento:
      'O café faz meu dia render mais, diariamente tomo uma dose de café, e esse é o café com um melhor gosto dentre os que já experimentei'
  },
  {
    name: 'Ana Carla Silveira',
    depoimento:
      'Confesso que ate uns meses atrás, eu não era um grande fã de café, mas depois de experimentar o café da CoffeHouse, confesso que cada vez fui tomando mas e hoje em dia todo um pouco diariamente.'
  }
]

type Props = {
  toggleTheme(): void
}

export function TradicionalCoffe({ toggleTheme }: Props) {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Link to="/">
            <Logo
              width="145"
              height="44"
              viewBox="0 0 145 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.89 27.04C17.9967 27.04 18.09 27.0833 18.17 27.17L18.94 28C18.3533 28.68 17.64 29.21 16.8 29.59C15.9667 29.97 14.9567 30.16 13.77 30.16C12.7433 30.16 11.81 29.9833 10.97 29.63C10.13 29.27 9.41333 28.77 8.82 28.13C8.22667 27.4833 7.76667 26.71 7.44 25.81C7.11333 24.91 6.95 23.92 6.95 22.84C6.95 21.76 7.12 20.77 7.46 19.87C7.8 18.97 8.27667 18.1967 8.89 17.55C9.51 16.9033 10.25 16.4033 11.11 16.05C11.97 15.69 12.92 15.51 13.96 15.51C14.98 15.51 15.88 15.6733 16.66 16C17.44 16.3267 18.1267 16.77 18.72 17.33L18.08 18.22C18.04 18.2867 17.9867 18.3433 17.92 18.39C17.86 18.43 17.7767 18.45 17.67 18.45C17.55 18.45 17.4033 18.3867 17.23 18.26C17.0567 18.1267 16.83 17.98 16.55 17.82C16.27 17.66 15.92 17.5167 15.5 17.39C15.08 17.2567 14.5633 17.19 13.95 17.19C13.21 17.19 12.5333 17.32 11.92 17.58C11.3067 17.8333 10.7767 18.2033 10.33 18.69C9.89 19.1767 9.54667 19.77 9.3 20.47C9.05333 21.17 8.93 21.96 8.93 22.84C8.93 23.7333 9.05667 24.53 9.31 25.23C9.57 25.93 9.92 26.5233 10.36 27.01C10.8067 27.49 11.33 27.8567 11.93 28.11C12.5367 28.3633 13.19 28.49 13.89 28.49C14.3167 28.49 14.7 28.4667 15.04 28.42C15.3867 28.3667 15.7033 28.2867 15.99 28.18C16.2833 28.0733 16.5533 27.94 16.8 27.78C17.0533 27.6133 17.3033 27.4167 17.55 27.19C17.6633 27.09 17.7767 27.04 17.89 27.04ZM34.1559 22.84C34.1559 23.9133 33.9859 24.9 33.6459 25.8C33.3059 26.6933 32.8259 27.4633 32.2059 28.11C31.5859 28.7567 30.8393 29.26 29.9659 29.62C29.0993 29.9733 28.1393 30.15 27.0859 30.15C26.0326 30.15 25.0726 29.9733 24.2059 29.62C23.3393 29.26 22.5959 28.7567 21.9759 28.11C21.3559 27.4633 20.8759 26.6933 20.5359 25.8C20.1959 24.9 20.0259 23.9133 20.0259 22.84C20.0259 21.7667 20.1959 20.7833 20.5359 19.89C20.8759 18.99 21.3559 18.2167 21.9759 17.57C22.5959 16.9167 23.3393 16.41 24.2059 16.05C25.0726 15.69 26.0326 15.51 27.0859 15.51C28.1393 15.51 29.0993 15.69 29.9659 16.05C30.8393 16.41 31.5859 16.9167 32.2059 17.57C32.8259 18.2167 33.3059 18.99 33.6459 19.89C33.9859 20.7833 34.1559 21.7667 34.1559 22.84ZM32.1659 22.84C32.1659 21.96 32.0459 21.17 31.8059 20.47C31.5659 19.77 31.2259 19.18 30.7859 18.7C30.3459 18.2133 29.8126 17.84 29.1859 17.58C28.5593 17.32 27.8593 17.19 27.0859 17.19C26.3193 17.19 25.6226 17.32 24.9959 17.58C24.3693 17.84 23.8326 18.2133 23.3859 18.7C22.9459 19.18 22.6059 19.77 22.3659 20.47C22.1259 21.17 22.0059 21.96 22.0059 22.84C22.0059 23.72 22.1259 24.51 22.3659 25.21C22.6059 25.9033 22.9459 26.4933 23.3859 26.98C23.8326 27.46 24.3693 27.83 24.9959 28.09C25.6226 28.3433 26.3193 28.47 27.0859 28.47C27.8593 28.47 28.5593 28.3433 29.1859 28.09C29.8126 27.83 30.3459 27.46 30.7859 26.98C31.2259 26.4933 31.5659 25.9033 31.8059 25.21C32.0459 24.51 32.1659 23.72 32.1659 22.84ZM38.8716 17.25V22.26H44.7616V23.84H38.8716V30H36.9316V15.67H45.7616V17.25H38.8716ZM50.1802 17.25V22.26H56.0702V23.84H50.1802V30H48.2402V15.67H57.0702V17.25H50.1802ZM68.3888 28.42L68.3788 30H59.5488V15.67H68.3788V17.25H61.4888V22.01H67.0688V23.53H61.4888V28.42H68.3888ZM82.7017 15.67V30H80.7617V23.48H73.0317V30H71.0917V15.67H73.0317V22.06H80.7617V15.67H82.7017ZM99.6052 22.84C99.6052 23.9133 99.4352 24.9 99.0952 25.8C98.7552 26.6933 98.2752 27.4633 97.6552 28.11C97.0352 28.7567 96.2885 29.26 95.4152 29.62C94.5485 29.9733 93.5885 30.15 92.5352 30.15C91.4818 30.15 90.5218 29.9733 89.6552 29.62C88.7885 29.26 88.0452 28.7567 87.4252 28.11C86.8052 27.4633 86.3252 26.6933 85.9852 25.8C85.6452 24.9 85.4752 23.9133 85.4752 22.84C85.4752 21.7667 85.6452 20.7833 85.9852 19.89C86.3252 18.99 86.8052 18.2167 87.4252 17.57C88.0452 16.9167 88.7885 16.41 89.6552 16.05C90.5218 15.69 91.4818 15.51 92.5352 15.51C93.5885 15.51 94.5485 15.69 95.4152 16.05C96.2885 16.41 97.0352 16.9167 97.6552 17.57C98.2752 18.2167 98.7552 18.99 99.0952 19.89C99.4352 20.7833 99.6052 21.7667 99.6052 22.84ZM97.6152 22.84C97.6152 21.96 97.4952 21.17 97.2552 20.47C97.0152 19.77 96.6752 19.18 96.2352 18.7C95.7952 18.2133 95.2618 17.84 94.6352 17.58C94.0085 17.32 93.3085 17.19 92.5352 17.19C91.7685 17.19 91.0718 17.32 90.4452 17.58C89.8185 17.84 89.2818 18.2133 88.8352 18.7C88.3952 19.18 88.0552 19.77 87.8152 20.47C87.5752 21.17 87.4552 21.96 87.4552 22.84C87.4552 23.72 87.5752 24.51 87.8152 25.21C88.0552 25.9033 88.3952 26.4933 88.8352 26.98C89.2818 27.46 89.8185 27.83 90.4452 28.09C91.0718 28.3433 91.7685 28.47 92.5352 28.47C93.3085 28.47 94.0085 28.3433 94.6352 28.09C95.2618 27.83 95.7952 27.46 96.2352 26.98C96.6752 26.4933 97.0152 25.9033 97.2552 25.21C97.4952 24.51 97.6152 23.72 97.6152 22.84ZM107.911 28.46C108.504 28.46 109.034 28.36 109.501 28.16C109.967 27.96 110.361 27.68 110.681 27.32C111.007 26.96 111.254 26.53 111.421 26.03C111.594 25.53 111.681 24.98 111.681 24.38V15.67H113.611V24.38C113.611 25.2067 113.477 25.9733 113.211 26.68C112.951 27.3867 112.574 28 112.081 28.52C111.594 29.0333 110.997 29.4367 110.291 29.73C109.584 30.0233 108.791 30.17 107.911 30.17C107.031 30.17 106.237 30.0233 105.531 29.73C104.824 29.4367 104.224 29.0333 103.731 28.52C103.237 28 102.857 27.3867 102.591 26.68C102.331 25.9733 102.201 25.2067 102.201 24.38V15.67H104.131V24.37C104.131 24.97 104.214 25.52 104.381 26.02C104.554 26.52 104.801 26.95 105.121 27.31C105.447 27.67 105.844 27.9533 106.311 28.16C106.784 28.36 107.317 28.46 107.911 28.46ZM124.418 17.91C124.358 18.01 124.291 18.0867 124.218 18.14C124.151 18.1867 124.068 18.21 123.968 18.21C123.854 18.21 123.721 18.1533 123.568 18.04C123.414 17.9267 123.221 17.8033 122.988 17.67C122.761 17.53 122.484 17.4033 122.158 17.29C121.838 17.1767 121.448 17.12 120.988 17.12C120.554 17.12 120.171 17.18 119.838 17.3C119.511 17.4133 119.234 17.57 119.008 17.77C118.788 17.97 118.621 18.2067 118.508 18.48C118.394 18.7467 118.338 19.0367 118.338 19.35C118.338 19.75 118.434 20.0833 118.628 20.35C118.828 20.61 119.088 20.8333 119.408 21.02C119.734 21.2067 120.101 21.37 120.508 21.51C120.921 21.6433 121.341 21.7833 121.768 21.93C122.201 22.0767 122.621 22.2433 123.028 22.43C123.441 22.61 123.808 22.84 124.128 23.12C124.454 23.4 124.714 23.7433 124.908 24.15C125.108 24.5567 125.208 25.0567 125.208 25.65C125.208 26.2767 125.101 26.8667 124.888 27.42C124.674 27.9667 124.361 28.4433 123.948 28.85C123.541 29.2567 123.038 29.5767 122.438 29.81C121.844 30.0433 121.168 30.16 120.408 30.16C119.474 30.16 118.628 29.9933 117.868 29.66C117.108 29.32 116.458 28.8633 115.918 28.29L116.478 27.37C116.531 27.2967 116.594 27.2367 116.668 27.19C116.748 27.1367 116.834 27.11 116.928 27.11C117.014 27.11 117.111 27.1467 117.218 27.22C117.331 27.2867 117.458 27.3733 117.598 27.48C117.738 27.5867 117.898 27.7033 118.078 27.83C118.258 27.9567 118.461 28.0733 118.688 28.18C118.921 28.2867 119.184 28.3767 119.478 28.45C119.771 28.5167 120.101 28.55 120.468 28.55C120.928 28.55 121.338 28.4867 121.698 28.36C122.058 28.2333 122.361 28.0567 122.608 27.83C122.861 27.5967 123.054 27.32 123.188 27C123.321 26.68 123.388 26.3233 123.388 25.93C123.388 25.4967 123.288 25.1433 123.088 24.87C122.894 24.59 122.638 24.3567 122.318 24.17C121.998 23.9833 121.631 23.8267 121.218 23.7C120.804 23.5667 120.384 23.4333 119.958 23.3C119.531 23.16 119.111 23 118.698 22.82C118.284 22.64 117.918 22.4067 117.598 22.12C117.278 21.8333 117.018 21.4767 116.818 21.05C116.624 20.6167 116.528 20.0833 116.528 19.45C116.528 18.9433 116.624 18.4533 116.818 17.98C117.018 17.5067 117.304 17.0867 117.678 16.72C118.058 16.3533 118.521 16.06 119.068 15.84C119.621 15.62 120.254 15.51 120.968 15.51C121.768 15.51 122.494 15.6367 123.148 15.89C123.808 16.1433 124.388 16.51 124.888 16.99L124.418 17.91ZM136.787 28.42L136.777 30H127.947V15.67H136.777V17.25H129.887V22.01H135.467V23.53H129.887V28.42H136.787Z"
                fill="currentcolor"
              />
              <rect x="1" width="143" height="1" fill="#297DF9" />
              <rect x="1" y="43" width="143" height="1" fill="#297DF9" />
              <circle cx="1" cy="25" r="1" fill="currentcolor" />
              <circle cx="144" cy="24" r="1" fill="currentcolor" />
            </Logo>
          </Link>

          <MenuWrapper>
            <MenuItens>
              <li>
                <a href="">Nosso café</a>
              </li>
              <li>
                <a href="">Depoimentos</a>
              </li>
              <li>
                <a href="">Processos</a>
              </li>
              <li>
                <a href="">Frequentes</a>
              </li>
            </MenuItens>
          </MenuWrapper>

          <HeaderButton>
            <Link className="signin" to="signin">
              <ButtonEnter>
                <User size={14} color="#297DF9" weight="fill" />
                Entrar
              </ButtonEnter>
            </Link>

            <Link className="signup" to="signup">
              Criar Conta
            </Link>

            <ThemeButton onClick={toggleTheme}>
              <SunDim
                size={24}
                color="#297DF9"
                weight="fill"
                strokeLinecap="square"
              />
            </ThemeButton>
          </HeaderButton>
        </HeaderContent>
      </HeaderWrapper>
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
            {depoimentos.map(depoimento => (
              <DepoimentoItem key={depoimento.name}>
                <p>"{depoimento.depoimento}"</p>
                <DepoimentoAuthor>
                  <p>{depoimento.name}</p>
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
          <StatsItem>
            <StatsTitle>400 +</StatsTitle>
            <StatsDescription>Funcionários</StatsDescription>
          </StatsItem>
          <StatsItem>
            <StatsTitle>20+</StatsTitle>
            <StatsDescription>Plantios de café</StatsDescription>
          </StatsItem>
        </StatsList>
      </TradicionalCoffeWrapper>
    </>
  )
}
