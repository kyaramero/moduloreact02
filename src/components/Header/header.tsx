import React from 'react'
import { HeaderContainer, HeaderTitle, AddTask } from './header.style'
import iconAdd from '../../assets/iconAdd.png'
import { Spacer } from '../Spacer/spacer'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>todo</HeaderTitle>
      <AddTask>
        <img src={iconAdd}></img>
      </AddTask>
    </HeaderContainer>
  )
}

export default Header
