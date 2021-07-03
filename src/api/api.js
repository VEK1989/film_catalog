import * as axios from "axios";

const apiKey = '808cfd2d723af708f7da7e18f3b10d1e'
const langEng = 'en-US'

const instans = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
})

export const getPopularFilms = (page) => {
	return instans.get(`movie/popular?api_key=${apiKey}&language=${langEng}&page=${page}`)
		.then(response => {
			return response.data
		})
}

export const getFilmData = (filmId) => {
	return instans.get(`movie/${filmId}?api_key=${apiKey}&language=${langEng}`)
		.then(response => {
			return response.data
		})
}

export const getSerchFilm = (query) => {
	return instans.get(`search/movie?api_key=${apiKey}&query=${query}`)
		.then(response => {
			return response.data
		})
}