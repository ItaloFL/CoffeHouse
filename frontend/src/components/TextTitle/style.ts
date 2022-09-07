import styled from "styled-components";


export const TitleText = styled.p`
  font-family: var(--type-frist);
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.detailTitleColor};
`