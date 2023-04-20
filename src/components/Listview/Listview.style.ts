import styled from 'styled-components'
import { theme } from '../../global'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40vw;
  height: 60vh;
  background-color: ${theme.primaryColor};
  border-radius: 5%;
`

export const Input = styled.input``

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const TaskItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5em;
  background-color: ${theme.secondaryColor};
`
