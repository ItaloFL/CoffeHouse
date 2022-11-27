import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const ExtraForteCoffeWrapper = styled(Container)``

export const IntroductionContent = styled.div``

export const IntroductionList = styled.ul`
  display: flex;
  gap: 2.5rem;
  margin-top: 5.625rem;
`

export const IntroductionItemList = styled.li`
  font-family: var(--type-second);
  font-size: 1.25rem;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const DiferentialWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
`

export const ListDifferentialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8.75rem;
  row-gap: 3.125rem;
`

export const IntroductionWrapper = styled.div`
  display: flex;
  gap: 7.5rem;
  margin-top: 10rem;
  margin-bottom: 10rem;
`

export const DiferentialItemTitle = styled.h2`
  font-size: 1.75rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const DiferentialItemText = styled.p`
  font-family: var(--type-second);
  font-size: 1rem;
  color: ${props => props.theme.colors.secondaryTextColor};
`
