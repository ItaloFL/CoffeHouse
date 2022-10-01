import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'
import * as Accordion from '@radix-ui/react-accordion'

export const TradicionalCoffeWrapper = styled(Container)``

export const AboutCoffe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 170px;
  margin-top: 170px;
  margin-bottom: 170px;
`

export const TitleCoffe = styled.h1`
  font-family: var(--type-frist);
  font-size: 36px;
  font-weight: bold;
  max-width: 305px;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 40px;
`

export const AboutDescription = styled.div`
  p {
    font-family: var(--type-second);
    font-size: 14px;
    color: ${props => props.theme.colors.secondaryTextColor};

    &.primary-description {
      margin-bottom: 20px;
    }
  }
`

export const ButtonDescription = styled.button`
  font-family: var(--type-second);
  margin-top: 25px;
  width: 155px;
  height: 46px;
  background-color: ${props => props.theme.colors.detailTitleColor};
  color: ${props => props.theme.colors.primaryTextColor};
  text-transform: uppercase;
  padding: 15px 12px;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
`

export const Depositions = styled.div`
  margin-bottom: 90px;
`

export const DepoimentoWrapper = styled.div`
  display: flex;
  gap: 70px;
`

export const DepoimentoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 365px;
  height: 172px;
  background-color: ${props => props.theme.colors.depoimentBackground};
  color: ${props => props.theme.colors.primaryTextColor};
  padding: 30px;
  font-size: 14px;
`

export const DepoimentoAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
`

export const Detail = styled.div`
  width: 50px;
  height: 1px;
  background-color: ${props => props.theme.colors.detailColor};
  margin-bottom: 90px;
`

export const ProcessList = styled.ul`
  display: flex;
  gap: 60px;
`

export const ProcessItem = styled.li`
  width: 368px;
  height: 100px;
  margin-bottom: 90px;
`

export const ProcessTitle = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 15px;
`

export const ProcessDescription = styled.p`
  font-family: (--type-second);
  font-size: 0.875rem;
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const StatsList = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 170px;
`

export const StatsItem = styled.li``

export const StatsTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: bold;
  margin-bottom: 7px;
`

export const StatsDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const TestDetail = styled.div`
  height: 90px;
  width: 1px;
  background-color: ${props => props.theme.colors.detailColor};
`

const slideDown = keyframes({
  from: { height: 0 },
  to: {
    height: 'var(--radix-accordion-content-height)'
  }
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 }
})

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AccordionRoot = styled(Accordion.Root)`
  margin-bottom: 80px;
`

export const FrequentesTitle = styled(Accordion.Trigger)`
  border: none;
  width: 520px;
  height: 65px;
  cursor: pointer;
  text-align: start;
  padding: 0 20px;
  border-radius: 4px;
  font-size: 1.2rem;
  margin-top: 20px;
  background-color: ${props => props.theme.colors.cardColor};
  color: ${props => props.theme.colors.primaryTextColor};
`

export const StyledContent = styled(Accordion.Content)`
  max-width: 520px;
  overflow: hidden;
  font-size: 15;
  padding: 30px;
  line-height: 2rem;
  color: ${props => props.theme.colors.primaryTextColor};
  background-color: ${props => props.theme.colors.secondaryColor};

  &[data-state='open'] {
    animation: ${slideDown} 300ms;
  }

  &[data-state='close'] {
    animation: ${slideUp} 300ms;
  }
`
