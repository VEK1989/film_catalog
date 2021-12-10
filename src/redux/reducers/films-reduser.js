import { filmActionTypes } from '../actionTypes/filmActionTypes'

const initialState = {
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
		case filmActionTypes.SET_FILM_ID:
			return {
				...state, filmId: action.id
			}

		case filmActionTypes.SET_HOVER:
			return {
				...state, hover: action.id
			}

		case filmActionTypes.SET_ITEMS:
			return {
				...state, items: action.items
			}

		case filmActionTypes.SET_PAGE:
			return {
				...state, page: action.page
			}

		case filmActionTypes.SET_TOTAL_RESULTS:
			return {
				...state, totalResults: action.totalResults
			}

		case filmActionTypes.SET_PROPERTIES:
			return {
				...state,
				properties: action.properties,
				genres: action.genres
			}

		case filmActionTypes.SET_GENRES_ID:
			return {
				...state, genresId: action.genresId
			}

		default:
			return state
	}
}

export default filmsReduser