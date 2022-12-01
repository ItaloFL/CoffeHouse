import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'
import * as Accordion from '@radix-ui/react-accordion'

export const ExtraForteCoffeWrapper = styled(Container)``

export const IntroductionContent = styled.div``

export const IntroductionList = styled.ul`
  display: flex;
  gap: 2.5rem;
  margin-top: 2.625rem;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`

export const IntroductionItemList = styled.li`
  font-family: var(--type-second);
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const ImageWrapper = styled.div`
  @media (max-width: 860px) {
    img {
      display: none;
    }
  }
`

export const DiferentialWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media (max-width: 968px) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`

export const ListDifferentialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8.75rem;
  row-gap: 3.125rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: 1fr;
  }
`

export const IntroductionWrapper = styled.div`
  display: flex;
  gap: 7.5rem;
  margin-top: 10rem;
  margin-bottom: 10rem;

  @media (max-width: 968px) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`

export const DiferentialItemTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};

  @media (max-width: 968px) {
    font-size: 1.25rem;
  }
`

export const DiferentialItemText = styled.p`
  font-family: var(--type-second);
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const ListTypesCoffe = styled.ul`
  display: flex;
  gap: 40px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 60px;
  }
`

export const ListTypeCoffeItem = styled.div``

export const ListTypeCoffeTitle = styled.p`
  font-size: 1.75rem;
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: bold;
  margin-bottom: 10px;

  @media (max-width: 968px) {
    font-size: 1.25rem;
  }
`

export const ListTypeCoffeDescription = styled.p`
  font-family: var(--type-second);
  font-size: 1.25rem;
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    font-size: 1rem;
  }
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

export const AccordionRoot = styled(Accordion.Root)`
  margin-bottom: 80px;
`

export const FrequentesTitle = styled(Accordion.Trigger)`
  border: none;
  width: 100%;
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
