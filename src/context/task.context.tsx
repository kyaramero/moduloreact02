import React, { useContext, createContext, useState, useEffect } from 'react'
import { ITask } from '../screens/Listview/Listview.types'
import { nanoid } from 'nanoid'

interface ITaskContext {
  tasks: ITask[]
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
  newTaskLabel: string
  setNewTaskLabel: React.Dispatch<React.SetStateAction<string>>
  searchLabel: string
  setSearchLabel: React.Dispatch<React.SetStateAction<string>>
  taskFilter: ITask[]
  saveTasks: (updateTasks: ITask[]) => void
  addTask: (label: string) => void
  handleTaskChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleKeyPress: (e: React.KeyboardEvent) => void
}

interface IProps {
  children: React.ReactNode
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext)

const TaskProvider = ({ children }: IProps) => {
  const [newTaskLabel, setNewTaskLabel] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])
  const [searchLabel, setSearchLabel] = useState('')
  const [taskFilter, setTaskFilter] = useState<ITask[]>([])

  const saveTasks = (updateTasks: ITask[]) => {
    const tasksString = JSON.stringify(updateTasks)
    localStorage.setItem('tasks', tasksString)
  }

  const addTask = (label: string) => {
    const alreadyExists = tasks.find(task =>
      task.label === label ? true : false
    )
    if (!alreadyExists) {
      const currTask: ITask = { id: nanoid(), label: label, isComplete: false }
      const updateTasks = [...tasks, currTask]
      setTasks(updateTasks)
      saveTasks(updateTasks)
    } else {
      alert('🚨Try another. This task already exists!🥲')
    }
  }

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskLabel(e.target.value)
  }
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTaskLabel !== '') {
      addTask(newTaskLabel)
      setNewTaskLabel('')
    }
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

  useEffect(() => {
    const listTask = tasks.filter(task =>
      task.label.toLowerCase().includes(searchLabel.toLowerCase())
    )
    setTaskFilter(listTask)
  }, [searchLabel, tasks])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        newTaskLabel,
        setNewTaskLabel,
        searchLabel,
        setSearchLabel,
        taskFilter,
        saveTasks,
        addTask,
        handleTaskChange,
        handleKeyPress,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => useContext(TaskContext)

export { TaskProvider, useTask }
