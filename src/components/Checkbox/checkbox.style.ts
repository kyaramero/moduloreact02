import styled from 'styled-components'
import { theme } from '../../global'

export const CheckboxContainer = styled.div<{ checked: boolean }>`
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;

  background-color: ${props =>
    props.checked ? `${theme.success}` : `${theme.undone}`};
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })``

export const LabelCheckbox = styled.label<{ checked: boolean }>``

export const StyledCheckbox = styled.label``
