import { applyMiddleware, combineReducers, createStore } from "redux";
import filmsReduser from "./films-reduser.js";
import searchReduser from "./search-reduser.js";
import thunk from 'redux-thunk'

let redusers = combineReducers({
	films: filmsReduser,
	search: searchReduser
})

let store = createStore(redusers, applyMiddleware(thunk))

export default store;