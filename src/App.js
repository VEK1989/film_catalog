import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import FilmDetailsContainer from './components/FilmDetails/FilmDetailsContainer'
import { useDarkMode } from './components/Commons/ThemeToggle/useDarkMode'

const App = () => {
  const [theme, themeToggler] = useDarkMode()

  return (
    < BrowserRouter >
      <div className={theme === 'light' ? 'body' : 'darkBody'}>
        <div className='wrapper'>
          <Header theme={theme} toggleTheme={themeToggler} />
          <Switch>
            <Redirect exact from='/' to='/films' />
            <Route path='/details/:film/:filmId' render={() => <FilmDetailsContainer theme={theme} />} />
            <Route path='/' render={() => <Main theme={theme} />} />
          </Switch>
        </div>
      </div>
    </ BrowserRouter >
  )
}

export default App
