import { FilmPropertiesType } from "./filmPropertiesType";
import { GenresType } from "./genresType";
import { ItemType } from "./ItemType";

export interface FilmsType {
  items: ItemType[];
  pageSize: number;
  totalResults: number;
  page: number;
  genresId: GenresType[];
  properties: FilmPropertiesType;
  error: string;
  isLoading: boolean;
}

export enum FilmActionsTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_PAGE = "SET_PAGE",
  SET_TOTAL_RESULTS = "SET_TOTAL_RESULTS",
  SET_PROPERTIES = "SET_PROPERTIES",
  SET_GENRES_ID = "SET_GENRES_ID",
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
}

interface SetItemsAction {
  type: FilmActionsTypes.SET_ITEMS;
  payload: ItemType[];
}

interface SetPageAction {
  type: FilmActionsTypes.SET_PAGE;
  payload: number;
}

interface SetTotalResultsAction {
  type: FilmActionsTypes.SET_TOTAL_RESULTS;
  payload: number;
}

interface SetPropertiesAction {
  type: FilmActionsTypes.SET_PROPERTIES;
  payload: FilmPropertiesType;
}

interface SetGenresIdAction {
  type: FilmActionsTypes.SET_GENRES_ID;
  payload: GenresType[];
}

interface SetErrorAction {
  type: FilmActionsTypes.SET_ERROR;
  payload: string;
}

interface SetIsLoadingAction {
  type: FilmActionsTypes.SET_IS_LOADING;
  payload: boolean;
}

export type FilmActions =
  | SetItemsAction
  | SetPageAction
  | SetTotalResultsAction
  | SetPropertiesAction
  | SetGenresIdAction
  | SetErrorAction
  | SetIsLoadingAction;
