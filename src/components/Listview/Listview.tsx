import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  ListContainer,
  Input,
  LabelEmpty,
  TaskContainer,
  TaskItem,
} from './Listview.style'
import Checkbox from '../Checkbox/checkbox'
import { ITask } from './Listview.types'
import { Spacer } from '../Spacer/spacer'
import ToDelete from '../Delete'
import { nanoid } from 'nanoid'

const Listview = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [newTaskLabel, setNewTaskLabel] = useState('')
  const [searchLabel, setSearchLabel] = useState('')

  const handleSearchLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchLabel(e.target.value)
  }

  const updateComplete = (id: string, isComplete: boolean) => {
    const toBeUpdated = tasks.map(task =>
      task.id === id ? { ...task, isComplete } : task
    )
    const updateTasks = [...toBeUpdated]
    setTasks(updateTasks)
    saveTasks(updateTasks)
  }

  const saveTasks = (updateTasks: ITask[]) => {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem('tasks', tasksString)
  }

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, task: ITask) => {
    updateComplete(task.id, e.target.checked)
  }

  const addTask = (label: string) => {
    const id = nanoid()
    const alreadyExists = tasks.find(task =>
      task.label === label ? true : false
    )
    if (!alreadyExists) {
      const currTask: ITask = { id: id, label: label, isComplete: false }
      const updateTasks = [...tasks, currTask]
      setTasks(updateTasks)
      saveTasks(updateTasks)
    } else {
      alert('🚨Try another. This task alread exists!🥲')
    }
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

  const deletetask = (id: string) => {
    const toBeDeleted = tasks.filter(task => task.id !== id)
    const updateTasks = [...toBeDeleted]
    setTasks(updateTasks)
    saveTasks(updateTasks)
  }

  const handleDelete = (task: ITask) => {
    deletetask(task.id)
  }

  useEffect(() => {
    const fetchTasks = () => {
      const tasksString = localStorage.getItem('tasks')
      if (tasksString) {
        const tasksArray = JSON.parse(tasksString)
        setTasks(tasksArray)
      }
    }

    fetchTasks()
  }, [])

  return (
    <>
      <Input
        placeholder="Add Task"
        value={newTaskLabel}
        onChange={handleTaskChange}
        onKeyPress={handleKeyPress}
      />
      <Input
        placeholder="Search Task"
        value={searchLabel}
        onChange={handleSearchLabel}
      />
      <ListContainer>
        <Spacer axis="vertical" size={10} />
        <TaskContainer>
          {tasks.length === 0 ? (
            <LabelEmpty>List is empty</LabelEmpty>
          ) : (
            tasks
              .filter(task => task.label.includes(searchLabel))
              .map(task => (
                <TaskItem key={task.id}>
                  <ToDelete onChange={() => handleDelete(task)} />
                  <Checkbox
                    checked={task.isComplete}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleCheck(e, task)
                    }
                  />
                  {task.isComplete ? (
                    <p
                      style={{
                        textDecoration: 'line-through',
                        textDecorationColor: 'whitesmoke',
                      }}
                    >
                      {task.label}
                    </p>
                  ) : (
                    <p>{task.label}</p>
                  )}
                </TaskItem>
              ))
          )}
        </TaskContainer>
      </ListContainer>
    </>
  )
}

export default Listview
