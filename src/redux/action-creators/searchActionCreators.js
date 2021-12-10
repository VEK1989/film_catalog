import { searchActionTypes } from '../actionTypes/searchActionTypes'

export const searchActionCreators = {
	setSearchName: (query) => ({ type: searchActionTypes.SET_SEARCH_NAME, query }),
	setFilterChange: (value) => ({ type: searchActionTypes.SET_FILTER_CHANGE, value })
}