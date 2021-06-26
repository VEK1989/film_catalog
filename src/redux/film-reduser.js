const SET_ITEMS = 'SET_ITEMS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'

let initialState = {
	items: [],
	pageSize: 20,
	totalResults: 100,
	page: 2
}

const filmReduser = (state = initialState, action) => {
	switch (action.type) {
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

		default:
			return state
	}
}

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setPage = (page) => ({ type: SET_PAGE, page })
export const setTotalResults = (totalResults) => ({ type: SET_TOTAL_RESULTS, totalResults })

export default filmReduser;