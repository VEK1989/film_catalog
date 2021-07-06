import { combineReducers, createStore } from "redux";
import filmsReduser from "./films-reduser.js";
import searchReduser from "./search-reduser.js";

let redusers = combineReducers({
	films: filmsReduser,
	search: searchReduser
})

let store = createStore(redusers)

export default store;