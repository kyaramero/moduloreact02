import React, { useState, useEffect } from 'react'
import ButtonCounter from '../Button/button'
import List from '../List/list'
import RadioButtonsGroup from '../Radio/radio'
import './controller.css'

const Controller = () => {
  const [counter, setCounter] = useState(0)
  const [value, setValue] = useState('whatever')
  const [arr, setArr] = useState<number[]>([])

  // Radio
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Button
  const handleClick = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  // Random Array
  const random = () => {
    let num = Math.floor(Math.random() * 100) + 1
    if (value === 'even' && num % 2 !== 0) {
      while (num % 2 !== 0) {
        num = Math.floor(Math.random() * 100) + 1
      }
    }
    if (value === 'odd' && num % 2 == 0) {
      while (num % 2 == 0) {
        num = Math.floor(Math.random() * 100) + 1
      }
    }
    setArr([...arr, num])
  }

  useEffect(() => {
    if (counter > 0) random()
  }, [counter])

  return (
    <div className="container">
      <List arr={arr} />
      <RadioButtonsGroup doSomething={handleChange} />
      <ButtonCounter
        title="Generate"
        doSomething={handleClick}
        count={counter}
        active
      />
    </div>
  )
}

export default Controller
