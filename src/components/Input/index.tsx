import React from 'react'
import { InputPlace } from './style'

interface IInput {
  placeholder: string
  value: string
  onChange: (params: any) => any
  onKeyPress: (params: any) => any
}

const Input = () => {
  return (
    <InputPlace
    //   placeholder={placeholder}
    //   value={value}
    //   onChange={onChange}
    //   onKeyPress={onKeyPress}
    />
  )
}

export default Input
