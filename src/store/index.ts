import { applyMiddleware, combineReducers, createStore } from "redux";
import filmsReduser from "./reducers/filmsReducer";
import searchReduser from "./reducers/searchReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  films: filmsReduser,
  search: searchReduser,
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
