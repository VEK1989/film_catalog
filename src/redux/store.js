import { combineReducers, createStore } from "redux";
import filmsReduser from "./films-reduser";


let redusers = combineReducers({
	films: filmsReduser
})

let store = createStore(redusers)

export default store