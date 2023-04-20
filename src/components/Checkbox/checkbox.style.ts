import styled from 'styled-components'
import { theme } from '../../global'

export const CheckboxContainer = styled.div<{ checked: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props =>
    props.checked ? `${theme.success}` : `${theme.undone}`};
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
`

export const LabelCheckbox = styled.label<{ checked: boolean }>`
  cursor: pointer;
  user-select: none;
`

export const StyledCheckbox = styled.label``
