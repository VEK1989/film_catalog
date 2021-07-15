const SET_SEARCH_NAME = 'SET_SEARCH_NAME'
const SET_FILTER_CHANGE = 'SET_FILTER_CHANGE'

let initialState = {
	searchName: '',
	filter: 'popular'
}

const searchReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_NAME:
			return {
				...state, searchName: action.query
			}

		case SET_FILTER_CHANGE:
			return {
				...state, filter: action.value
			}

		default:
			return state
	}
}

export const setSearchName = (query) => ({ type: SET_SEARCH_NAME, query })
export const setFilterChange = (value) => ({ type: SET_FILTER_CHANGE, value })


export default searchReduser;