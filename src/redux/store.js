import { combineReducers, createStore } from "redux";
import filmsReduser from "./films-reduser.js";
import filmReduser from "./film-reduser.js";

let redusers = combineReducers({
	films: filmsReduser,
	film: filmReduser
})

let store = createStore(redusers)

export default store