import styled from 'styled-components'
import { theme } from '../../global'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 70vh;
  background-color: ${theme.primaryColor};
  border-radius: 50px;
  padding: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    scroll-margin: 50px 0 0 50px;
  }
`

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
`

export const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow-wrap: break-word;
  height: 5em;
  width: 95%;
  background-color: ${theme.secondaryColor};
  border-radius: 50px;
  p {
    width: 6em;
    text-align: justify;
  }
`