import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  LabelCheckbox,
  StyledCheckbox,
} from './checkbox.style'

export interface ICheckbox {
  label: string
  checked: boolean
  onChange: (params: any) => any
}

const Checkbox = ({ label, checked, onChange }: ICheckbox) => {
  return (
    <CheckboxContainer checked={checked} onClick={onChange}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox />
      <LabelCheckbox checked={checked}>{label}</LabelCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
