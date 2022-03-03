import { AppDispatch } from "..";
import { FilmsDataApi } from "../../api/api";
import { FilmPropertiesType } from "../types/filmPropertiesType";
import { FilmActions, FilmActionsTypes } from "../types/filmsTypes";
import { GenresType } from "../types/genresType";
import { ItemType } from "../types/ItemType";

export const filmActionCreator = {
  setItems: (items: ItemType[]): FilmActions => ({
    type: FilmActionsTypes.SET_ITEMS,
    payload: items,
  }),
  setPage: (page: number): FilmActions => ({
    type: FilmActionsTypes.SET_PAGE,
    payload: page,
  }),
  setTotalResults: (totalResults: number): FilmActions => ({
    type: FilmActionsTypes.SET_TOTAL_RESULTS,
    payload: totalResults,
  }),
  setProperties: (properties: FilmPropertiesType): FilmActions => ({
    type: FilmActionsTypes.SET_PROPERTIES,
    payload: properties,
  }),
  setGenresId: (genresId: GenresType[]): FilmActions => ({
    type: FilmActionsTypes.SET_GENRES_ID,
    payload: genresId,
  }),
  setError: (error: string): FilmActions => ({
    type: FilmActionsTypes.SET_ERROR,
    payload: error,
  }),
  setIsLoading: (isLoading: boolean): FilmActions => ({
    type: FilmActionsTypes.SET_IS_LOADING,
    payload: isLoading,
  }),

  getFilmsProperty:
    (filmId: number, name: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(filmActionCreator.setIsLoading(true));
        const { data } = await FilmsDataApi.getFilmData(filmId, name);
        dispatch(filmActionCreator.setProperties(data));
      } catch (e: any) {
        dispatch(filmActionCreator.setError(e.response.data.errors));
      } finally {
        dispatch(filmActionCreator.setIsLoading(false));
      }
    },

  getFilterPopular:
    (page: number, filter: string, name: string) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(filmActionCreator.setIsLoading(true));
        const { data } = await FilmsDataApi.getPopularFilms(page, filter, name);
        dispatch(filmActionCreator.setItems(data.results));
        dispatch(filmActionCreator.setTotalResults(data.total_results));
      } catch (e: any) {
        dispatch(filmActionCreator.setError(e.response?.data?.errors));
      } finally {
        dispatch(filmActionCreator.setIsLoading(false));
      }
    },

  getSerchingFilter:
    (searchName: any, page: number, name: string) =>
    async (dispatch: AppDispatch) => {
      try {
        dispatch(filmActionCreator.setIsLoading(true));
        const { data } = await FilmsDataApi.getSerchFilm(
          searchName,
          page,
          name
        );
        dispatch(filmActionCreator.setItems(data.results));
        dispatch(filmActionCreator.setTotalResults(data.total_results));
      } catch (e: any) {
        dispatch(filmActionCreator.setError(e.response.data.errors));
      } finally {
        dispatch(filmActionCreator.setIsLoading(false));
      }
    },

  getAllGenres: (name: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(filmActionCreator.setIsLoading(true));
      const { data } = await FilmsDataApi.getGenresId(name);
      dispatch(filmActionCreator.setGenresId(data.genres));
    } catch (e: any) {
      dispatch(filmActionCreator.setError(e.response.data.errors));
    } finally {
      dispatch(filmActionCreator.setIsLoading(false));
    }
  },
};
