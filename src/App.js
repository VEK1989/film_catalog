import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import FilmDetailsContainer from './components/FilmDetails/FilmDetailsContainer';
import { GlobalStyles } from './components/Commons/ThemeToggle/GlobalStyles';
import { lightTheme, darkTheme } from './components/Commons/ThemeToggle/Themes';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/Commons/ThemeToggle/useDarkMode';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="body">
          <Header theme={theme} toggleTheme={themeToggler} />
          <Switch>
            <Redirect exact from='/' to='/films' />
            <Route path='/film/:filmId' render={() => <FilmDetailsContainer theme={theme} />} />
            <Route path='/' render={() => <Main theme={theme} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
