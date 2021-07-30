export const getFilmId = (state) => {
	return state.films.filmId
}

export const getFilmHover = (state) => {
	return state.films.hover
}

export const getItems = (state) => {
	return state.films.items
}

export const getPageSize = (state) => {
	return state.films.pageSize
}

export const getTotalResults = (state) => {
	return state.films.totalResults
}

export const getPage = (state) => {
	return state.films.page
}

export const getProperties = (state) => {
	return state.films.properties
}

export const getSearchName = (state) => {
	return state.search.searchName
}

export const getFilter = (state) => {
	return state.search.filter
}

export const getAllGenresId = (state) => {
	return state.films.genresId
}