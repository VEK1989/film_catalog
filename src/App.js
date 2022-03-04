import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./pages/Main/Main";
import FilmDetailsContainer from "./pages/FilmDetails/FilmDetailsContainer";
import { useDarkMode } from "./hooks/useDarkMode";
import { Context } from "./components/Context/Context";

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <BrowserRouter>
      <Context.Provider value={{ theme, themeToggler }}>
        <div className={theme === "light" ? "body" : "darkBody"}>
          <div className="wrapper">
            <Header />
            <Switch>
              <Redirect exact from="/" to="/films" />
              <Route
                path="/details/:film/:filmId"
                render={() => <FilmDetailsContainer />}
              />
              <Route path="/" render={() => <Main />} />
            </Switch>
          </div>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
