import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'


export const TradicionalCoffeWrapper = styled(Container)`

`

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
  width: 365px;
  height: 172px;
  background-color: ${props => props.theme.colors.cardColor};
  color: ${props => props.theme.colors.primaryTextColor};
  padding: 30px;
  font-size: 14px;
`

export const DepoimentoAuthor = styled.div`
  
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

export const StatsItem = styled.li`
  
`

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
