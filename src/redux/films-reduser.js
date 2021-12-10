import { getFilmData, getGenresId, getPopularFilms, getSerchFilm } from '../api/api'

const SET_ITEMS = 'SET_ITEMS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'
const SET_PROPERTIES = 'SET_PROPERTIES'
const SET_HOVER = 'SET_HOVER'
const SET_FILM_ID = 'SET_FILM_ID'
const SET_GENRES_ID = 'SET_GENRES_ID'

let initialState = {
	filmId: [508943],
	hover: false,
	items: [],
	pageSize: 20,
	totalResults: 100,
	page: 1,
	genresId: [],
	properties: {
		poster_path: '',
		original_title: '',
		overview: '',
		release_date: '',
		runtime: 95,
		vote_average: 2.2,
		genres: [
			{
				id: 16,
				name: 'Animation'
			},
			{
				id: 35,
				name: 'Comedy'
			},
			{
				id: 10751,
				name: 'Family'
			},
			{
				id: 14,
				name: 'Fantasy'
			}
		]
	}
}

const filmsReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_FILM_ID:
			return {
				...state, filmId: action.id
			}

		case SET_HOVER:
			return {
				...state, hover: action.id
			}

		case SET_ITEMS:
			return {
				...state, items: action.items
			}

		case SET_PAGE:
			return {
				...state, page: action.page
			}

		case SET_TOTAL_RESULTS:
			return {
				...state, totalResults: action.totalResults
			}

		case SET_PROPERTIES:
			return {
				...state,
				properties: action.properties,
				genres: action.genres
			}

		case SET_GENRES_ID:
			return {
				...state, genresId: action.genresId
			}

		default:
			return state
	}
}

export const setHover = (id) => ({ type: SET_HOVER, id })
export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setPage = (page) => ({ type: SET_PAGE, page })
export const setTotalResults = (totalResults) => ({ type: SET_TOTAL_RESULTS, totalResults })
export const setProperties = (properties) => ({ type: SET_PROPERTIES, properties })
export const setFilmId = (id) => ({ type: SET_FILM_ID, id })
export const setGenresId = (genresId) => ({ type: SET_GENRES_ID, genresId })

export const getFilmsProperty = (filmId, name) => {
	return (dispatch) => {
		getFilmData(filmId, name).then(data => {
			dispatch(setProperties(data))
		})
	}
}

export const getFilterPopular = (page, filter, name) => {
	return (dispatch) => {
		getPopularFilms(page, filter, name).then(data => {
			dispatch(setItems(data.results))
			dispatch(setTotalResults(data.total_results))
		})
	}
}

export const getSerchingFilter = (searchName, page, name) => {
	return (dispatch) => {
		getSerchFilm(searchName, page, name).then(data => {
			dispatch(setItems(data.results))
			dispatch(setTotalResults(data.total_results))
		})
	}
}

export const getAllGenres = (name) => {
	return (dispatch) => {
		getGenresId(name).then(data => {
			dispatch(setGenresId(data.genres))
		})
	}
}

export default filmsReduser