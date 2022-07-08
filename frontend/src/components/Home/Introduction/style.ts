import styled from 'styled-components'

export const IntroContent = styled.div`
  display: block;
  margin: 150px auto;

  .LinkButton {
    display: block;
    width: 290px;
    height: 55px;
    color: #ffffff;
    background: linear-gradient(#5391ed, #154c9c);
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 4px;
    text-decoration: none;
    padding: 17px 79px;
    margin: 0 auto;


    :hover,
    :focus {
      background: linear-gradient(#71aaff, #1354b4);
    }
  }
`

export const IntroDescription = styled.p`
  font-family: var(--type-second);
  font-size: 1.125rem;
  color: #a6aaad;
  max-width: 350px;
  margin: 40px auto;
  line-height: 1.2;
`
