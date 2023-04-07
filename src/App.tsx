import React from 'react'
import { GlobalStyle, AppContainer } from './global'
import Header from './components/Header/header'
import Listview from './components/Listview/Listview'

const App = () => {
  return (
    <>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Listview />
      </AppContainer>
    </>
  )
}

export default App
