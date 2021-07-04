import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FilmDetailsContainer from './components/FilmDetails/FilmDetailsContainer';
import SearchPage from './components/Header/Search/SearchPage/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Switch>
          <Redirect exact from='/' to='/films' />
          <Route path='/film/:filmId' render={() => <FilmDetailsContainer />} />
          <Route path='/search' render={() => <SearchPage />} />
          <Route path='/' render={() => <Main />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
