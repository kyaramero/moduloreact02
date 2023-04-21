import React from 'react'
import { DeleteBtn } from './delete.style'

export interface IDelete {
  onChange: (params: any) => any
}

const ToDelete = ({ onChange }: IDelete) => {
  return <DeleteBtn onClick={onChange}>🗑️</DeleteBtn>
}

export default ToDelete
