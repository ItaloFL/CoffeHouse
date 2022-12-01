import styled, { keyframes } from 'styled-components'
import { Container } from '../../styles/layout/Container'
import * as Accordion from '@radix-ui/react-accordion'

export const GourmetCoffeWrapper = styled(Container)``

export const IntroductionWrapper = styled.div`
  @media (max-width: 968px) {
    img {
      display: none;
    }
  }
`

export const GourmetIntroduction = styled.div`
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    margin-top: 80px;
    flex-direction: column;
  }
`

export const GourmetIntroductionDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
`

export const GourmetIntroductionDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    p {
      margin-bottom: 40px;
    }
  }
`

export const GourmetIntroductionBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 205px;
  border: 2px solid #44d9ff;
  padding: 15px;
  align-items: center;
  border-radius: 4px;
`

export const BoxGourmetTitle = styled.p`
  font-family: var(--type-frist);
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
  margin-bottom: 40px;
  max-width: 200px;

  @media (max-width: 968px) {
    max-width: 300px;
    font-size: 20px;
  }
`

export const BoxGourmetDescription = styled.p`
  font-family: var(--type-second);
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    font-size: 16px;
  }
`

export const TitleSpan = styled.span`
  color: #44d9ff;
`

export const DifCoffeWrapper = styled.div`
  margin-bottom: 120px;

  @media (max-width: 720px) {
    margin-bottom: 60px;
  }
`

export const DifCoffeDescription = styled.p`
  font-family: var(--type-second);
  color: ${props => props.theme.colors.secondaryTextColor};
  margin: 0 auto;
  margin-bottom: 60px;
`

export const WrapperDif = styled.div`
  display: flex;
  gap: 150px;

  @media (max-width: 968px) {
    gap: 0;
  }
`

export const ImageWrapper = styled.div`
  @media (max-width: 968px) {
    img {
      display: none;
    }
  }
`

export const IconWrapper = styled.span`
  border: 1px solid #a6aaad;
  border-radius: 4px;
  padding: 10px 7px 4px 7px;
`

export const TitleDifItem = styled.p`
  color: ${props => props.theme.colors.primaryTextColor};
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 20px;
`

export const DifDescriptionItem = styled.p`
  font-family: var(--type-second);
  font-size: 14px;
  color: ${props => props.theme.colors.secondaryTextColor};
`

export const DifItensWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`

export const WarningWrapper = styled.div`
  display: flex;
  gap: 150px;
  justify-content: space-between;
  margin-bottom: 110px;

  @media (max-width: 968px) {
    gap: 60px;
    flex-direction: column;
    margin-bottom: 70px;
  }
`
export const WarningTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${props => props.theme.colors.primaryTextColor};
`

export const TextWarning = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: var(--type-second);
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.secondaryTextColor};

  @media (max-width: 968px) {
    font-size: 14px;
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
