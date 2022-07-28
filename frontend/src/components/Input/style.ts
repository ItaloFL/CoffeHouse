import styled from 'styled-components'

export const InputWrapper = styled.div`
  .input {
    width: 278px;
    height: 45px;
    background-color: ${props => props.theme.colors.background};
    padding: 0px 40px;
    border-radius: 4px;
    outline: none;
    border: 2px solid transparent;
    color: ${props => props.theme.colors.primaryTextColor};

    ::placeholder {
      font-family: var(--type-frist);
      font-size: 0.875rem;
      font-weight: medium;
      color: #767474;
      padding: 12px 0px 12px 0px;
    }

    :focus {
      border-color: #297df9;
      transition: 0.3s;
    }
  }
`
