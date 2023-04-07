import styled from 'styled-components'
import { theme } from '../../global'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const HeaderTitle = styled.h1`
  color: ${theme.text};
`

export const AddTask = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    width: 30px;
  }
`
