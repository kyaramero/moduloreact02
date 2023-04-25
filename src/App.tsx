import { lazy, Suspense } from 'react'
import { GlobalStyle, AppContainer } from './global'
import { TaskProvider } from './context/task.context'
const Search = lazy(() => import('./components/Search'))
const Header = lazy(() => import('./components/Header/header'))
const Listview = lazy(() => import('./screens/Listview/Listview'))

const App = () => {
  return (
    <>
      <AppContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <TaskProvider>
            <GlobalStyle />
            <Header />
            <Search />
            <Listview />
          </TaskProvider>
        </Suspense>
      </AppContainer>
    </>
  )
}

export default App
