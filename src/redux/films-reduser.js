const SET_ITEMS = 'SET_ITEMS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'
const SET_PROPERTIES = 'SET_PROPERTIES'
const SET_HOVER = 'SET_HOVER'
const SET_FILM_ID = 'SET_FILM_ID'

let initialState = {
	filmId: [],
	hover: false,
	items: [],
	pageSize: 20,
	totalResults: 100,
	page: 1,
	properties: {
		release_date: 2020,
		runtime: 95,
		vote_average: 2.2,
		genres: [
			{
				id: 16,
				name: "Animation"
			},
			{
				id: 35,
				name: "Comedy"
			},
			{
				id: 10751,
				name: "Family"
			},
			{
				id: 14,
				name: "Fantasy"
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

export default filmsReduser;