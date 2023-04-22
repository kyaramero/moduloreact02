import React, { ChangeEvent } from 'react'
import { InputPlace } from './style'
import { useTask } from '../../context/task.context'

const Input = () => {
  const { newTaskLabel, handleTaskChange, handleKeyPress } = useTask()

  return (
    <InputPlace
      placeholder="Add a task"
      value={newTaskLabel}
      onChange={(e: ChangeEvent<HTMLInputElement>) => handleTaskChange(e)}
      onKeyPress={(e: React.KeyboardEvent) => handleKeyPress(e)}
      autoFocus
    />
  )
}

export default Input
