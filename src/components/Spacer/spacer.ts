import styled from 'styled-components'

interface ISpacer {
  axis: string
  size: number
}

const getWidth = ({ axis, size }: ISpacer) => {
  return axis === 'vertical' ? 1 : size
}

const getHeight = ({ axis, size }: ISpacer) => {
  return axis === 'horizontal' ? 1 : size
}

export const Spacer = styled.span`
  display: block;
  width: ${getWidth}px;
  height: ${getHeight}px;
`
