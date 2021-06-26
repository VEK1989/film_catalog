import { combineReducers, createStore } from "redux";
import filmReduser from "./film-reduser";


let redusers = combineReducers({
	film: filmReduser
})

let store = createStore(redusers)

export default store