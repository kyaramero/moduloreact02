import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  LabelCheckbox,
  StyledCheckbox,
} from './checkbox.style'

export interface ICheckbox {
  checked: boolean
  onChange: (params: any) => void
}

const Checkbox = ({ checked, onChange }: ICheckbox) => {
  return (
    <CheckboxContainer checked={checked} onClick={onChange}>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox />
      <LabelCheckbox checked={checked}></LabelCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
