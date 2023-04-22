import React, { ChangeEvent, useMemo } from 'react'
import { ListContainer, TaskContainer, TaskItem } from './Listview.style'
import Checkbox from '../../components/Checkbox/checkbox'
import { ITask } from './Listview.types'
import { Spacer } from '../../components/Spacer/spacer'
import ToDelete from '../../components/Delete'
import { useTask } from '../../context/task.context'
import TasksStatus from '../../components/Status'

const Listview = () => {
  const { tasks, setTasks, taskFilter, saveTasks } = useTask()

  // const tasksToComplete = useMemo(() => {
  //   let numToComplete = 0
  //   const toComplete = tasks.filter(task => {
  //     if (task.isComplete === false) numToComplete++
  //   })
  //   return numToComplete
  // }, [tasks])

  const updateComplete = (id: string, isComplete: boolean) => {
    const toBeUpdated = tasks.map(task =>
      task.id === id ? { ...task, isComplete } : task
    )
    const updateTasks = [...toBeUpdated]
    setTasks(updateTasks)
    saveTasks(updateTasks)
  }

  const handleCheck = (e: ChangeEvent<HTMLInputElement>, task: ITask) => {
    updateComplete(task.id, e.target.checked)
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

  return (
    <>
      <ListContainer>
        <Spacer axis="vertical" size={10} />
        <TaskContainer>
          {tasks.length === 0
            ? 'List is empty'
            : taskFilter.map(task => (
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
              ))}
        </TaskContainer>
      </ListContainer>
      <TasksStatus />
    </>
  )
}

export default Listview
