import React, { useState } from 'react'
import { ListContainer, TaskContainer, TaskItem } from './Listview.style'
import Checkbox from '../Checkbox/checkbox'
import { ITask } from './Listview.types'
import { Spacer } from '../Spacer/spacer'

const Listview = () => {
  const tasks: ITask[] = [
    { id: '1', label: 'Primeira task', isComplete: false },
  ]

  const [check, setCheck] = useState(false)

  const handleCheck = () => {
    setCheck(!check)
    console.log('check', check)
  }

  return (
    <ListContainer>
      <Spacer axis="vertical" size={10} />
      <TaskContainer>
        <TaskItem>
          <Checkbox label={'done'} checked={check} onChange={handleCheck} />
          {tasks.map(task => {
            return task.label
          })}
        </TaskItem>
      </TaskContainer>
    </ListContainer>
  )
}

export default Listview
