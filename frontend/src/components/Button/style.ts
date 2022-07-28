import styled from 'styled-components'

export const ButtonStyle = styled.button`
  width: 290px;
  height: 55px;
  color: ${props => props.theme.colors.primaryTextColor};
  background: linear-gradient(#5391ed, #154c9c);
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;

  :hover, :focus {
    background: linear-gradient(#71AAFF, #1354B4);
  }
`
