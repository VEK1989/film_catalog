import { filmActionTypes } from '../actionTypes/filmActionTypes'
import { FilmsDataApi } from '../../api/api'


export const filmActionCreator = {
	setHover: (id) => ({ type: filmActionTypes.SET_HOVER, id }),
	setItems: (items) => ({ type: filmActionTypes.SET_ITEMS, items }),
	setPage: (page) => ({ type: filmActionTypes.SET_PAGE, page }),
	setTotalResults: (totalResults) => ({ type: filmActionTypes.SET_TOTAL_RESULTS, totalResults }),
	setProperties: (properties) => ({ type: filmActionTypes.SET_PROPERTIES, properties }),
	setFilmId: (id) => ({ type: filmActionTypes.SET_FILM_ID, id }),
	setGenresId: (genresId) => ({ type: filmActionTypes.SET_GENRES_ID, genresId }),
	setError: (error) => ({ type: filmActionTypes.SET_ERROR, error }),
	setIsLoading: (isLoading) => ({ type: filmActionTypes.SET_IS_LOADING, isLoading }),

	getFilmsProperty: (filmId, name) => async (dispatch) => {
		try {
			dispatch(filmActionCreator.setIsLoading(true))
			const data = await FilmsDataApi.getFilmData(filmId, name)
			dispatch(filmActionCreator.setProperties(data))
		}
		catch (e) {
			dispatch(filmActionCreator.setError(e.response.data.errors))
		}
		finally {
			dispatch(filmActionCreator.setIsLoading(false))
		}
	},

	getFilterPopular: (page, filter, name) => async (dispatch) => {
		try {
			dispatch(filmActionCreator.setIsLoading(true))
			const data = await FilmsDataApi.getPopularFilms(page, filter, name)
			dispatch(filmActionCreator.setItems(data.results))
			dispatch(filmActionCreator.setTotalResults(data.total_results))
		}
		catch (e) {
			dispatch(filmActionCreator.setError(e.response.data.errors))
		}
		finally {
			dispatch(filmActionCreator.setIsLoading(false))
		}
	},

	getSerchingFilter: (searchName, page, name) => async (dispatch) => {
		try {
			dispatch(filmActionCreator.setIsLoading(true))
			const data = await FilmsDataApi.getSerchFilm(searchName, page, name)
			dispatch(filmActionCreator.setItems(data.results))
			dispatch(filmActionCreator.setTotalResults(data.total_results))
		}
		catch (e) {
			dispatch(filmActionCreator.setError(e.response.data.errors))
		}
		finally {
			dispatch(filmActionCreator.setIsLoading(false))
		}
	},


	getAllGenres: (name) => async (dispatch) => {
		try {
			dispatch(filmActionCreator.setIsLoading(true))
			const data = await FilmsDataApi.getGenresId(name)
			dispatch(filmActionCreator.setGenresId(data.genres))
		}
		catch (e) {
			dispatch(filmActionCreator.setError(e.response.data.errors))
		}
		finally {
			dispatch(filmActionCreator.setIsLoading(false))
		}
	}
}