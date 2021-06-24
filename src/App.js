import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  )
}

export default App;
