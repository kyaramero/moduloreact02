import React from 'react'
import { GlobalStyle, AppContainer } from './global'
import Header from './components/Header/header'
import Listview from './screens/Listview/Listview'
import { TaskProvider } from './context/task.context'
import Search from './components/Search'

const App = () => {
  return (
    <>
      <AppContainer>
        <TaskProvider>
          <GlobalStyle />
          <Header />
          <Search />
          <Listview />
        </TaskProvider>
      </AppContainer>
    </>
  )
}

export default App
