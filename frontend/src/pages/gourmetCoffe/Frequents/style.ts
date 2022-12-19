import styled, { keyframes } from 'styled-components'
import * as Accordion from '@radix-ui/react-accordion'

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
