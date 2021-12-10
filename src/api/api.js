import * as axios from 'axios'

const apiKey = '808cfd2d723af708f7da7e18f3b10d1e'
const langEng = 'en-US'

const instans = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
})

const errorProcessing = (err) => {
	if (err.response) {
		console.log(err.response)
	} else if (err.request) {
		console.log(err.request)
	} else {
		console.log(err)
	}
}

export const getPopularFilms = (page, value = 'popular', name) => {
	return instans.get(`${name}/${value}?api_key=${apiKey}&language=${langEng}&page=${page}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}

export const getFilmData = (filmId, name) => {
	return instans.get(`${name}/${filmId}?api_key=${apiKey}&language=${langEng}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}

export const getSerchFilm = (query, page, name) => {
	return instans.get(`search/${name}?api_key=${apiKey}&query=${query}&page=${page}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}

export const getGenresId = (name) => {
	return instans.get(`genre/${name}/list?api_key=${apiKey}&language=${langEng}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}