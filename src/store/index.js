import { applyMiddleware, combineReducers, createStore } from "redux";
import filmsReduser from "./reducers/films-reduser";
import searchReduser from "./reducers/search-reduser";
import thunk from "redux-thunk";

let redusers = combineReducers({
  films: filmsReduser,
  search: searchReduser,
});

let store = createStore(redusers, applyMiddleware(thunk));

export default store;
