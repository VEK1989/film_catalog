import * as axios from "axios";

const apiKey = '808cfd2d723af708f7da7e18f3b10d1e'
const langEng = 'en-US'

const instans = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
})

const errorProcessing = (err) => {
	if (err.response) {
		// client received an error response (5xx, 4xx)
		console.log(err.response)
	} else if (err.request) {
		// client never received a response, or request never left 
		console.log(err.request)
	} else {
		// anything else
		console.log(err)
	}
}

export const getPopularFilms = (page, value = 'popular') => {
	return instans.get(`movie/${value}?api_key=${apiKey}&language=${langEng}&page=${page}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}

export const getFilmData = (filmId) => {
	return instans.get(`movie/${filmId}?api_key=${apiKey}&language=${langEng}`)
		.then(response => {
			return response.data
		})
		.catch(err => {
			errorProcessing(err)
		})
}

export const getSerchFilm = (query, page) => {
	return instans.get(`search/movie?api_key=${apiKey}&query=${query}&page=${page}`)
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