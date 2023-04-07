import styled, { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryColor: '#ffb4ac',
  secondaryColor: '#ffebd3',
  bg: '#f6faf7',
  success: '#f3eed9',
  undone: '#fff6f4',
  text: '#6b5e62',
}

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        margin:0;
        padding:0;
        background-color: ${theme.bg};
        color: ${theme.text};
    }
`

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
