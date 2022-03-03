import { FilmPropertiesType } from "../types/filmPropertiesType";
import { FilmActions, FilmActionsTypes, FilmsType } from "../types/filmsTypes";

const initialState: FilmsType = {
  items: [],
  pageSize: 20,
  totalResults: 100,
  page: 1,
  genresId: [],
  properties: {} as FilmPropertiesType,
  error: "",
  isLoading: false,
};

const filmsReduser = (state = initialState, action: FilmActions): FilmsType => {
  switch (action.type) {
    case FilmActionsTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };

    case FilmActionsTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case FilmActionsTypes.SET_TOTAL_RESULTS:
      return {
        ...state,
        totalResults: action.payload,
      };

    case FilmActionsTypes.SET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    case FilmActionsTypes.SET_GENRES_ID:
      return {
        ...state,
        genresId: action.payload,
      };

    case FilmActionsTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case FilmActionsTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default filmsReduser;
