import React from 'react'
import { HeaderContainer, HeaderTitle } from './header.style'
import Input from '../Input'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>todo</HeaderTitle>
      <Input />
    </HeaderContainer>
  )
}

export default Header
