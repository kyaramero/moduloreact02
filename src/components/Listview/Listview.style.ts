import styled from 'styled-components'
import { theme } from '../../global'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  width: 40vw;
  height: 60vh;
  background-color: ${theme.primaryColor};
  border-radius: 5%;
`

export const TaskContainer = styled.div`
  background: green;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  background-color: ${theme.secondaryColor};
`

export const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
`
