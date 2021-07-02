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
        <Route path='/' render={() => <Main />} />
        <Route path='/films/:filmId?' render={() => <FilmDetailsContainer />} />
      </div>
    </BrowserRouter>
  )
}

export default App;
