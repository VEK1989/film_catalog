import { filmActionTypes } from '../actionTypes/filmActionTypes'
import { getFilmData, getGenresId, getPopularFilms, getSerchFilm } from '../../api/api'


export const filmActionCreator = {
	setHover: (id) => ({ type: filmActionTypes.SET_HOVER, id }),
	setItems: (items) => ({ type: filmActionTypes.SET_ITEMS, items }),
	setPage: (page) => ({ type: filmActionTypes.SET_PAGE, page }),
	setTotalResults: (totalResults) => ({ type: filmActionTypes.SET_TOTAL_RESULTS, totalResults }),
	setProperties: (properties) => ({ type: filmActionTypes.SET_PROPERTIES, properties }),
	setFilmId: (id) => ({ type: filmActionTypes.SET_FILM_ID, id }),
	setGenresId: (genresId) => ({ type: filmActionTypes.SET_GENRES_ID, genresId }),

	getFilmsProperty: (filmId, name) => async (dispatch) => {
		try {
			const data = await getFilmData(filmId, name)
			dispatch(filmActionCreator.setProperties(data))
		}
		catch (e) {
			console.log(e)
		}
	},

	getFilterPopular: (page, filter, name) => async (dispatch) => {
		try {
			const data = await getPopularFilms(page, filter, name)
			dispatch(filmActionCreator.setItems(data.results))
			dispatch(filmActionCreator.setTotalResults(data.total_results))
		}
		catch (e) {
			console.log(e)
		}
	},

	getSerchingFilter: (searchName, page, name) => async (dispatch) => {
		try {
			const data = await getSerchFilm(searchName, page, name)
			dispatch(filmActionCreator.setItems(data.results))
			dispatch(filmActionCreator.setTotalResults(data.total_results))
		}
		catch (e) {
			console.log(e)
		}
	},


	getAllGenres: (name) => async (dispatch) => {
		try {
			const data = await getGenresId(name)
			dispatch(filmActionCreator.setGenresId(data.genres))
		}
		catch (e) {
			console.log(e)
		}
	}
}