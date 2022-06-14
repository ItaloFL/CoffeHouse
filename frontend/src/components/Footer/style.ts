import styled from 'styled-components'
import { Container } from '../../styles/layout/Container'

export const FooterWrapper = styled.div`
  background-color: #27272a;
  padding: 30px 0;
`

export const FooterContent = styled(Container)`
  display: flex;
  gap: 7.5rem;
`

export const CoffeLogo = styled.div``

export const ListTitle = styled.p`
  font-size: 1.25rem;
  color: #666666;
  margin-bottom: 5px;
  font-weight: bold;
`

export const ListItem = styled.li`

  margin-bottom: 15px;
  
  a {
    font-size: 0.875rem;
    color: #a6aaad;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }
`

export const LogoText = styled.p`
  color: #a6aaad;
  font-size: 0.875rem;
`
