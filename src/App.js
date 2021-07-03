import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FilmDetailsContainer from './components/FilmDetails/FilmDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Route path='/films' render={() => <Main />} />
        <Route path='/film/:filmId' render={() => <FilmDetailsContainer />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
