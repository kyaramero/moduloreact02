import React, { ChangeEvent, useState } from 'react'
import { ListContainer, Input, TaskContainer, TaskItem } from './Listview.style'
import Checkbox from '../Checkbox/checkbox'
import { ITask } from './Listview.types'
import { Spacer } from '../Spacer/spacer'
import { nanoid } from 'nanoid'

const Listview = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskLabel, setNewTaskLabel] = useState('')
  const [check, setCheck] = useState(false)

  const handleCheck = (id: string) => {
    setCheck(!check)
    tasks.map(task => {
      if (task.id === id) {
        task.isComplete = check
      }
      return false
    })
  }
  const addTask = (label: string) => {
    const id = nanoid()
    setTasks(tasks => [...tasks, { id: id, label: label, isComplete: false }])
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask(newTaskLabel)
      setNewTaskLabel('')
    }
  }

  return (
    <ListContainer>
      <Input
        placeholder="Add Task"
        value={newTaskLabel}
        onChange={handleTaskChange}
        onKeyPress={handleKeyPress}
      />
      <Spacer axis="vertical" size={10} />
      <TaskContainer>
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <Checkbox
              checked={task.isComplete}
              onChange={() => handleCheck(task.id)}
            />
            {task.isComplete ? (
              <p style={{ textDecoration: 'line-through' }}>{task.label}</p>
            ) : (
              <p>{task.label}</p>
            )}
          </TaskItem>
        ))}
      </TaskContainer>
    </ListContainer>
  )
}

export default Listview
